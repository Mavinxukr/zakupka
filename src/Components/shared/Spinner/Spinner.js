import React from 'react';
import styles from './Spinner.scss';

const Spinner = () => (
  <div className={styles.shadowBlockGlobal}>
    <div className={styles.spinnerBlock}>
      <div className={styles.spinnerAnimation}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default Spinner;
