import React, { FunctionComponent, useCallback, useState, useLayoutEffect } from 'react';
import 'Styles/activity';
import ActivityGraph from 'Components/ActivityGraph/ActivityGraph';
import EmptyGraph from 'Components/ActivityGraph/EmptyGraph';
import Body from './ActivityAnalyticsBody';
import { ActivityInformation, DataPoints } from 'Types/CommonActivityTypes';
import fileApi, { ParsedFitFile } from 'Api/fileApi';
import { Serie } from '@nivo/line';
import { FIELD_ROUNDING, MAX_POINTS } from 'Constants/graphConstants';

const ActivityAnalytics: FunctionComponent = () => {
  const [graphData, setGraphData] = useState<Serie[]>(null);
  const [activityFile, setActivityFile] = useState<File>(null);
  const [activityInformation, setActivityInformation] = useState<ActivityInformation>({
    averageCadence: null,
    averageHeartRate: null,
    averageSpeed: null,
    averagePower: null,
    maxPower: null,
  });
  const [dataPoints, setDataPoints] = useState<DataPoints>(null);

  const brushCallback = useCallback(
    (points: Serie[]): void => {
      const { cadence, heartRate, power, speed } = dataPoints;

      const numberOfDataPoints = points[0].data.length;
      const startPoint = points[0].data[0].x as number;
      const startIndex = cadence.findIndex((c) => c.x === startPoint);

      const averages: { [key: string]: number } = {
        cadence: 0,
        heartRate: 0,
        speed: 0,
        power: 0,
      };

      for (let i = 0; i < numberOfDataPoints; i++) {
        averages.cadence += cadence[startIndex + i] ? (cadence[startIndex + i].y as number) : 0;
        averages.heartRate += heartRate[startIndex + i] ? (heartRate[startIndex + i].y as number) : 0;
        averages.speed += speed[startIndex + i] ? (speed[startIndex + i].y as number) : 0;
        averages.power += power[startIndex + i] ? (power[startIndex + i].y as number) : 0;
      }

      Object.keys(averages).forEach((average) => {
        const rounding = FIELD_ROUNDING[average];
        averages[average] /= numberOfDataPoints;

        if (rounding === 0) {
          averages[average] = Math.round(averages[average]);
        } else {
          averages[average] = parseFloat(averages[average].toFixed(2));
        }
      });

      const filteredActivityInformation = {
        ...activityInformation,
        averageCadence: averages.cadence,
        averageHeartRate: averages.heartRate,
        averagePower: averages.power,
        averageSpeed: averages.speed,
      };

      setActivityInformation(filteredActivityInformation);
    },
    [activityInformation]
  );

  useLayoutEffect(() => {
    if (activityFile) {
      fileApi.parseFitFile(activityFile).then((parsedFile: ParsedFitFile) => {
        const { dataPoints, sessionInformation } = parsedFile;
        const { averageCadence, averageHeartRate, averagePower, averageSpeed, maxPower } = sessionInformation;

        setDataPoints(dataPoints);

        setActivityInformation({
          averageCadence,
          averageHeartRate,
          averagePower,
          averageSpeed,
          maxPower,
        });

        setGraphData([
          {
            id: 'Power',
            color: 'rgb(255, 244, 78)',
            data: dataPoints.power,
          },
          {
            id: 'Heart Rate',
            color: 'rgb(245, 0, 0)',
            data: dataPoints.heartRate,
          },
        ]);
      });
    }
  }, [activityFile]);

  return (
    <>
      <div className={`activity-graph-container ${graphData ? '' : 'empty-graph'}`}>
        {graphData ? (
          <ActivityGraph graphData={graphData} maxPoints={MAX_POINTS} brushCallback={brushCallback}></ActivityGraph>
        ) : (
          <EmptyGraph />
        )}
      </div>
      <Body setImportFile={setActivityFile} activityInformation={activityInformation}></Body>
    </>
  );
};

export default ActivityAnalytics;
