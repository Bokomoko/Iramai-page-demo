import Layout from "../component/layout";
import styles from "./hire.module.css";
import classNames from "classnames";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Company from "../component/common/company";
import DeveloperProfiles from "../component/developer/DeveloperProfile";
import Article from "../component/article/Article";

function HirePage() {

    const [developer, setDeveloper] = useState({
        avatar: '/assets/developer.png',
        name: 'Daniel Morales',
        position: 'Fullstack Developer from Mexico',
        recommendation: "As a full-stack developer, I have 6 years of experience in working on designing distributed systems, building web applications and backend APIs. Contributing to the team\'s success and grasping new concepts quickly are two of my biggest strengths. I am a critical thinker and a lover of people, who is eager to learn new things in life.",
        work: "Full-time"
    });
    const [article, setArticle] = useState([]);

    function init() {
        setArticle([
            {
                image: '/assets/article.png',
                article_title: 'Iramai nabs $32M more for an AI-based platform to source and manage engineers remotely',
                article_description: 'As remote work continues to solidify its place as a critical aspect of how businesses exist these days, a startup...',
                url: ''
            },
            {
                image: '/assets/article.png',
                article_title: 'Iramai nabs $32M more for an AI-based platform to source and manage engineers remotely',
                article_description: 'As remote work continues to solidify its place as a critical aspect of how businesses exist these days, a startup...',
                url: ''
            },
            {
                image: '/assets/article.png',
                article_title: 'Iramai nabs $32M more for an AI-based platform to source and manage engineers remotely',
                article_description: 'As remote work continues to solidify its place as a critical aspect of how businesses exist these days, a startup...',
                url: ''
            },
            {
                image: '/assets/article.png',
                article_title: 'Iramai nabs $32M more for an AI-based platform to source and manage engineers remotely',
                article_description: 'As remote work continues to solidify its place as a critical aspect of how businesses exist these days, a startup...',
                url: ''
            }
        ]);
    }

    useEffect(() => {
        init();
    }, [])

    function shareInfo() {
        alert('share info')
    }

    function downloadProfile() {
        alert('download profile')
    }

    function readerArticle() {
        return (
            article.map((item) => (
                <Article {...item}/>
            ))
        )
    }

    return (
        <Layout>
            <div className={styles.intro}>
                <div className="row">
                    <div className={classNames(styles.for_company, styles.introduce)}>
                        <div className={classNames(styles.order_img, styles.recommendation)}>
                            <div className="row">
                                <div className={classNames("col-12")}>
                                    <div className={styles.txt_lg}>
                                        Tired of fighting with Silicon Valley giants to hire top software engineers?
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className={classNames("col-12")}>
                                    <p className={classNames(styles.txt_sm, styles.txt_sm_pm)}>
                                        Build your engineering team with pre-vetted remote developers in just a
                                        matter
                                        of days. Find highly-skilled remote engineers who are not only affordable
                                        but
                                        are willing to work in your timezone.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className={classNames("col-12")}>
                                    <div className={styles.padding_btn}>
                                        <input type="text"/>
                                        <a href="/hire" className={classNames(styles.btn, styles.link)}>Hire
                                            developers</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className={classNames("col-12", styles.padding_btn)}>
                                    <span className={styles.txt_sm}>Looking for jobs instead?<Link href="#">Apply to jobs</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.img_mb}>
                            <img className={classNames(styles.img)} src="/assets/hire.png" alt=""/>
                        </div>
                    </div>
                </div>
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
                                    who have applied to Iramai.
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
                                    Iramai developers match your timezone and overlap a minimum of 4 hours with your
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
                                Iramai Deep Developer Profiles
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
                                Iramai has created the first and only Intelligent Talent Cloud using machine learning to
                                actively vet developers to a Silicon Valley bar. We vet developers based upon actual
                                skills
                                vs. self-reported experience from traditional resumes or job interviews.
                            </div>

                            <div className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>
                                8 hours of tests + interviews
                            </div>
                            <div className={classNames(styles.txt_sm, "p-2")}>
                                More rigorous than Bay Area job interviews. Iramai tests for programming languages, data
                                structures, algorithms, system designs, software specialization, frameworks, and more.
                            </div>

                            <div className={classNames(styles.txt_md, "txt_bold", "p-2", styles.title_page)}>Seniority
                                tests
                            </div>
                            <div className={classNames(styles.txt_sm, "p-2")}>
                                Every Iramai developer goes through our automated seniority assessment test comprising
                                57
                                calibrated questions in 5 areas: project impact, engineering excellence, communication,
                                people, and direction.
                            </div>

                        </div>
                        <div className={styles.Iramai_demo_developer}>
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
                <div className="container">
                    <div className="row">
                        <div className={styles.hire_info}>
                            <div className={classNames(styles.txt_md, "font-weight-light")}>How to hire top remote
                                developers through Iramai?
                            </div>
                            <div className={styles.info}>
                                <div className={styles.info_col}>
                                    <div className={classNames(styles.circle)}>1</div>
                                    <p className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Tell us the
                                        skills you need</p>
                                    <p className={classNames(styles.txt_sm, "p-2")}>We’ll schedule a call and understand
                                        your requirements.</p>
                                </div>
                                <div className={styles.info_col}>
                                    <div className={classNames(styles.circle)}>2</div>
                                    <p className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Tell us the
                                        skills you need</p>
                                    <p className={classNames(styles.txt_sm, "p-2")}>We’ll schedule a call and understand
                                        your requirements.</p>
                                </div>
                                <div className={styles.info_col}>
                                    <div className={classNames(styles.circle)}>3</div>
                                    <p className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Tell us the
                                        skills you need</p>
                                    <p className={classNames(styles.txt_sm, "p-2")}>We’ll schedule a call and understand
                                        your requirements.</p>
                                </div>
                                <div className={styles.info_col}>
                                    <div className={classNames(styles.circle)}>4</div>
                                    <p className={classNames(styles.txt_sm, "font-weight-light", "p-2")}>Tell us the
                                        skills you need</p>
                                    <p className={classNames(styles.txt_sm, "p-2")}>We’ll schedule a call and understand
                                        your requirements.</p>
                                </div>
                            </div>
                            <div className={styles.padding_btn}>
                                <a href="/hire" className={classNames(styles.btn, styles.link)}>Hire developers</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.video}>

                        </div>
                    </div>

                    <div className="row">
                        <div className={classNames(styles.hire_info, styles.gray, "container")}>
                            <div className={styles.header}>
                                <p className={classNames(styles.txt_md, "font-weight-light")}>About Iramai</p>
                            </div>
                            <div className={styles.for_company}>
                                <div className={styles.col1}>
                                    <div className={classNames(styles.txt_sm, "font-weight-light")}>Stanford founders</div>
                                    <div className={classNames(styles.txt_sm, styles.padding_content)}>
                                        Founded by Stanford Computer Science alumni, Jonathan Siddharth and Vijay
                                        Krishnan, Iramai was created after the successful acquisition of their last AI
                                        company built with exceptional remote engineers.
                                    </div>
                                </div>
                                <div className={styles.col1}>
                                    <div className={classNames(styles.txt_sm, "font-weight-light")}>Top investors</div>
                                    <div className={classNames(styles.txt_sm, styles.padding_content)}>
                                        Iramai is backed by well-known investors such WestBridge Capital, Foundation
                                        Capital, Altair Capital, Mindset Ventures, Frontier Ventures and Gaingels.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={classNames(styles.col, "container", styles.faq)}>
                            <div className={styles.center}>
                                <p className={classNames(styles.txt_md, "font-weight-light", styles.center)}>FAQs</p>
                            </div>
                            <div className={styles.col}>
                                <div className={classNames(styles.txt_sm, styles.padding_content)}>What is the no-risk trial period for Iramai developers?</div>
                                <div className={classNames(styles.txt_sm, styles.padding_content)}>How are Iramai developers different?</div>
                                <div className={classNames(styles.txt_sm, styles.padding_content)}>How quickly can I hire top developers through Iramai?</div>
                                <div className={classNames(styles.txt_sm, styles.padding_content)}>How does Iramai vet remote engineers?</div>
                                <div className={classNames(styles.txt_sm, styles.padding_content)}>For which all skills can I hire remote developers from Iramai?</div>
                            </div>
                            <Link href="/faq">View more FAQs</Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className={classNames(styles.col, "container", styles.padding_100)}>
                            <div>
                                <p className={classNames(styles.txt_md, "font-weight-light", "p-2")}>
                                    Latest posts from Iramai
                                </p>
                            </div>
                            <div className={classNames(styles.for_company)}>
                                {readerArticle()}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={classNames("container", styles.partner)}>
                            <div>
                                "As remote work continues to solidify its place as a critical aspect of how businesses
                                exist these days, a startup..."
                            </div>
                            <Link href="#">Read article</Link>
                            <div>
                                <img src="/"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

module.exports = HirePage;
