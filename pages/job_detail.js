import Layout from '../component/layout';
import JobDescription from '../component/job/JobDescription';
import React from 'react';
import JobSubContent from '../component/job/JobSubContent';
import styles from '../component/job/job.module.css';
import IramaiProcess from '../component/job/iramaiprocess';
import JobReason from '../component/job/JobReason';
import Container from 'react-bootstrap/Container';
import JobApply from '../component/job/JobApply';

function PrivatePolicy() {
  return (
    <Layout>
      <JobApply />
      <JobReason />
      <div className={styles.cv_container}>
        <Container>
          <div className="d-md-flex align-items-stretch">
            <JobDescription />
            <JobSubContent />
          </div>
        </Container>
      </div>
      <IramaiProcess />
    </Layout>
  );
}

export default PrivatePolicy;
