import Layout from '../component/layout'
import classNames from 'classnames';
import styles from './faq.module.css';
import React from "react";

function PrivatePolicy() {
    return (
        <Layout>
            <div className={styles.intro}>
                <div className="container">
                    <section className={classNames(styles.section1, styles.top)}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className={classNames(styles.column, styles.banner, styles.left)}>
                                    <p className={styles.txt12}>Terms of Service</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="column right animated fadeInRight animElem-4">
                        <p className={styles.txt1}>Last updated: October 04, 2019</p>
                        <p className={styles.txt1}>Please read these Terms of Service ("Terms", "Terms of Service")
                            carefully before using the https://turing.com/ website (the "Service") operated by Iramai
                            Enterprises Inc. ("us", "we", or "our").
                        </p>
                        <p className={styles.txt1}>
                            Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.
                        </p>
                        <p className={styles.txt1}>
                            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.
                        </p>
                    </div>
                    <section className={styles.section1}>
                        <div className={styles.holder}>
                            <div className={styles.grid}>
                                <div className="column animated fadeInUp animElem-6">
                                    <article>
                                        <h2 className={styles.title_1}>Accounts</h2>
                                        <p className={styles.txt1}>
                                            When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                                        </p>
                                        <p className={styles.txt1}>
                                            You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                                        </p>
                                        <p className={styles.txt1}>
                                            You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.
                                        </p>
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
                                        <h2 className={styles.title_1}>
                                            Intellectual Property
                                        </h2>
                                        <p className={styles.txt1}>
                                            The Service and its original content, features and functionality are and will remain the exclusive property of Iramai Enterprises Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Iramai Enterprises Inc.
                                        </p>
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
                                        <h2 className={styles.title_1}>Links To Other Web Sites</h2>
                                        <p className={styles.txt1}>
                                            Our Service may contain links to third party web sites or services that are not owned or controlled by Iramai Enterprises Inc.
                                        </p>
                                        <p className={styles.txt1}>
                                            Iramai Enterprises Inc. has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                                        </p>
                                        <p className={styles.txt1}>
                                            You acknowledge and agree that Iramai Enterprises Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.
                                        </p>
                                        <p className={styles.txt1}>
                                            We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.
                                        </p>
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
                                        <h2 className={styles.title_1}>Termination</h2>
                                        <p className={styles.txt1}>
                                            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                                        </p>
                                        <p className={styles.txt1}>
                                            If you wish to terminate your account, you may simply discontinue using the Service.
                                        </p>
                                        <p className={styles.txt1}>
                                            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                                        </p>
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
                                        <h2 className={styles.title_1}>Indemnification</h2>
                                        <p className={styles.txt1}>
                                            You agree to defend, indemnify and hold harmless Iramai Enterprises Inc. and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password, or b) a breach of these Terms.
                                        </p>
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
                                        <h2 className={styles.title_1}>Limitation Of Liability</h2>
                                        <p className={styles.txt1}>
                                            In no event shall Iramai Enterprises Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                                        </p>
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
                                        <h2 className={styles.title_1}>Disclaimer</h2>
                                        <p className={styles.txt1}>
                                            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                                        </p>
                                        <p className={styles.txt1}>
                                            Iramai Enterprises Inc. its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                                        </p>
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
                                        <h2 className={styles.title_1}>Exclusions</h2>
                                        <p className={styles.txt1}>
                                            Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.
                                        </p>
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
                                        <h2 className={styles.title_1}>Governing Law</h2>
                                        <p className={styles.txt1}>
                                            These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
                                        </p>
                                        <p className={styles.txt1}>
                                            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
                                        </p>
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
                                        <h2 className={styles.title_1}>Changes</h2>
                                        <p className={styles.txt1}>
                                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                                        </p>
                                        <p className={styles.txt1}>
                                            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                                        </p>

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
                                        <h2 className={styles.title_1}>Contact Us</h2>
                                        <p className={styles.txt1}>
                                            If you have any questions about these Terms, please
                                            <a href="mailto:partnerships@turing.com?subject=Iramai Terms of Service"
                                               className="hyperlink"> contact us</a>
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </Layout>
    )
}

export default PrivatePolicy
