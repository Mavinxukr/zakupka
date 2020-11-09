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
            <li>
              <NavLink
                to="/purchases/sales"
                exact
                className={styles.item}
              >Закупівлі
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_plane_sales"
                exact
                className={styles.item}
              >Мої плани закупівель
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/complaints"
                exact
                className={styles.item}
              >Скарги
              </NavLink>
            </li>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >Пошук постачальників під covid-19
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          Бібліотека специфікацій
          <ul className={styles.showBlock}>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Бібліотека специфікацій
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          Профіль
          <ul className={styles.showBlock}>
            <li>
              <NavLink
                to="/user_company_data"
                exact
                className={styles.item}
              >
                Дані про компанію
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user_company_room"
                exact
                className={styles.item}
              >
                Дані для входу в кабінет
              </NavLink>
            </li>
            {/* <li> */}
            {/*  <NavLink */}
            {/*    to="/user_company_structure" */}
            {/*    exact */}
            {/*    className={styles.item} */}
            {/*  > */}
            {/*    Структура компанії */}
            {/*  </NavLink> */}
            {/* </li> */}
          </ul>
        </div>
        <div>
          Послуги та аналітика
          <ul className={styles.showBlock}>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Аналіз постачальників
              </NavLink>
            </li>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Аналіз замовників
              </NavLink>
            </li>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Інтеграція з нами
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          Контакти
          <ul className={styles.showBlock}>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Контакти
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <IconCog className={styles.icon} />
          <ul className={styles.showBlock}>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Налаштування
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <IconMail className={styles.icon} /><span>0</span>
          <ul className={styles.showBlock}>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Повідомлення
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          Prozzoro Market
          <ul className={styles.showBlock}>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Каталог
              </NavLink>
            </li>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Кошик
              </NavLink>
            </li>
            <li>
              <NavLink
                to="//my_plane_sales"
                exact
                className={styles.item}
              >
                Історія замовлень
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </>
);
export default MenuPurchaser;
