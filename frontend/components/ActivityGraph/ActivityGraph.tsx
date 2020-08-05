import 'Styles/activity';
import 'Styles/activityGraph';
import React, { FunctionComponent } from 'react';
import { ResponsiveLine, Serie, PointTooltipProps } from 'nivo-enhanced-line';
import { convertSecondsToHourMinuteSeconds } from 'Helpers/timeHelpers';

export type ActivityGraphProps = {
  graphData: Serie[];
  maxPoints: number;
  brushCallback?: (points: Serie[]) => void;
};

const FormattedTooltip: FunctionComponent<PointTooltipProps> = ({ point }: PointTooltipProps) => {
  return (
    <div className="activity-graph-tooltip">
      <span>Time: {point.data.xFormatted}</span>
      <span>Power: {point.data.yFormatted}</span>
    </div>
  );
};

const ActivityGraph: FunctionComponent<ActivityGraphProps> = React.memo(
  ({ graphData, maxPoints, brushCallback }: ActivityGraphProps) => {
    return (
      <ResponsiveLine
        animate={false}
        axisBottom={{
          format: (value: Date): string => {
            const seconds = value.getTime() / 1000;
            const formattedTime = convertSecondsToHourMinuteSeconds(seconds);

            return formattedTime;
          },
          tickValues: 4,
        }}
        colors={{ datum: 'color' }}
        crosshairType={'x'}
        data={graphData}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        enableSlices={'x'}
        margin={{ top: 60, right: 50, bottom: 60, left: 50 }}
        tooltip={FormattedTooltip}
        useBrush={{
          maxNumberOfPoints: maxPoints,
          brushDataCallback: brushCallback,
        }}
        xScale={{
          type: 'time',
          format: '%s',
          precision: 'second',
        }}
        yScale={{
          type: 'linear',
        }}
      ></ResponsiveLine>
    );
  }
);

ActivityGraph.displayName = 'ActivityGraph';

export default ActivityGraph;
