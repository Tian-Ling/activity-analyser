import React, { FunctionComponent, useRef } from 'react';
import { Button } from 'react-bootstrap';

type ActivityFileUploadProps = {
  setImportFile: React.Dispatch<React.SetStateAction<File>>;
  className: string;
};

const ActivityFileUploader: FunctionComponent<ActivityFileUploadProps> = ({
  setImportFile,
  className,
}: ActivityFileUploadProps) => {
  const activityFile = useRef(null);

  const onImportButtonClick = (): void => {
    activityFile.current.click();
  };

  const onActivityFileImport = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files[0];
    setImportFile(file);
  };

  return (
    <div className={className}>
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

export default ActivityFileUploader;
