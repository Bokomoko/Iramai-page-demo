import styles from './process.module.css';
import React from 'react';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function IramaiProcess() {
  return (
    <div className={styles.main}>
      <Container>
        <section>
          <div className="py-5">
            <h4>What's the process like at Iramai?</h4>
          </div>
          <div className="d-md-flex align-items-stretch">
            <div className="col-4">
              <ul className={styles.ul}>
                <li>
                  <div
                    className={classNames(
                      styles.number_circle,
                      styles.number_active
                    )}
                  >
                    1
                  </div>
                  <h6 className={styles.title}>Create your profile</h6>
                  <p>
                    Hire and manager <br />
                    remote developers.
                  </p>
                </li>
                <li>
                  <div
                    className={classNames(
                      styles.number_circle,
                      styles.number_default
                    )}
                  >
                    2
                  </div>
                  <h6 className={styles.title}>
                    Take Iramai Tests <br />& Interviews
                  </h6>
                </li>
                <li>
                  <div
                    className={classNames(
                      styles.number_circle,
                      styles.number_default
                    )}
                  >
                    3
                  </div>
                  <h6 className={styles.title}>Receive job offers</h6>
                </li>
                <li>
                  <div
                    className={classNames(
                      styles.number_circle,
                      styles.number_default
                    )}
                  >
                    4
                  </div>
                  <h6 className={styles.title}>
                    Start working with <br />a Terran company
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <img src="/assets/process.png" />
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="container">
            <div className="py-5 border-bottom">
              <h4>Frequently Asked Questions</h4>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default IramaiProcess;
