import styles from '../common/company.module.css';
import React from 'react';

function Company() {
  return (
    <div className="container">
      <h2 className={styles.txt_lg}>Join 100+ companies</h2>
      <h3 className={styles.txt_sm}>
        that have hired Iramai engineers, including those backed by
      </h3>
      <div className={styles.company_icon}>
        <img className={styles.img} src="/icons/Google.svg" />
        <img className={styles.img} src="/icons/layer1.svg" />
        <img className={styles.img} src="/icons/layer2.svg" />
        <img className={styles.img} src="/icons/bloomberg.svg" />
        <img className={styles.img} src="/icons/matrix.svg" />
        <img className={styles.img} src="/icons/ff.svg" />
        <img className={styles.img} src="/icons/logo_240.png" />
        <img className={styles.img} src="/icons/khosla-ventures.png" />
        <img className={styles.img} src="/icons/ff.svg" />
      </div>
    </div>
  );
}

export default Company;
