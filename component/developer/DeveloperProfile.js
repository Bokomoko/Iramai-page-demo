import styles from './developer.module.css';
import classNames from 'classnames';
import React from 'react';

function DeveloperProfiles(pros) {
  const { name, position, recommendation, share, downloadProfile } = pros;
  return (
    <div className={styles.profiles}>
      <div className={styles.header}>
        <div className={styles.site}>
          <div className={classNames(styles.txt_sm, 'txt_bold')}>Iramai</div>
        </div>
        <div className={styles.icons}>
          <a onClick={downloadProfile}>
            <i
              className={classNames(
                'fas fa-arrow-alt-circle-down',
                styles.icon_bg
              )}
              aria-hidden="true"
            />
          </a>
          <a onClick={share}>
            <i
              className={classNames('fa fa-share-alt', styles.icon_bg)}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
      <div className={styles.turing_demo_developer_profile}>
        <div className={styles.dev_main}>
          <img className={styles.dev_profile} src={pros.avatar} />
          <div className={styles.dev_name}>
            <div className={styles.txt_lg}>{name}</div>
            <div className={classNames(styles.txt_sm, styles.job_label)}>
              {position}
            </div>
          </div>
        </div>
        <div className={styles.dev_recommendation}>
          <div className={classNames(styles.txt_sm)}>{recommendation}</div>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.job_time}>
        <i
          className={classNames(
            'far fa-calendar-check',
            styles.icon_bg,
            styles.icon_cal
          )}
          aria-hidden="true"
        >
          <span className={styles.padding_8}>Availability</span>
        </i>
        <div className={classNames(styles.txt_sm, styles.job_full_time)}>
          {pros.work}
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.skills}>
        <i
          className={classNames(
            'fas fa-check',
            styles.icon_bg,
            styles.icon_cal
          )}
        >
          <span className={styles.padding_8}>Skills</span>
        </i>
        <div className={styles.dev_skills}>
          <div className={classNames(styles.txt_sm, styles.job_full_time)}>
            This developer went through 4 to 6 hours of rigorous vetting in
            these areas:
          </div>
          <div className={styles.skills_vetting}>
            <div className={classNames(styles.txt_sm, styles.col)} />
            <div className={classNames(styles.txt_sm, styles.col)}>
              Year of experience
            </div>
            <div className={classNames(styles.txt_sm, styles.col)}>
              Vetting results
            </div>
            <div className={classNames(styles.txt_sm, styles.col)}>Skill</div>
          </div>
          <div className={styles.line} />
          <img className={styles.img} src="/assets/profile_skills.png" />
        </div>
      </div>
    </div>
  );
}

export default DeveloperProfiles;
