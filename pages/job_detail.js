import Layout from '../component/layout'
import JobDescription from "../component/job/JobDescription";
import React from "react";
import JobSubContent from "../component/job/JobSubContent";
import styles from "../component/job/job.module.css";

function PrivatePolicy() {
    return (
        <Layout>
            <div className={styles.body}>
                <div className={styles.cv_container}>
                    <JobDescription/>
                    <JobSubContent/>
                </div>
            </div>
        </Layout>
    )
}

export default PrivatePolicy
