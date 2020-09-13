import React from 'react';
import IconCog from '../../../static/svg/cog-solid.svg';
import IconMail from '../../../static/svg/mail.svg';
import styles from './Layout.scss';

const Layout = () => (
  <>
    <div className={styles.container}>
      <nav className={styles.menu}>
        <div>
          Бібліотека специфікацій
          <ul className={styles.showBlock}>
            <li>Бібліотека специфікацій</li>
          </ul>
        </div>
        <div>
          Профіль
          <ul className={styles.showBlock}>
            <li>Дані про компанію</li>
            <li>Дані для входу в кабінет</li>
            <li>Структура компанії</li>
            <li>Віджет</li>
          </ul>
        </div>
        <div>
          Послуги та аналітика
          <ul className={styles.showBlock}>
            <li>Аналіз постачальників</li>
            <li>Аналіз замовників</li>
            <li>Інтеграція з нами</li>
            <li>Довідковий центр</li>
          </ul>
        </div>
        <div>
          Контакти
          <ul className={styles.showBlock}>
            <li>Контакти</li>
          </ul>
        </div>
        <div>
          <IconCog className={styles.icon} />
          <ul className={styles.showBlock}>
            <li>Налаштування</li>
          </ul>
        </div>
        <div>
          <IconMail className={styles.icon} /><span>0</span>
          <ul className={styles.showBlock}>
            <li>Повідомлення</li>
          </ul>
        </div>
        <div>
          Prozzoro Market
          <ul className={styles.showBlock}>
            <li>Каталог</li>
            <li>Кошик</li>
            <li>Історія замовлень</li>
          </ul>
        </div>
      </nav>
    </div>
  </>
);
export default Layout;
