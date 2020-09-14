import React from 'react';
import { NavLink } from 'react-router-dom';
import IconCog from '../../../static/svg/cog-solid.svg';
import IconMail from '../../../static/svg/mail.svg';
import styles from './MenuPurchaser.scss';

const MenuPurchaser = () => (
  <>
    <div className={styles.container}>
      <nav className={styles.menu}>
        <div>
          Публічні закупівлі
          <ul className={styles.showBlock}>
            <li>Закупівлі</li>
            <li>
              <NavLink
                to="/my-plane-sales"
                exact
                className={styles.item}
              >Мої плани закупівель
              </NavLink>
            </li>
            <li>Скарги</li>
            <li>Пошук постачальників під covid-19</li>
          </ul>
        </div>
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
export default MenuPurchaser;
