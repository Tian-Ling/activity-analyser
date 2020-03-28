import React, { FunctionComponent } from 'react';
import { ResponsiveLine, Serie } from '@nivo/line';

export type ActivityGraphProps = {
  graphData: Serie[];
};

const ActivityGraph: FunctionComponent<ActivityGraphProps> = ({
  graphData
}: ActivityGraphProps) => {
  return (
    <ResponsiveLine
      data={graphData}
      curve="natural"
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
    ></ResponsiveLine>
  );
};

export default ActivityGraph;
