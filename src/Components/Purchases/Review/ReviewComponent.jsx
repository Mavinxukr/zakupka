import React from 'react';
import styles from './ReviewComponent.scss';

const ReviewComponent = () => (
  <>
    <div>
      <h4 className={styles.middleTitleGlobal}>Пальне дизельне</h4>
      <h4 className={styles.smallTitleGlobal}>Розгляд закупівлі</h4>
      <div className={styles.gridContainer}>
        <div className={styles.smallBoldTextGlobal}>Статус:</div>
        <div className={styles.normalTextGlobal}>очікує розгляду</div>
        <div className={styles.smallBoldTextGlobal}>Відправлена на розгляд:</div>
        <div className={styles.normalTextGlobal}>25 жовт. 13:22</div>
        <div className={styles.smallBoldTextGlobal}>Закупівля роглядається:</div>
        <div className={styles.normalTextGlobal}>Микола Миклоайчук</div>
        <div className={styles.smallBoldTextGlobal}>Організатор закупівлі:</div>
        <div className={styles.normalTextGlobal}>Mykola Yakovenko</div>
      </div>
    </div>
  </>
);

export default ReviewComponent;
