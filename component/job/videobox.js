import React from 'react';
import styles from './videobox.module.css';

export default function VideoBox(props) {
  const { devName, devCountry, devJob, devQuote, devVideoLink } = props;

  return (
    <div className={styles.videobox}>
      <h2 className={styles.developerslove}>{(devName, devCountry)}</h2>
      <p>{devJob}</p>
      <q>{devQuote}</q>
      <iframe
        className={styles.videobox}
        width="560"
        height="315"
        src={devVideoLink}
        title="YouTube video player"
        frameborder="0"
        allow={`
        accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture`}
        allowfullscreen
      ></iframe>
      See what accomplished Turing developers have to say about working with top
      U.S. clients
    </div>
  );
}

/*
     <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*/
