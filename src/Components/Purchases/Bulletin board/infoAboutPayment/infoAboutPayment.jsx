import React from 'react';
import styles from './infoAboutPayment.scss';

const infoAboutPayment = () => (
  <>
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Умови оплати</h2>
      <div className={styles.containerInfo}>
        <ul className={styles.names}>
          <li className={styles.smallBoldTextGlobal}>Умови оплати:</li>
          <li className={styles.smallBoldTextGlobal}>Оплата після події:</li>
          <li className={styles.smallBoldTextGlobal}>Тип оплати:</li>
          <li className={styles.smallBoldTextGlobal}>Розмір оплати:</li>
          <li className={styles.smallBoldTextGlobal}>Період (днів):</li>
        </ul>
        <ul className={styles.description}>
          <li className={styles.smallTextGlobal}>основні етапи фінансування</li>
          <li className={styles.smallTextGlobal}>поставка товару</li>
          <li className={styles.smallTextGlobal}>післяоплата</li>
          <li className={styles.smallTextGlobal}>100%</li>
          <li className={styles.smallTextGlobal}>10 (календарні)</li>
        </ul>
      </div>
    </div>
  </>
);

export default infoAboutPayment;
