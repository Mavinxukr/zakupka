import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Window.scss';

const Window = ({ title }) => (
  <>
    <div className={styles.shadowBlock}>
      <div>
        <h3 className={styles.middleTitleGlobal}>{ title }</h3>
      </div>
      <div>
        <span>Реквізити для повернення</span>
        <div className={styles.flexColumnGlobal}>
          <p className={styles.smallBoldTextGlobal}><span className={styles.redStar}>*</span> Код ЄДРПОУ/ІПН</p>
          <input type="text" className={styles.inputGlobal} />
        </div>
        <div className={styles.flexColumnGlobal}>
          <p className={styles.smallBoldTextGlobal}><span className={styles.redStar}>*</span> IBAN</p>
          <input type="text" className={styles.inputGlobal} />
        </div>
        <div className={styles.buttonsBlock}>
          <button type="button" className={styles.buttonMainGlobal}>Завантажити</button>
          <button type="button" className={styles.buttonGlobal}>Скасування</button>
        </div>
      </div>
    </div>
  </>
);

export default Window;
