import React from 'react';
import IconDelete from '../../../../static/svg/delete.svg';
import styles from './Calculation.scss';

const Calculation = () => (
  <>
    <div className={styles.calculation}>
      <span className={styles.text}>Опція:</span>
      <input type="text" className={styles.inputGlobal} />
      <span className={styles.text}>Вага опції:</span>
      <input type="text" className={styles.inputGlobal} />
      <span className={styles.icon}><IconDelete className={styles.iconGlobal} /></span>
    </div>
  </>
);

export default Calculation;
