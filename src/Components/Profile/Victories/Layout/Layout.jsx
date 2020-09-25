import React from 'react';
import { NavLink } from 'react-router-dom';
import IconBriefcase from '../../../../static/svg/briefcase-solid.svg';
import IconStar from '../../../../static/svg/star.svg';
import IconClock from '../../../../static/svg/clock.svg';
import IconAward from '../../../../static/svg/award.svg';
import IconCup from '../../../../static/svg/cup.svg';
import Filter from '../../../shared/Filters/Filters';
// import Card from '../../../shared/Card/Card';
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
          activeClassName={styles.tabActive}

        >
          <IconClock className={styles.icon} />
          <span>Планую взяти участь</span>
        </NavLink>
        <NavLink
          to="/profile-participate"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}

        >
          <IconAward className={styles.icon} />
          <span>Беру участь</span>
        </NavLink>
        <NavLink
          to="/profile-victories"
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
          <div className={styles.titleContainer}>
            <p className={styles.leftBlock}>Предмет закупівлі</p>
            <div className={styles.middleBlock}>
              <p> Очікувана вартість </p>
              <p>Важливі дати</p>
            </div>
            <p>Статус</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
