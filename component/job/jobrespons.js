import styles from './cover.module.css';
import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// list_respons : a list of responsabilities for the job

export default function JobRespons(props) {
  const { responsList } = props;

  return (
    <div className={styles.jobrespons}>
      <h2>Job responsabilities</h2>
      <ul>
        <div className={styles.responslist}>
          {responsList.map((oneResponsability) => (
            <li>{oneResponsability}</li>
          ))}
        </div>
      </ul>
    </div>
  );
}
