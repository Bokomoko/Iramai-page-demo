import React from 'react';
import styles from './latestposts.module.css';

export default function Latestpostprops(props) {
  const { posts } = props;
  return (
    <div className={styles.postcontainer}>
      {posts.map((aPost, index) => {
        return (
          <div className={styles.postbox} key={'ltst' + index}>
            <img src={aPost.image} />
            <h5>{aPost.title}</h5>
            <p>{aPost.text}</p>
            <a href={aPost.link}>Read more</a>
          </div>
        );
      })}
    </div>
  );
}
