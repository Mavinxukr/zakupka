import React from 'react';
import cx from 'classnames';
import IconDoc from '../../../../static/svg/doc.svg';
import styles from './InfoDocumentPurchase.scss';

const InfoDocumentPurchase = () => (
  <>
    <div className={styles.infoContainer}>
      <div className={styles.table}>
        <div className={styles.itemTable}>
          <p className={cx(styles.smallTitleGlobal, styles.titleTable)}>Назва файлу</p>
          <ul>
            <li className={styles.smallTextGlobal}>
              <IconDoc className={styles.iconGlobal} />
              <span className={styles.link}>Тендерна документація
                ПЕЛЕТИ РОЦ КР 2020.doc
              </span>
            </li>
            <li className={styles.buttonMainGlobal}>Завантажити усі файли одним архівом</li>
          </ul>
          <div className={styles.buttonsHover}>
            <button type="button" className={styles.buttonMainGlobal}>Перегляд</button>
            <button type="button" className={styles.buttonGlobal}>Завантажити</button>
          </div>
        </div>
        <div className={styles.itemTable}>
          <p className={cx(styles.smallTitleGlobal, styles.titleTable)}>Тип файлу</p>
          <ul>
            <li className={styles.smallTextGlobal}>Тендерна документація</li>
          </ul>
        </div>
        <div className={styles.itemTable}>
          <p className={cx(styles.smallTitleGlobal, styles.titleTable)}>Дата розміщення</p>
          <ul>
            <li className={styles.smallTextGlobal}>1 вер. 11:15</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default InfoDocumentPurchase;
