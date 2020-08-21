import React from 'react';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.tab}>
      <h2>Постачальник</h2>
    </div>
    <div className={styles.tab}>
      <h2>Державний замовник</h2>
    </div>
    <div className={styles.tab}>
      <h2>Комерційний замовник</h2>
    </div>
    <div className={styles.tab}>
      <h2>Учасник аукціонів</h2>
    </div>
    <div className={styles.tab}>
      <h2>Організатор аукціонів</h2>
    </div>
  </div>
);

export default Header;
