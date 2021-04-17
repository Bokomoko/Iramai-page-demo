import Link from 'next/link';
import styles from './footer.module.css';
import classNames from 'classnames';
import React from 'react';

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={styles.hire_area}>
        <div className={styles.text_lg}>
          <span>Hire and manage remote developers</span>
        </div>
        <div className={styles.text_sm}>
          <span>Hire and manage remote developers</span>
        </div>
        <div className={styles.text_sm}>
          <a href="/hire" className={classNames('btn', styles.btn_primary)}>
            Hire developers
          </a>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <div className="container">
          <div className={styles.footer_info}>
            <div className={styles.col}>
              <span className={styles.text_bold}>Iramai</span>
            </div>
            <div className={styles.link}>
              <ul className={styles.sm}>
                <li className={styles.text_bold}>About</li>
                <li>
                  <Link href="/#">
                    <a className={styles.text_thin}>For Companies</a>
                  </Link>
                </li>
                <li>
                  <a
                    className={styles.text_thin}
                    href="https://developer.turing.com"
                    target="_blank"
                  >
                    For Developers
                  </a>
                </li>
              </ul>
              <ul className={styles.sm}>
                <li className={styles.text_bold}>Company</li>
                <li>
                  <Link href="/#">
                    <a className={styles.text_thin}>Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a className={styles.text_thin}>Press</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.link}>
              <ul className={styles.sm}>
                <li className={styles.text_bold}>Resources</li>
                <li>
                  <Link href="/#">
                    <a className={styles.text_thin}>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className={styles.text_thin}>FAQs</a>
                  </Link>
                </li>
              </ul>
              <ul className={styles.sm}>
                <li className={styles.text_bold}>Social</li>
                <li>
                  <a
                    className={styles.text_thin}
                    href="https://www.facebook.com/turingcom/"
                    target="_blank"
                    rel=""
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className={styles.text_thin}
                    href="https://www.linkedin.com/company/turingcom/"
                    target="_blank"
                    rel=""
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className={styles.text_thin}
                    href="https://www.instagram.com/turingcom/"
                    target="_blank"
                    rel=""
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className={styles.text_thin}
                    href="https://twitter.com/turingcom"
                    target="_blank"
                    rel=""
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_info}>
            <div className={classNames(styles.sm, styles.col_footer)}>
              <span className={styles.text_small}>©2021 Iramai</span>
              <br />
              <span className={styles.text_small}>
                4980 Agamenon Drive, Manguetown
              </span>
            </div>
            <div
              className={classNames(
                styles.sm,
                styles.col_footer,
                styles.col_mobile
              )}
            >
              <ul>
                <li>
                  <Link href="/policy">
                    <a className={styles.text_thin}>Terms of Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/policy">
                    <a className={styles.text_thin}>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}></div>
      </div>
    </footer>
  );
}

export default Footer;
