import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Layout.scss';
import IconBriefcase from '../../../../static/svg/briefcase-solid.svg';
import IconStar from '../../../../static/svg/star.svg';
// import { NavLink } from 'react-router-dom';
// import styles from './Layout.scss';
// import IconBriefcase from '../../../../static/svg/briefcase-solid.svg';
// import IconStar from '../../../../static/svg/star.svg';

const Layout = () => (
  <div>
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
        <span>Плани закупівель</span>
      </NavLink>
    </div>
    Next Component
  </div>
);

export default Layout;
