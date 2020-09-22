import React from 'react';
import { NavLink } from 'react-router-dom';
import IconCase from '../../../static/svg/briefcase-solid.svg';
import styles from './Layout.scss';

const Layout = () => (
  <>
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <NavLink
          to="/complaints"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <IconCase className={styles.iconGlobal} />
          <span>Скарги в моїх закупівлях</span>
        </NavLink>
        <NavLink
          to="/"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Питання (0)</span>
        </NavLink>
        <NavLink
          to="/"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Вимоги (0)</span>
        </NavLink>
      </div>
    </div>
  </>
);

export default Layout;
