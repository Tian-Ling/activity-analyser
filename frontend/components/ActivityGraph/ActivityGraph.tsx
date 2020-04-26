import 'Styles/activity';
import React, { FunctionComponent } from 'react';
import { ResponsiveLineCanvas, Serie } from '@nivo/line';
import { getNthElement } from 'Helpers/arrayHelpers';
import { convertSecondsToHourMinuteSeconds } from 'Helpers/timeHelpers';

export type ActivityGraphProps = {
  graphData: Serie[];
  maxPoints: number;
};

function scaleGraphData(graphData: Serie[], points: number): Serie[] {
  const scaledGraph: Serie[] = [];
  const scaleFactor = Math.round(graphData[0].data.length / points);

  for (const graph of graphData) {
    const scaledGraphData = getNthElement(graph.data, scaleFactor);
    scaledGraph.push({ ...graph, data: scaledGraphData });
  }

  return scaledGraph;
}

const ActivityGraph: FunctionComponent<ActivityGraphProps> = ({ graphData, maxPoints }: ActivityGraphProps) => {
  const scaledGraph = scaleGraphData(graphData, maxPoints);

  return (
    <ResponsiveLineCanvas
      data={scaledGraph}
      curve="linear"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
      xFormat={(second: number): number => {
        return convertSecondsToHourMinuteSeconds(second);
      }}
      axisBottom={{
        format: (second: number): number => {
          return convertSecondsToHourMinuteSeconds(second);
        },
      }}
      enablePoints={false}
    ></ResponsiveLineCanvas>
  );
};

export default ActivityGraph;
