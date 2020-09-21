import React from 'react';
import styles from './InfoAboutCustomer.scss';

const InfoAboutCustomer = () => (
  <>
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Інформація про замовника</h2>
      <div className={styles.containerInfo}>
        <ul className={styles.names}>
          <li className={styles.smallBoldTextGlobal}>Назва:</li>
          <li className={styles.smallBoldTextGlobal}>Код ЄДРПОУ:</li>
          <li className={styles.smallBoldTextGlobal}>Веб сайт:</li>
          <li className={styles.smallBoldTextGlobal}>Адреса:</li>
        </ul>
        <ul className={styles.description}>
          <li className={styles.smallTextGlobal}>КП `Азовкомунсервіс`</li>
          <li className={styles.smallTextGlobal}>32368086</li>
          <li className={styles.smallTextGlobal}>Не вказано</li>
          <li className={styles.smallTextGlobal}>Україна, 75500, Херсонська область, місто Генічеськ, вулиця Гоголя,
            196
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default InfoAboutCustomer;
