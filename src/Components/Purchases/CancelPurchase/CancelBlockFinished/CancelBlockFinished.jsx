import React from 'react';
import styles from './CancelBlockFinished.scss';

const CancelBlockFinished = () => (
  <>
    <div className={styles.blockCancel}>
      <h2 className={styles.smallTitleGlobal}>Скасування закупівлі</h2>
      <blockquote className={styles.mainBlock}>
        <p>
          <span className={styles.normalTextGlobal}>Статус</span>
          <span className={styles.smallTextGlobal}>чернетка</span>
        </p>
        <p>
          <span className={styles.normalTextGlobal}>Скасування закупівлі</span>
          <span className={styles.smallTextGlobal}>від 13.05.20. 06:45</span>
        </p>
        <p>
          <span className={styles.normalTextGlobal}>Причина скасування закупівлі</span>
          <span className={styles.smallTextGlobal}>відсутність подальшої потреби в закупівлі товарів, робіт і послуг</span>
        </p>
        <p>
          <span className={styles.normalTextGlobal}>Reason for cancellation</span>
          <span className={styles.smallTextGlobal}>no need in procurement of goods, works and services</span>
        </p>
        <p>
          <span className={styles.normalTextGlobal}>Пояснення</span>
          <span className={styles.smallTextGlobal}>Немає більше потреби</span>
        </p>
      </blockquote>
      <div className={styles.documentBlock}>
        <label htmlFor="fileLoad" className={styles.buttonGlobal}>
          <span className={styles.smallTextGlobal}>Завантажити файл</span>
          <input id="fileLoad" type="file" />
        </label>
        <span className={styles.smallTextGlobal}>13 трав. 09:45</span>
      </div>
      <div className={styles.buttonsBlock}>
        <button type="button" className={styles.buttonMainGlobal}>Підписати ЕЦПЛКП та підтвердити</button>
        <button type="button" className={styles.buttonGlobal}>Підписати ЕЦПЛКП</button>
        <button type="button" className={styles.buttonGlobal}>Відмінити дію</button>
      </div>
    </div>
  </>
);

export default CancelBlockFinished;
