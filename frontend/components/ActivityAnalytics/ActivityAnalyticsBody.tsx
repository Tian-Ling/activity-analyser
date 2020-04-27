import React, { FunctionComponent } from 'react';
import ActivityFileUploader from 'Components/common/ActivityFileUploader';

type ActivityAnalyticsProps = {
  setImportFile: React.Dispatch<React.SetStateAction<File>>;
};

const ActivityAnalyticsBody: FunctionComponent<ActivityAnalyticsProps> = ({
  setImportFile,
}: ActivityAnalyticsProps) => {
  return (
    <div className="activity-analytics-body">
      <ActivityFileUploader className="activity-analytics-file" setImportFile={setImportFile}></ActivityFileUploader>
    </div>
  );
};

export default ActivityAnalyticsBody;
