import React, { FunctionComponent } from 'react';
import ActivityFileUploader from 'Components/common/ActivityFileUploader';
import { Container, Row, Col } from 'react-bootstrap';

type ActivityAnalyticsProps = {
  setImportFile: React.Dispatch<React.SetStateAction<File>>;
};

const ActivityAnalyticsBody: FunctionComponent<ActivityAnalyticsProps> = ({
  setImportFile,
}: ActivityAnalyticsProps) => {
  return (
    <div className="activity-analytics-body">
      <ActivityFileUploader className="activity-analytics-file" setImportFile={setImportFile}></ActivityFileUploader>
      <Container className="activity-information-conatiner">
        <Row>
          <Col md={{ span: 3 }}>
            <span className="activity-field-label">Power</span>
            <span className="activity-field-value">Power Value</span>
          </Col>
          <Col md={{ span: 3 }}>
            <span className="activity-field-label">Average Power</span>
            <span className="activity-field-value">Average Power Value</span>
          </Col>
          <Col md={{ span: 3 }}>
            <span className="activity-field-label">Heart Rate</span>
            <span className="activity-field-value">Heart Rate Value</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivityAnalyticsBody;
