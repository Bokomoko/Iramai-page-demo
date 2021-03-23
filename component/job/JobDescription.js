import styles from './job.module.css'
import Image from "next/image";

function JobDescription() {
    return (
        <article className={styles.main_content}>
            <section className={styles.cv_description}>
                <h2 className={styles.title}>Job responsibilites</h2>
                <ul className={styles.list}>
                    <li>Design and build scalable APIs</li>
                    <li>Write clean, efficient, and reusable code</li>
                    <li>Develop highly efficient user interface components</li>
                    <li> Analyze website performance and drive improvements</li>
                    <li> Collaborate with cross-functional team members to design, develop, review and test applications
                    </li>
                    <li>Stay updated with emerging technologies and apply them to the operational activities in the
                        organization
                    </li>
                    <li> Experience in cross-browser compatibility, and the responsive design of applications</li>
                    <li> Proficiency in code versioning tools, such as Git</li>
                    <li> Expert understanding of server-side logic and front-end performance optimization</li>
                    <li> Experience in Unix / Linux environments, including basic commands and scripting</li>
                </ul>
            </section>
            <section className={styles.cv_description}>
                <h2 className={styles.title}>Minimum requirements</h2>
                <ul className={styles.list}>
                    <li> Bachelor's / Master's degree in Computer Science (or equivalent experience)</li>
                    <li> 3+ years of experience in web development (we make rare exceptions if you are highly skilled)
                    </li>
                    <li> Proficiency in React.js, Node.js, Javascript, HTML, and CSS .</li>
                    <li> Experience with REST APIs and third-party libraries</li>
                    <li> Fluency in English and the communication skills to effortlessly collaborate with engineering
                        managers at US software companies
                    </li>
                    <li> The ability to work full-time (40 hours / week) concurrently with US time zones for a minimum
                        of 4 hours / day
                    </li>
                </ul>
            </section>
            <section className={styles.cv_description}>
                <h2 className={styles.title}>Preferred skills</h2>
                <ul className={styles.list}>
                    <li> Experience in cross-browser compatibility, and the responsive design of applications</li>
                    <li> Proficiency in code versioning tools, such as Git</li>
                    <li> Expert understanding of server-side logic and front-end performance optimization</li>
                    <li> Experience in Unix / Linux environments, including basic commands and scripting</li>
                </ul>
            </section>
            <footer className={styles.links}>
                <span>Share this job</span>
                <div className={styles.icons}>
                    <a href="#">
                        <Image src="/icons/facebook.svg" width={32} height={32}/>
                    </a>
                    <a href="#">
                        <Image src="/icons/twitter.svg" width={32} height={32}/>
                    </a>
                    <a href="#">
                        <Image src="/icons/linkedin.svg" width={32} height={32}/>
                    </a>
                    <a href="#">
                        <Image src="/icons/whatsapp.svg" width={32} height={32}/>
                    </a>
                </div>
            </footer>
        </article>
    )
}

export default JobDescription
