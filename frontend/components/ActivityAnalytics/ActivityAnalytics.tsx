import React, { FunctionComponent } from 'react';
import 'Styles/activity';
import ActivityGraph from 'Components/ActivityGraph/ActivityGraph';

const ActivityAnalytics: FunctionComponent = () => {
  const testGraphData1 = {
    id: 'japan',
    color: 'hsl(6, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 158
      },
      {
        x: 'helicopter',
        y: 245
      },
      {
        x: 'boat',
        y: 128
      },
      {
        x: 'train',
        y: 245
      },
      {
        x: 'subway',
        y: 282
      },
      {
        x: 'bus',
        y: 249
      },
      {
        x: 'car',
        y: 102
      },
      {
        x: 'moto',
        y: 229
      },
      {
        x: 'bicycle',
        y: 241
      },
      {
        x: 'horse',
        y: 290
      },
      {
        x: 'skateboard',
        y: 214
      },
      {
        x: 'others',
        y: 93
      }
    ]
  };

  const graphData = [testGraphData1];

  return (
    <div className="activity-graph-container">
      <ActivityGraph graphData={graphData}></ActivityGraph>
    </div>
  );
};

export default ActivityAnalytics;
