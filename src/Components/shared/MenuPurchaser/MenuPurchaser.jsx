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
          <NavLink
            to="/create_tender"
            exact
          >
            Створити закупівлю (Оригінал що має вигляд)
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/create_tender_proto"
            exact
          >
            Створити закупівлю (прототип який працює)
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/create_plan"
            exact
          >
            Створити план
          </NavLink>
        </div>
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
      </nav>
    </div>
  </>
);
export default MenuPurchaser;
