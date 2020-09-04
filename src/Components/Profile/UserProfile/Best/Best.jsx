import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Best.scss';
import IconBriefcase from '../../../../static/svg/briefcase-solid.svg';
import IconStar from '../../../../static/svg/star.svg';

const Best = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.buttonTabs}>
          <NavLink
            to="/profile"
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
            <span>Плани закупівель</span>
          </NavLink>
          {/* <NavLink> */}
          {/*  <IconClock className={styles.icon} /> */}
          {/*  <span>Підписані контракти</span> */}
          {/* </NavLink> */}
          {/* <NavLink> */}
          {/*  <IconAward className={styles.icon} /> */}
          {/*  <span>Підписані контракти</span> */}
          {/* </NavLink> */}
          {/* <NavLink> */}
          {/*  <IconCup className={styles.icon} /> */}
          {/*  <span>Підписані контракти</span> */}
          {/* </NavLink> */}
        </div>
        <div>
          <ul className={styles.menu}>
            <li className={`${styles.menuItem} ${styles.menuItemActive}`}>Оголошені</li>
            <li className={styles.menuItem}>Рекомендуємо</li>
            <li className={styles.menuItem}>Кращі</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Best;
