import React from 'react';
import styles from './whyjoiniramai.module.css';

export default function WhyJoinIramai(props) {
  const { reasons } = props;

  return (
    <div className={styles.whyjoin}>
      <h2>Why join Iramai?</h2>

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
