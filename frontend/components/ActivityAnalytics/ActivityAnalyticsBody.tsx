import React, { FunctionComponent, useRef } from 'react';
import { Button } from 'react-bootstrap';

type ActivityAnalyticsProps = {
  setImportFile: React.Dispatch<React.SetStateAction<File>>;
};

const ActivityAnalyticsBody: FunctionComponent<ActivityAnalyticsProps> = ({
  setImportFile,
}: ActivityAnalyticsProps) => {
  const activityFile = useRef(null);

  const onImportButtonClick = (): void => {
    activityFile.current.click();
  };

  const onActivityFileImport = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files[0];
    setImportFile(file);
  };

  return (
    <div className="activity-analytics-body">
      <input
        id="activity-file-input"
        type="file"
        accept=".fit"
        ref={activityFile}
        style={{ display: 'none' }}
        onChange={onActivityFileImport}
      ></input>
      <Button variant="primary" onClick={onImportButtonClick}>
        Import Activity
      </Button>
    </div>
  );
};

export default ActivityAnalyticsBody;
