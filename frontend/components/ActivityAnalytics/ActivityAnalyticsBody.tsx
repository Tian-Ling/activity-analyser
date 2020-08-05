import React, { FunctionComponent } from 'react';
import ActivityFileUploader from 'Components/common/ActivityFileUploader';
import { Container, Row, Col } from 'react-bootstrap';
import { ActivityInformation } from 'Types/CommonActivityTypes';

type ActivityAnalyticsProps = {
  setImportFile: React.Dispatch<React.SetStateAction<File>>;
  activityInformation: ActivityInformation;
};

const ActivityAnalyticsBody: FunctionComponent<ActivityAnalyticsProps> = ({
  setImportFile,
  activityInformation,
}: ActivityAnalyticsProps) => {
  const {
    power: averagePower,
    heart_rate: averageHeartRate,
    cadence: averageCadence,
    speed: averageSpeed,
  } = activityInformation.averages;

  return (
    <div className="activity-analytics-body">
      <ActivityFileUploader className="activity-analytics-file" setImportFile={setImportFile}></ActivityFileUploader>
      <Container className="activity-information-container">
        <Row>
          <Col md={{ span: 3 }}>
            <span className="activity-field-label">Average Power</span>
            <span className="activity-field-value">{averagePower || <hr className="activity-null-value" />}</span>
          </Col>
          <Col md={{ span: 3 }}>
            <span className="activity-field-label">Average Heart Rate</span>
            <span className="activity-field-value">{averageHeartRate || <hr className="activity-null-value" />}</span>
          </Col>
          <Col md={{ span: 3 }}>
            <span className="activity-field-label">Average Cadence</span>
            <span className="activity-field-value">{averageCadence || <hr className="activity-null-value" />}</span>
          </Col>
          <Col md={{ span: 3 }}>
            <span className="activity-field-label">Average Speed</span>
            <span className="activity-field-value">{averageSpeed || <hr className="activity-null-value" />}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivityAnalyticsBody;
