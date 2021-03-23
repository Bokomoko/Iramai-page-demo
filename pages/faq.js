import Layout from '../component/layout'
import styles from './faq.module.css'
import classNames from 'classnames';

function FaqPage() {
    return (
        <Layout>
            <div className={styles.root}>
                <header className={styles.header}>
                    <div className={styles.grid}>
                        <div className={classNames(styles.column)}>
                            <a className={styles.logo}>Turing</a>
                        </div>
                    </div>
                </header>
                <body className={styles.body}>
                <main>
                    <section className={styles.section1}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <p className={styles.txt12}>Frequently Asked Questions</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="column right animated fadeInRight animElem-4">
                        <p className={styles.txt1}>Turing’s remote engineers are vetted by ex-FB and ex-Google
                            Engineering
                            Managers. We have combined the best of the FAANG hiring processes to get you the top 1%
                            of engineers in the world. And yes, we also use this hiring process for our own
                            engineers ;)</p>
                    </div>
                    <section className={styles.section}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <article>
                                        <h2 className={styles.title_1}>How do I apply for remote work with Turing?</h2>
                                        <p className={styles.txt1}>Please visit <a className={styles.hyperlink}
                                                                                   href="https://welcome.turing.com"
                                                                                   target="_blank"> https://welcome.turing.com</a> to
                                            begin our coding challenge for becoming a Turing Developer. Once you are
                                            a Turing developer, you can start getting paid and work with top U.S.
                                            companies.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <article>
                                        <h2 className={styles.title_1}>What kinds of developers does Turing hire?</h2>
                                        <p className={styles.txt1}>Turing hires Full Stack, Backend, Data Engineering,
                                            Machine Learning, AI (+NLP), DevOps, UI/UX, and Mobile Developers.</p>
                                    </article>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <article>
                                        <h2 className={styles.title_1}>Does Turing hire for freelance or part-time
                                            work?</h2>
                                        <p className={styles.txt1}>Turing hires Full Stack, Backend, Data Engineering,
                                            Machine Learning, AI (+NLP), DevOps, UI/UX, and Mobile Developers.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.section1}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <article>
                                        <h2 className={styles.title_1}>Are there any entry-level positions
                                            available?</h2>
                                        <p className={styles.txt1}>Generally, no. However, if you are a highly capable
                                            developer you should visit <a className="hyperlink"
                                                                          href="https://welcome.turing.com"
                                                                          target="_blank">https://welcome.turing.com</a> and
                                            take our coding challenge to see if you have the skills necessary for
                                            placement with Turing.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.section1}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <article>
                                        <h2 className={styles.title_1}>Does Turing have positions available for software
                                            quality assurance specialists?</h2>
                                        <p className={styles.txt1}>Sorry, no. Turing only hires for the roles mentioned
                                            above at this time.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.section2}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <h2 className={styles.title_1}>How do I get matched for jobs at Turing?</h2>
                                    <p className={styles.txt1}>Turing uses a combination of human-vetting and our AI
                                        systems to match qualified engineers with Turing clients. We evaluate
                                        your expertise, experience, performance on our coding challenges,
                                        interviews, availability, and location to help identify the best
                                        positions for each candidate.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                </body>
            </div>
        </Layout>
    )
}

export default FaqPage
