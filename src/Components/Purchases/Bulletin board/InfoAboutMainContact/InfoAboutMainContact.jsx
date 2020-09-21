import React from 'react';
import styles from './InfoAboutMainContact.scss';

const InfoAboutMainContact = () => (
  <>
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Основний контакт</h2>
      <div className={styles.containerInfo}>
        <ul className={styles.names}>
          <li className={styles.smallBoldTextGlobal}>Імя:</li>
          <li className={styles.smallBoldTextGlobal}>Телефон:</li>
          <li className={styles.smallBoldTextGlobal}>E-mail:</li>
        </ul>
        <ul className={styles.description}>
          <li className={styles.smallTextGlobal}>Юлія Примак</li>
          <li className={styles.smallTextGlobal}>+380971551631</li>
          <li className={styles.smallTextGlobal}>rocreabil@meta.ua</li>
        </ul>
      </div>
    </div>
  </>
);

export default InfoAboutMainContact;
