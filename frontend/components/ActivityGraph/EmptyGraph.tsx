import React, { FunctionComponent } from 'react';
import { ResponsiveLine } from '@nivo/line';

const EmptyGraph: FunctionComponent = () => {
  const emptyGraphData = [
    { id: 'none', data: [{ x: null as number, y: 100 }] },
  ];

  return (
    <ResponsiveLine
      data={emptyGraphData}
      curve="natural"
      enablePoints={false}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    ></ResponsiveLine>
  );
};

export default EmptyGraph;
