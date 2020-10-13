import React from 'react';
import cx from 'classnames';
import styles from './AccessParticipan.scss';

const AccessParticipan = () => (
  <>
    <div className={styles.shadowBlock}>
      <div className={styles.header}>
        <h3 className={styles.middleTitleGlobal}>Підтвердження учасника</h3>
      </div>
      <div>
        <p>Вітаємо! Ви підтвержуєте намір укласти договір з учасником.</p>
        <p>Ви зможете змінити своє рішення, поки не завантажите договір до системи.</p>
      </div>
      <div className={cx(styles.flexColumnGlobal, styles.sizeBlock)}>
        <label htmlFor="downloadFile" className={styles.buttonMainGlobal}>
          Прикріпити файл
          {/* eslint-disable-next-line react/button-has-type */}
          <input
            type="file"
            id="downloadFile"
            className={styles.downloadFile}
          />
        </label>
        <span className={styles.smallGrayTextGlobal}>
          Максимум 100 файлів, не більше 49МВ кожен.
        </span>
      </div>
      <div className={styles.flexRowGlobal}>
        <button type="button" className={styles.buttonMainGlobal}>
          Так, підтврдити учасника.
        </button>
        <button type="button" className={styles.buttonGlobal}>
          Повернутись до розгляду пропозицій.
        </button>
      </div>
    </div>
  </>
);

export default AccessParticipan;
