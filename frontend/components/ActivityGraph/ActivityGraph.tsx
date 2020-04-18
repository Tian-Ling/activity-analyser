import 'Styles/activity';
import React, { FunctionComponent } from 'react';
import { ResponsiveLineCanvas, Serie } from '@nivo/line';

export type ActivityGraphProps = {
  graphData: Serie[];
};

const ActivityGraph: FunctionComponent<ActivityGraphProps> = ({
  graphData,
}: ActivityGraphProps) => {
  return (
    <ResponsiveLineCanvas
      data={graphData}
      curve="natural"
      enablePoints={false}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    ></ResponsiveLineCanvas>
  );
};

export default ActivityGraph;
