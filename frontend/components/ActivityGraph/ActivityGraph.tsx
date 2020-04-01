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
      enablePoints={false}
      useMesh
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    ></ResponsiveLine>
  );
};

export default ActivityGraph;
