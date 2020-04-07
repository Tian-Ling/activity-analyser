import React, { FunctionComponent, useState, useLayoutEffect } from 'react';
import 'Styles/activity';
import ActivityGraph from 'Components/ActivityGraph/ActivityGraph';
import Body from './ActivityAnalyticsBody';
import { parseFile } from 'Helpers/fileHelper';
import fileApi from 'Api/fileApi';

const ActivityAnalytics: FunctionComponent = () => {
  const testGraphData1 = {
    id: 'japan',
    color: 'hsl(6, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 158,
      },
      {
        x: 'helicopter',
        y: 245,
      },
      {
        x: 'boat',
        y: 128,
      },
      {
        x: 'train',
        y: 245,
      },
      {
        x: 'subway',
        y: 282,
      },
      {
        x: 'bus',
        y: 249,
      },
      {
        x: 'car',
        y: 102,
      },
      {
        x: 'moto',
        y: 229,
      },
      {
        x: 'bicycle',
        y: 241,
      },
      {
        x: 'horse',
        y: 290,
      },
      {
        x: 'skateboard',
        y: 214,
      },
      {
        x: 'others',
        y: 93,
      },
    ],
  };

  const graphData = [testGraphData1];
  const [activityFile, setActivityFile] = useState<File>(null);

  useLayoutEffect(() => {
    if (activityFile) {
      parseFile(activityFile, fileApi.parseFitFile);
    }
  }, [activityFile]);

  return (
    <div className="activity-graph-container">
      <ActivityGraph graphData={graphData}></ActivityGraph>
      <Body setImportFile={setActivityFile}></Body>
    </div>
  );
};

export default ActivityAnalytics;
