import Link from 'next/link'
import styles from './footer.module.css'
import classNames from 'classnames'
import React from "react";

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
                    <button className={classNames('btn', styles.btn_primary)}>Hire developers</button>
                </div>
            </div>
            <div className={styles.footerWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <span className={styles.text_bold}>Turing</span>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <ul>
                                        <li className={styles.text_bold}>About</li>
                                        <li><Link href="/#"><a className={styles.text_thin}>For Companies</a></Link>
                                        </li>
                                        <li><Link href="/#"><a className={styles.text_thin}>For
                                            Developers</a></Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <ul>
                                        <li className={styles.text_bold}>Company</li>
                                        <li><Link href="/#"><a className={styles.text_thin}>Careers</a></Link></li>
                                        <li><Link href="/#"><a className={styles.text_thin}>Press</a></Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <ul>
                                        <li className={styles.text_bold}>Resources</li>
                                        <li><Link href="/#"><a className={styles.text_thin}>Blog</a></Link></li>
                                        <li><Link href="/#"><a className={styles.text_thin}>FAQs</a></Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <ul>
                                        <li className={styles.text_bold}>Social</li>
                                        <li><a className={styles.text_thin}
                                               href="https://www.facebook.com/turingcom/"
                                               target="_blank" rel="">Facebook</a></li>
                                        <li>
                                            <a className={styles.text_thin}
                                               href="https://www.linkedin.com/company/turingcom/"
                                               target="_blank" rel="">Linkedin</a>
                                        </li>
                                        <li>
                                            <a className={styles.text_thin}
                                               href="https://www.instagram.com/turingcom/"
                                               target="_blank" rel="">Instagram</a>
                                        </li>
                                        <li>
                                            <a className={styles.text_thin} href="https://twitter.com/turingcom"
                                               target="_blank"
                                               rel="">Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <span className={styles.text_thin}>©2021 Turing</span><br/>
                            <span className={styles.text_thin}>1900 Embarcadero Road Palo Alto, CA, 94303</span>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <ul>
                                <li className={styles.text_thin}/>
                                <li className={styles.text_thin}>
                                    <div className={styles.right}>
                                        <div>
                                            <a className={styles.text_thin} href="https://twitter.com/turingcom"
                                               target="_blank"
                                               rel="">Twitter</a>
                                        </div>
                                        <div>
                                            <a className={styles.text_thin} href="https://twitter.com/turingcom"
                                               target="_blank"
                                               rel="">Privacy Policy</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>

                </div>
            </div>
        </footer>
    )
}

export default Footer
