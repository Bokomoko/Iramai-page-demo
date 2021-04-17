import React from 'react';
import styles from './testimonialvideos.module.css';

export default function TestimonialVideos(props) {
  const { listOfVideos } = props;

  return (
    <div className={styles.videobox}>
      <h3 className={styles.developerslove}>Developers ❤ Iramai</h3>
      <p>
        See what accomplished Iramai developers have to say about working with
        top U.S. clients
      </p>
    </div>
  );
}
