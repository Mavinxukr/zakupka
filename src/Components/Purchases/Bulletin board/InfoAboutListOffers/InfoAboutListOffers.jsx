import React from 'react';
import cx from 'classnames';
import styles from './InfoAboutListOffers.scss';

const InfoAboutListOffers = () => (
  <>
    <div className={styles.infoContainer}>
      <div className={styles.table}>
        <div className={styles.itemTable}>
          <p className={cx(styles.smallTitleGlobal, styles.titleTable)}>Назва</p>
          <ul>
            <li className={styles.smallTextGlobal}>Паливні гранули з деревини - пелети</li>
            <li>ДК 021:2015: 03410000-7 Деревина</li>
          </ul>
        </div>
        <div className={styles.itemTable}>
          <p className={cx(styles.smallTitleGlobal, styles.titleTable)}>Кількість</p>
          <ul>
            <li className={styles.smallTextGlobal}>117,5 т</li>
          </ul>
        </div>
        <div className={styles.itemTable}>
          <p className={cx(styles.smallTitleGlobal, styles.titleTable)}>Період доставки</p>
          <ul>
            <li className={styles.smallTextGlobal}>до 31 груд. 2020</li>
          </ul>
        </div>
        <div className={styles.itemTable}>
          <p className={cx(styles.smallTitleGlobal, styles.titleTable)}>Місце доставки
          </p>
          <ul>
            <li className={styles.smallTextGlobal}>35320, Україна, Рівненська область, Олександрія, Санаторна 3</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default InfoAboutListOffers;
