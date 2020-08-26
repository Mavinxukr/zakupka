import React from 'react';
import styles from './RegUser.scss';
import IconCar from '../../../static/svg/car-solid.svg';

const RegUser = () => (
  <div className={styles.container}>
    <div className={styles.tabs}>
      <div className={`${styles.tab} ${styles.active}`}>
        <IconCar className={styles.icon} />
        <h2 className={styles.title}>Постачальник</h2>
      </div>
      <div className={styles.tab}>
        <IconCar className={styles.icon} />
        <h2 className={styles.title}>Державний замовник</h2>
      </div>
      <div className={styles.tab}>
        <IconCar className={styles.icon} />
        <h2 className={styles.title}>Комерційний замовник</h2>
      </div>
      <div className={styles.tab}>
        <IconCar className={styles.icon} />
        <h2 className={styles.title}>Учасник аукціонів</h2>
      </div>
      <div className={styles.tab}>
        <IconCar className={styles.icon} />
        <h2 className={styles.title}>Організатор аукціонів</h2>
      </div>
    </div>
  </div>
);

export default RegUser;
