import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.container}>
        <ul className={styles.footerMenu}>
          <li className={styles.link}>Тарифи</li>
          <li className={styles.link}>Контакти</li>
          <li className={styles.link}>Політика конфіденційності</li>
          <li className={styles.link}>Публічна оферта</li>
          <li className={styles.link}>Регламент</li>
          <li className={styles.link}>Про майданчик</li>
          <li className={styles.link}>Навчання</li>
          <li className={styles.link}>Тренажер аукціонів</li>
          <li className={styles.link}>Мобільний додаток</li>
          <li className={styles.link}>Інтеграція з нами</li>
        </ul>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.footerBottom}>
        <span>&copy;zakupi.prom.ua, 2016-2020</span>
        <p>Акредитований учасник електронної системи публічних закупівель України ProZorro</p>
        <ul className={styles.footerLang}>
          <li className={`${styles.social} ${styles.link}`}>Русский</li>
          <li className={`${styles.social} ${styles.link}`}>English</li>
        </ul>
        <ul className={styles.footerSocial}>
          <li className={`${styles.facebook} ${styles.link}`}> Facebook</li>
          <li className={`${styles.youtube} ${styles.link}`}>Youtube</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
