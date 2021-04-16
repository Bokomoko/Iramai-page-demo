import React from 'react';
import styles from './whyjointuring.module.css';

export default function WhyJoinTuring(props) {
  const { reasons } = props;

  return (
    <div className={styles.whyjoin}>
      <h2>Why join Turing?</h2>

      <div className={styles.reasoncontainer}>
        {reasons.map((aReason, index) => {
          return (
            <div className={styles.reasonbox} key={'wjt' + index}>
              <img src={aReason.icon} />
              <h5>{aReason.title}</h5>
              <p>{aReason.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
