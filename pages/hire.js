import Layout from "../component/layout";
import styles from "./hire.module.css";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Company from "../component/common/company";

function HirePage() {
    return (
        <Layout>
            <div className={styles.intro}>
                <div className="container">
                    <div className="row">
                        <div className={classNames(styles.for_company)}>
                            <div className={classNames("container", styles.order_img)}>
                                <div className="row">
                                    <div className={classNames("col-12", styles.label)}>
                                        <h2 className={styles.txt_lg}>
                                            Tired of fighting with Silicon Valley giants to hire top software engineers?
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={classNames("col-12")}>
                                        <h2 className={classNames(styles.txt_sm, styles.txt_sm_pm)}>
                                            Build your engineering team with pre-vetted remote developers in just a
                                            matter
                                            of days. Find highly-skilled remote engineers who are not only affordable
                                            but
                                            are willing to work in your timezone.
                                        </h2>
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
                            <img className={classNames(styles.img)} src="/assets/hire.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.company_info}>
                            <Company/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

module.exports = HirePage;
