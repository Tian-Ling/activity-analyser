import React, { FunctionComponent, useState, useLayoutEffect } from 'react';
import 'Styles/activity';
import ActivityGraph from 'Components/ActivityGraph/ActivityGraph';
import EmptyGraph from 'Components/ActivityGraph/EmptyGraph';
import Body from './ActivityAnalyticsBody';
import { ActivityInformation } from 'Types/CommonActivityTypes';
import fileApi, { ParsedFitFile } from 'Api/fileApi';
import { Serie } from '@nivo/line';

const ActivityAnalytics: FunctionComponent = () => {
  const [graphData, setGraphData] = useState<Serie[]>(null);
  const [activityFile, setActivityFile] = useState<File>(null);
  const [activityInformation, setActivityInformation] = useState<ActivityInformation>({
    averageCadence: null,
    averageHeartRate: null,
    averageSpeed: null,
    averagePower: null,
  });

  useLayoutEffect(() => {
    if (activityFile) {
      fileApi.parseFitFile(activityFile).then((parsedFile: ParsedFitFile) => {
        const { dataPoints, sessionInformation } = parsedFile;
        const { averageCadence, averageHeartRate, averagePower, averageSpeed } = sessionInformation;

        setActivityInformation({
          averageCadence,
          averageHeartRate,
          averagePower,
          averageSpeed,
        });

        setGraphData([
          {
            id: 'power',
            color: 'rgb(255, 244, 78)',
            data: dataPoints,
          },
        ]);
      });
    }
  }, [activityFile]);

  return (
    <>
      <div className={`activity-graph-container ${graphData ? '' : 'empty-graph'}`}>
        {graphData ? <ActivityGraph graphData={graphData} maxPoints={3000}></ActivityGraph> : <EmptyGraph></EmptyGraph>}
      </div>
      <Body setImportFile={setActivityFile} activityInformation={activityInformation}></Body>
    </>
  );
};

export default ActivityAnalytics;
