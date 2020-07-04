import 'Styles/activity';
import 'Styles/activityGraph';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ResponsiveLine, Serie, PointTooltipProps } from 'nivo-enhanced-line';
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

const FormattedTooltip: FunctionComponent<PointTooltipProps> = ({ point }: PointTooltipProps) => {
  return (
    <div className="activity-graph-tooltip">
      <span>Time: {point.data.xFormatted}</span>
      <span>Power: {point.data.yFormatted}</span>
    </div>
  );
};

const ActivityGraph: FunctionComponent<ActivityGraphProps> = ({ graphData, maxPoints }: ActivityGraphProps) => {
  const [scaledGraph, setScaledGraph] = useState(null);

  useEffect(() => {
    setScaledGraph(scaleGraphData(graphData, maxPoints));
  }, [graphData, maxPoints]);

  return (
    <ResponsiveLine
      axisBottom={{
        format: (second: number): number => {
          return convertSecondsToHourMinuteSeconds(second);
        },
        legend: 'Time',
        legendOffset: 35,
        legendPosition: 'middle',
      }}
      colors={{ datum: 'color' }}
      crosshairType={'x'}
      curve="linear"
      data={scaledGraph}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      enableSlices={'x'}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      tooltip={FormattedTooltip}
      xFormat={(second: number): number => {
        return convertSecondsToHourMinuteSeconds(second);
      }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
    ></ResponsiveLine>
  );
};

export default ActivityGraph;
