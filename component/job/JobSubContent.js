import styles from './job.module.css'
import Image from "next/image";
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

function JobSubContent () {
    return (
        <article className={styles.sub_content}>
            <section className={styles.user_info}>
                <div className={styles.avatar}>
                    <Image src="/assets/32.jpg" alt="avatar" width={100} height={100}/>
                </div>
                <div className={styles.basic_info}>
                    <i className={classNames(styles.fa, 'fa-chevron-left')}></i>
                    <div className={styles.content}>
                        <h3 className={styles.name}>Hadji, Algeria</h3>
                        <h4 className={styles.job_title}>Fullstack Developer</h4>
                    </div>
                    <i className="fa fa-chevron-right"/>
                </div>
                <p className={styles.description}>
                    "I have previously worked at oDesk and Elance (now popularly known as Upwork) for more than 5 years,
                    but the pivotal moment in my career came when I joined the global team of Iramai remote engineers in
                    2020. I did not imagine that the jobs I was offered would come with such stability and prominence.
                    Apply to be one among many Iramai developers. It will change your life, like it did mine!"
                </p>
            </section>
            <h3 className={styles.open_job_title}>Check our open jobs</h3>
            <section className={styles.bases}>
                <h4 className={styles.title}>Based on your career trajectory</h4>
                <div className={styles.tags}>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Engineer</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Architect</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Tech Lead</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Tech Lead Manager</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Engineering Director</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Senior Engineer</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Senior Architect</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Senior Tech Lead</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Senior Tech Lead Manager</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>VP of Engineering</span>
                </div>
            </section>
            <section className={styles.bases}>
                <h4 className={styles.title}>Based on your role</h4>
                <div className={styles.tags}>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Fullstack</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Frontend</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Backend</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>Mobile</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>AI / ML</span>
                    <span className={classNames(styles.tag,  styles.green)}><i className="fa fa-briefcase"/>DevOps</span>
                </div>
            </section>
            <section className={styles.bases}>
                <h4 className={styles.title}>Based on your skills</h4>
                <div className={styles.tags}>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>React Native</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>Ruby on Rails</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>Python</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>PHP</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>Java</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>Vue.js</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>Golang</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>iOS Swift</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>Django</span>
                    <span className={classNames(styles.tag,  styles.vio)}><i className="fa fa-briefcase"/>Angular</span>
                </div>
            </section>
        </article>
    )
}

export default JobSubContent
