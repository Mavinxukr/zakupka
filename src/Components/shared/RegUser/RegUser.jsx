import React from 'react';
import styles from './RegUser.scss';

const RegUser = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={`${styles.tab} ${styles.active}`}>
        <h2 className={styles.tabTitle}>Постачальник</h2>
      </div>
      <div className={styles.tab}>
        <h2 className={styles.tabTitle}>Державний замовник</h2>
      </div>
      <div className={styles.tab}>
        <h2 className={styles.tabTitle}>Комерційний замовник</h2>
      </div>
      <div className={styles.tab}>
        <h2 className={styles.tabTitle}>Учасник аукціонів</h2>
      </div>
      <div className={styles.tab}>
        <h2 className={styles.tabTitle}>Організатор аукціонів</h2>
      </div>
    </div>
  </div>
);

export default RegUser;
