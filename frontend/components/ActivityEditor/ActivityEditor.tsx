import React, { FunctionComponent } from 'react';
import 'Styles/activity';
import ActivityGraph from 'Components/ActivityGraph/ActivityGraph';

const ActivityEditor: FunctionComponent = () => {
  const testGraphData1 = {
    id: 'france',
    color: 'hsl(329, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 119,
      },
      {
        x: 'helicopter',
        y: 297,
      },
      {
        x: 'boat',
        y: 152,
      },
      {
        x: 'train',
        y: 146,
      },
      {
        x: 'subway',
        y: 109,
      },
      {
        x: 'bus',
        y: 138,
      },
      {
        x: 'car',
        y: 286,
      },
      {
        x: 'moto',
        y: 250,
      },
      {
        x: 'bicycle',
        y: 118,
      },
      {
        x: 'horse',
        y: 52,
      },
      {
        x: 'skateboard',
        y: 169,
      },
      {
        x: 'others',
        y: 58,
      },
    ],
  };

  const graphData = [testGraphData1];

  return (
    <div className="activity-graph-container">
      <ActivityGraph graphData={graphData}></ActivityGraph>
    </div>
  );
};

export default ActivityEditor;
