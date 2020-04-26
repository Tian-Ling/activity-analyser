import React, { FunctionComponent, useState, useLayoutEffect } from 'react';
import 'Styles/activity';
import ActivityGraph from 'Components/ActivityGraph/ActivityGraph';
import EmptyGraph from 'Components/ActivityGraph/EmptyGraph';
import Body from './ActivityAnalyticsBody';
import fileApi, { ParsedFitFile } from 'Api/fileApi';
import { Serie } from '@nivo/line';

const ActivityAnalytics: FunctionComponent = () => {
  const [graphData, setGraphData] = useState<Serie[]>(null);
  const [activityFile, setActivityFile] = useState<File>(null);

  useLayoutEffect(() => {
    if (activityFile) {
      fileApi.parseFitFile(activityFile).then((parsedFile: ParsedFitFile) => {
        setGraphData([
          {
            id: 'power',
            color: 'hsl(105, 70%, 50%)',
            data: parsedFile.dataPoints,
          },
        ]);
      });
    }
  }, [activityFile]);

  return (
    <>
      <div className={`activity-graph-container ${graphData ? '' : 'empty-graph'}`}>
        {graphData ? <ActivityGraph graphData={graphData} maxPoints={3000}></ActivityGraph> : <EmptyGraph></EmptyGraph>}
      </div>
      <Body setImportFile={setActivityFile}></Body>
    </>
  );
};

export default ActivityAnalytics;
