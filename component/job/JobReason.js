import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './reason.module.css';
import React from 'react';
import Container from 'react-bootstrap/Container';

function JobReason() {
  return (
    <Container>
      <section className="bg-white">
        <div className="py-5">
          <h4>Why join Iramai?</h4>
        </div>
        <div className="d-md-flex align-items-stretch">
          <div className="col-3 col-md-3 col-lg-3">
            <article className={styles.box}>
              <img src="/icons/monetization_on.svg" className={styles.img} />
              <p className={styles.content}>Earn more, worry less</p>
            </article>
          </div>
          <div className="col-3 col-md-3 col-lg-3">
            <div className={styles.box}>
              <img src="/icons/public.svg" className={styles.img} />
              <p className={styles.content}>Work from anywhere</p>
            </div>
          </div>
          <div className="col-3 col-md-3 col-lg-3">
            <div className={styles.box}>
              <img src="/icons/family_restroom.svg" className={styles.img} />
              <p className={styles.content}>Improve your work-life balance</p>
            </div>
          </div>
          <div className="col-3 col-md-3 col-lg-3">
            <div className={styles.box}>
              <img src="/icons/badge.svg" className={styles.img} />
              <p className={styles.content}>No visa requirements</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default JobReason;
