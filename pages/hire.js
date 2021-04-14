import Layout from "../component/layout";
import styles from "./hire.module.css";
import classNames from "classnames";
import Link from "next/link";
import React, {useState} from "react";
import Company from "../component/common/company";
import DeveloperProfiles from "../component/developer/DeveloperProfile";

function HirePage() {

    const developer = {
        avatar: '/assets/developer.png',
        name: 'Daniel Morales',
        position: 'Fullstack Developer from Mexico',
        recommendation: "As a full-stack developer, I have 6 years of experience in working on designing distributed systems, building web applications and backend APIs. Contributing to the team\'s success and grasping new concepts quickly are two of my biggest strengths. I am a critical thinker and a lover of people, who is eager to learn new things in life.",
        work: "Full-time"
    }
    const {setDeveloper} = useState();

    function shareInfo() {
        alert('share info')
    }

    function downloadProfile() {
        alert('download profile')
    }

    return (
        <Layout>
            <div className={styles.intro}>
                {/*<div className="row">*/}
                {/*    <div className={classNames(styles.for_company, styles.introduce)}>*/}
                {/*        <div className={classNames(styles.order_img, styles.recommendation)}>*/}
                {/*            <div className="row">*/}
                {/*                <div className={classNames("col-12")}>*/}
                {/*                    <div className={styles.txt_lg}>*/}
                {/*                        Tired of fighting with Silicon Valley giants to hire top software engineers?*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="row">*/}
                {/*                <div className={classNames("col-12")}>*/}
                {/*                    <p className={classNames(styles.txt_sm, styles.txt_sm_pm)}>*/}
                {/*                        Build your engineering team with pre-vetted remote developers in just a*/}
                {/*                        matter*/}
                {/*                        of days. Find highly-skilled remote engineers who are not only affordable*/}
                {/*                        but*/}
                {/*                        are willing to work in your timezone.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="row">*/}
                {/*                <div className={classNames("col-12")}>*/}
                {/*                    <div className={styles.padding_btn}>*/}
                {/*                        <input type="text"/>*/}
                {/*                        <a href="/hire" className={classNames(styles.btn, styles.link)}>Hire*/}
                {/*                            developers</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="row">*/}
                {/*                <div className={classNames("col-12", styles.padding_btn)}>*/}
                {/*                    <span className={styles.txt_sm}>Looking for jobs instead?<Link href="#">Apply to jobs</Link></span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <img className={classNames(styles.img)} src="/assets/hire.png"*/}
                {/*             alt=""/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container">
                    <div className={classNames("row", styles.company_info)}>
                        <Company/>
                    </div>
                    <div className="row">
                        <div className={classNames(styles.for_company, styles.box, styles.padding_100)}>
                            <div className={classNames(styles.col1, styles.order_img)}>
                                <div className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>High
                                    Quality/Cost ratio
                                </div>
                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Silicon Valley
                                    caliber at half the cost
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>Hire the top 1% of 300,000 engineers
                                    who have applied to Turing.
                                </div>

                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>100+ skills
                                    available
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>React, Node, Python, Angular, Swift,
                                    React Native, Android, Java, Rails, Golang, PHP, Vue, DevOps, Machine Learning, Data
                                    Engineers and more.
                                </div>

                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Zero-risk, 2-week
                                    trial
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>If you decide to stop within two
                                    weeks, you pay nothing.
                                </div>
                            </div>
                            <div className={classNames(styles.col2, styles.gray)}>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={classNames(styles.for_company, styles.box, styles.padding_100)}>
                            <div className={classNames(styles.col2, styles.gray)}/>
                            <div className={styles.col1}>
                                <div
                                    className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>
                                    Rigorous Vetting
                                </div>

                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>8 hours of tests
                                    + interviews
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>
                                    More rigorous than Silicon Valley job interviews. We test for Programming skill,
                                    Data Structures, Algorithms, Systems Design, software specializations & frameworks.
                                </div>
                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Seniority tests
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>We select excellent communicators who
                                    can proactively take ownership of business and product objectives without
                                    micromanagement.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={classNames(styles.for_company, styles.box, styles.padding_100)}>
                            <div className={classNames(styles.col1, styles.order_img)}>
                                <div
                                    className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>Effective
                                    Collaboration
                                </div>

                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Daily updates
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>
                                    We give you more visibility into your remote engineer’s work with automatic time
                                    tracking and virtual daily stand-ups.
                                </div>

                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Match your
                                    timezone
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>
                                    Turing developers match your timezone and overlap a minimum of 4 hours with your
                                    workday.
                                </div>

                                <div className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Easy to manage
                                </div>
                                <div className={classNames(styles.txt_sm, "p-2")}>We streamline management with
                                    international payments, billing visibility and payment compliance.
                                </div>
                            </div>
                            <div className={classNames(styles.col2, styles.gray)}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.padding_100, styles.developer_box)}>
                    <div className={classNames(styles.for_company, styles.introduce, styles.padding_100)}>
                        <div className={classNames(styles.developer)}>
                            <div className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>
                                Turing Deep Developer Profiles
                            </div>
                            <div className={classNames(styles.txt_sm, "p-2")}>
                                Our in-depth resumes help you know your next developers better. Explore their strengths
                                and
                                weaknesses with our Deep Developer Profiles and decide if they are a good fit for your
                                team.
                            </div>

                            <div className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>Intelligent
                                vetting
                            </div>
                            <div className={classNames(styles.txt_sm, "p-2")}>
                                Turing has created the first and only Intelligent Talent Cloud using machine learning to
                                actively vet developers to a Silicon Valley bar. We vet developers based upon actual
                                skills
                                vs. self-reported experience from traditional resumes or job interviews.
                            </div>

                            <div className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>
                                8 hours of tests + interviews
                            </div>
                            <div className={classNames(styles.txt_sm, "p-2")}>
                                More rigorous than Bay Area job interviews. Turing tests for programming languages, data
                                structures, algorithms, system designs, software specialization, frameworks, and more.
                            </div>

                            <div className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>Seniority
                                tests
                            </div>
                            <div className={classNames(styles.txt_sm, "p-2")}>
                                Every Turing developer goes through our automated seniority assessment test comprising
                                57
                                calibrated questions in 5 areas: project impact, engineering excellence, communication,
                                people, and direction.
                            </div>

                        </div>
                        <div className={styles.turing_demo_developer}>
                            <DeveloperProfiles avatar={developer.avatar}
                                               name={developer.name}
                                               position={developer.position}
                                               recommendation={developer.recommendation}
                                               work={developer.work}
                                               downloadProfile={() => downloadProfile()}
                                               share={() => shareInfo()}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

module.exports = HirePage;
