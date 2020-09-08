import React from 'react';
import { NavLink } from 'react-router-dom';
import IconBriefcase from '../../../../../static/svg/briefcase-solid.svg';
import IconStar from '../../../../../static/svg/star.svg';
import IconClock from '../../../../../static/svg/clock.svg';
import IconAward from '../../../../../static/svg/award.svg';
import IconCup from '../../../../../static/svg/cup.svg';
import Filter from '../../../../sales/Layout/Filters/Filters';
import Card from '../../../../shared/Card/Card';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.container}>
    <div className={styles.flexContainer}>
      <div className={styles.buttonTabs}>
        <NavLink
          to="/profile-purchases"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}
        >
          <IconBriefcase className={styles.icon} />
          <span>Всі закупівлі</span>
        </NavLink>
        <NavLink
          to="/profile-favorite"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}
        >
          <IconStar className={styles.icon} />
          <span>Обране</span>
        </NavLink>
        <NavLink
          to="/profile-planing"
          exact
          className={styles.tab}
        >
          <IconClock className={styles.icon} />
          <span>Планую взяти участь</span>
        </NavLink>
        <NavLink
          to="/profile-participate"
          exact
          className={styles.tab}
        >
          <IconAward className={styles.icon} />
          <span>Беру участь</span>
        </NavLink>
        <NavLink
          to="/profile-victories"
          exact
          className={styles.tab}
        >
          <IconCup className={styles.icon} />
          <span>Мої перемоги</span>
        </NavLink>
      </div>
      <div>
        <div className={styles.bgWhite}>
          <ul className={styles.menu}>
            <NavLink
              to="/profile-purchases"
              exact
              className={styles.menuItem}
              activeClassName={styles.menuItemActive}
            >
              Оголошені
            </NavLink>
            <NavLink
              to="/profile-purchases/recomend"
              exact
              className={styles.menuItem}
              activeClassName={styles.menuItemActive}
            >
              Рекоменд
            </NavLink>
            <NavLink
              to="/profile-planing"
              exact
              className={styles.menuItem}
              activeClassName={styles.menuItemActive}
            >
              Кращі
            </NavLink>
          </ul>
          <Filter />
          <div className={styles.sortBlock}>
            <span className={styles.textLow}>Знайдено тендерів: 6 006 553</span>
            <div className={styles.sort}>
              <b>Сортування за</b>
              <input type="text" />
            </div>
          </div>
          <div className={styles.titleContainer}>
            <p className={styles.leftBlock}>Предмет закупівлі</p>
            <div className={styles.middleBlock}>
              <p> Очікувана вартість </p>
              <p>Важливі дати</p>
            </div>
            <p>Статус</p>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
