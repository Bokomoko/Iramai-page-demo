import styles from './cover.module.css';
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// cover_title : the title of the job
// description : multine description of the job
// cover_cta : label of the button to apply to this job
// cta_url : link to page for application to this job
// Button : will have a prop that points to the application page of this job

export default function Cover(props) {
  const { cover_title, description, cover_cta, cta_url } = props;

  return (
    <div className={styles.coverimage}>
      <div className={styles.jobdesc}>
        <h1>{cover_title}</h1>
        <p>{description}</p>
        <Button jobcta={cta_url}>{cover_cta}</Button>
      </div>
    </div>
  );
}
