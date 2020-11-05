import React from 'react';
import { NavLink } from 'react-router-dom';
import IconBriefcase from '../../../../static/svg/briefcase-solid.svg';
import IconStar from '../../../../static/svg/star.svg';
import IconClock from '../../../../static/svg/clock.svg';
import IconAward from '../../../../static/svg/award.svg';
import IconCup from '../../../../static/svg/cup.svg';
import Filter from '../../../shared/Filters/Filters';
import Card from '../../../shared/Card/Card';
import styles from '../../Favorit/Layout/Layout.scss';

const Layout = () => (
  <div className={styles.container}>
    <div className={styles.flexContainer}>
      <div className={styles.buttonTabs}>
        <NavLink
          to="/profile_purchases"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}
        >
          <IconBriefcase className={styles.icon} />
          <span>Всі закупівлі</span>
        </NavLink>
        <NavLink
          to="/profile_favorite"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}
        >
          <IconStar className={styles.icon} />
          <span>Обране</span>
        </NavLink>
        <NavLink
          to="/profile_planing"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}

        >
          <IconClock className={styles.icon} />
          <span>Планую взяти участь</span>
        </NavLink>
        <NavLink
          to="/profile_participate"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}

        >
          <IconAward className={styles.icon} />
          <span>Беру участь</span>
        </NavLink>
        <NavLink
          to="/profile_victories"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}

        >
          <IconCup className={styles.icon} />
          <span>Мої перемоги</span>
        </NavLink>
      </div>
      <div>
        <div className={styles.bgWhite}>
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
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
