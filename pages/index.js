import Layout from "../component/layout";
import styles from "./home.module.css";
import classNames from "classnames";
import Link from "next/link";
import Company from "../component/common/company";
import React, {useState} from "react";
import DeveloperProfiles from "../component/developer/DeveloperProfile";

function HomePage() {
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
                                            using Iramai's Intelligent Talent Cloud. Iramai offers Silicon
                                            Valley-caliber engineers with a 100% risk-free two-week trial.</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={classNames("col-12")}>
                                        <div className={styles.padding_btn}>
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
                            <img className={classNames(styles.img, styles.animate)} src="/icons/Group_1471.svg"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.company_info}>
                            <Company/>
                        </div>
                    </div>
                    <div className="row">
                        <div className={classNames("container", styles.turing_offers)}>
                            <h2 className={styles.txt_lg}>What Iramai offers</h2>
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
                                            Stanford, Iramai’s intelligent vetting engine evaluates developers for a
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
                                            Using assessment tests and automated vetting flow, Iramai’s Intelligent
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
                                            just working with developers in your timezone, Iramai has you covered.
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
                                    Iramai Deep<br/> Developer Profiles
                                </div>
                                <div className={classNames(styles.txt_sm)}>
                                    Our in-depth resumes help you know your next developers better. Explore their
                                    strengths and weaknesses with our Deep Developer Profiles and decide if they are a
                                    good fit for your team.
                                </div>
                                <div className={styles.padding_btn}>
                                    <a href="/hire" className={classNames(styles.btn, styles.link)}>Hire developers</a>
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
                    <div className="row">
                        <div className={classNames("container", styles.talent)}>
                            <div className={styles.talent_title}>
                                <div className={classNames(styles.txt_lg)}>
                                    Welcome to the Talent Cloud of the future
                                </div>
                                <div className={classNames(styles.txt_sm)}>
                                    Sourced by software, vetted by software and managed by software.
                                </div>
                                <div className={styles.padding_btn}>
                                    <a href="/hire" className={classNames(styles.btn, styles.link)}>Hire developers</a>
                                </div>
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
                                    Go #Boundaryless with Iramai
                                </div>
                                <div className={classNames(styles.txt_sm)}>
                                    Hire the best talent in the world, not the best talent that happens to live near
                                    your office. Go #Boundaryless with us and hire across tech roles, skills, and
                                    seniority with the push of a button.
                                </div>
                                <div className={styles.padding_btn}>
                                    <a href="/hire" className={classNames(styles.btn, styles.link)}>Hire developers</a>
                                </div>
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

export default HomePage
