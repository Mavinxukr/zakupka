import React from 'react';
import styles from './Footer.scss';
import IconFacebook from '../../../static/svg/facebook.svg';
import IconYoutube from '../../../static/svg/youtube.svg';
import IconAppstore from '../../../static/svg/app_store_uk.svg';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.container}>
        <ul className={styles.menu}>
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
      <div className={styles.bottom}>
        <span>&copy; zakupi.prom.ua, 2016-2020</span>
        <p>Акредитований учасник електронної системи публічних закупівель України ProZorro</p>
        <ul className={styles.langBlock}>
          <li className={`${styles.social} ${styles.link}`}>Русский</li>
          <li className={`${styles.social} ${styles.link}`}>English</li>
        </ul>
        <ul className={styles.socialBlock}>
          <li className={`${styles.icon} ${styles.itemFacebook}`}> <IconFacebook className={styles.itemFacebook} /></li>
          <li className={`${styles.icon} ${styles.itemYoutube}`}><IconYoutube /></li>
        </ul>
        <div className={styles.apps}>
          <IconAppstore className={styles.androidApp} />
          <div className={styles.androidApp} />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
