import Layout from '../component/layout'
import React from "react";
import styles from './home.module.css';
import classNames from "classnames";
import Link from "next/link";
import Company from "../component/common/company";

function HomeScreen() {
    return (
        <Layout>
            <div className={styles.intro}>
                <div className="container">
                    <div className="row">
                        <div className={classNames("container", styles.introduce)}>
                            <div className={classNames("container", styles.order_img)}>
                                <div className="row">
                                    <div className={classNames("col-12", styles.label)}>
                                        <h2 className={styles.txt_lg}>Build faster than ever with vetted, remote
                                            developers</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={classNames("col-12")}>
                                        <h2 className={classNames(styles.txt_sm, styles.txt_sm_pm)}>Hire the top 1% of
                                            300,000+ remote developers
                                            using Turing's Intelligent Talent Cloud. Turing offers Silicon
                                            Valley-caliber engineers with a 100% risk-free two-week trial.</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={classNames("col-12")}>
                                        <button className={classNames(styles.btn)}>Hire developers</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={classNames("col-12")}>
                                        <span className={styles.txt_sm}>Looking for jobs instead?<Link href="#">Apply to jobs</Link></span>
                                    </div>
                                </div>
                            </div>
                            <img className={classNames(styles.img, styles.animate)} src="/icons/Group_1471.svg"
                                 alt=""/>
                        </div>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className={styles.company_info}>*/}
                    {/*        <Company/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className={classNames("container", styles.turing_offers)}>
                            <h2 className={styles.txt_lg}>What Turing offers</h2>
                            <div className={classNames(styles.offer_content)}>
                                <div className={styles.section}>
                                    <div className={classNames(styles.img_container)}>
                                        <img src="icons/Group_4348.svg"/>
                                    </div>
                                    <div className="how-it-works-text how-it-works-text-1">
                                        <div className={styles.offer_label}>
                                            <div className={classNames(styles.circle)}>1</div>
                                            <h3 className={styles.offer_title}>Intelligent vetting</h3>
                                        </div>
                                        <p className={styles.txt_sm}>
                                            Built by engineering leaders from Facebook, Google, Microsoft, and
                                            Stanford, Turing’s intelligent vetting engine evaluates developers for a
                                            Silicon Valley bar.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.section}>
                                    <div className={classNames(styles.img_container)}>
                                        <img src="icons/Group_4348.svg"/>
                                    </div>
                                    <div className="how-it-works-text how-it-works-text-2">
                                        <div className={styles.offer_label}>
                                            <div className={classNames(styles.circle)}>2</div>
                                            <h3 className={styles.offer_title}>Fast hiring</h3>
                                        </div>
                                        <p className={styles.txt_sm}>
                                            Using assessment tests and automated vetting flow, Turing’s Intelligent
                                            Talent Cloud matches most companies with developers within three days.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.section}>
                                    <div className={classNames(styles.img_container)}>
                                        <img src="icons/Group_4348.svg"/>
                                    </div>
                                    <div className="how-it-works-text how-it-works-text-3">
                                        <div className={styles.offer_label}>
                                            <div className={classNames(styles.circle)}>3</div>
                                            <h3 className={styles.offer_title}>Remote work made easy</h3>
                                        </div>
                                        <p className={styles.txt_sm}>
                                            Whether it is daily stand-ups, productivity trackers, billing, or simply
                                            just working with developers in your timezone, Turing has you covered.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={classNames("container", styles.turing_demo)}>
                            <div className={styles.turing_demo_title}>
                                <div className={classNames(styles.txt_lg)}>
                                    Turing Deep<br/> Developer Profiles
                                </div>
                                <div className={classNames(styles.txt_sm)}>
                                    Our in-depth resumes help you know your next developers better. Explore their
                                    strengths and weaknesses with our Deep Developer Profiles and decide if they are a
                                    good fit for your team.
                                </div>

                                <button className={classNames(styles.btn)}>Hire developers</button>
                            </div>
                            <div className={styles.turing_demo_developer}>
                                <div>Turing</div>
                                <div className={styles.turing_demo_developer_profile}>
                                    <div className={styles.dev_main}>
                                        <img className={styles.dev_profile} src="/assets/developer.png"/>
                                        <div className={styles.dev_name}>
                                            <div className={styles.txt_lg}>Daniel Morales</div>
                                            <div className={classNames(styles.txt_sm, styles.job_label)}>
                                                Fullstack Developer from Mexico
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.dev_recommendation}>
                                        <div className={classNames(styles.txt_sm)}>
                                            As a full-stack developer, I have 6 years of experience in working on
                                            designing distributed systems, building web applications and backend
                                            APIs.
                                            Contributing to the team's success and grasping new concepts quickly are
                                            two
                                            of my biggest strengths. I am a critical thinker and a lover of people,
                                            who
                                            is eager to learn new things in life.
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.line}/>
                                <div className={styles.job_time}>
                                    <div>Availability</div>
                                    <div>Full-time</div>
                                </div>
                                <div className={styles.line}/>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={classNames("container", styles.talent)}>
                            <div className={styles.talent_title}>
                                <div className={classNames(styles.txt_lg)}>
                                    Welcome to the Talent Cloud of the future
                                </div>
                                <div className={classNames(styles.txt_sm)}>
                                    Sourced by software, vetted by software and managed by software.
                                </div>
                                <button className={classNames(styles.btn)}>Hire developers</button>
                            </div>
                            <div className={styles.talent_img}>
                                <img className={styles.talent_img_content} src="/icons/dev_desk.svg"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={classNames("container", styles.talent)}>
                            <div className={styles.talent_img}>
                                <img className={styles.talent_img_content} src="/icons/jum.svg"/>
                            </div>
                            <div className={styles.talent_title}>
                                <div className={classNames(styles.txt_lg)}>
                                    Go #Boundaryless with Turing
                                </div>
                                <div className={classNames(styles.txt_sm)}>
                                    Hire the best talent in the world, not the best talent that happens to live near
                                    your office. Go #Boundaryless with us and hire across tech roles, skills, and
                                    seniority with the push of a button.
                                </div>
                                <button className={classNames(styles.btn)}>Hire developers</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HomeScreen
