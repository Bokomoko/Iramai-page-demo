import styles from './fancylist.module.css';
import React from 'react';

// fancyList : a list of items with a title

export default function FancyList(props) {
  const { listTitle, listItems } = props;

  return (
    <div className={styles.title}>
      <h2>{listTitle}</h2>
      <ul>
        <div className={styles.listItems}>
          {listItems.map((oneItem, index) => (
            <li key={'fclist' + index}>{oneItem}</li>
          ))}
        </div>
      </ul>
    </div>
  );
}
