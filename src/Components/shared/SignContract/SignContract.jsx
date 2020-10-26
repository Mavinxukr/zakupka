import React from 'react';
import IconDoc from '../../../static/svg/doc.svg';
import styles from './SignContract.scss';

const SignContract = () => (
  <>
    <div className={styles.shadowBlock}>
      <div className={styles.flexRowGlobal}>
        <IconDoc />
        <div>
          <span className={styles.middleTitleGlobal}>Підписати договір</span>
          <p className={styles.content}>
            Ви дійсно бажаєте підписати договір?
            Після підписання договору закупівлю буде закрито.
            Цю операцію буде неможливо відмінити.
          </p>
        </div>
      </div>
      <button type="button" className={styles.buttonMainGlobal}>
        Підписати
      </button>
    </div>
  </>
);

export default SignContract;
