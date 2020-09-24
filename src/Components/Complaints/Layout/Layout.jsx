import React from 'react';
import { NavLink } from 'react-router-dom';
import IconCase from '../../../static/svg/briefcase-solid.svg';
import IconStar from '../../../static/svg/star.svg';
import styles from './Layout.scss';
import Filter from '../../sales/Layout/Filters/Filters';

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
          <IconStar className={styles.iconGlobal} />
          <span>Відстежую (1)</span>
        </NavLink>
        <NavLink
          to="/"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <IconCase className={styles.iconGlobal} />
          <span>Усі скарги (1525)</span>
        </NavLink>
      </div>
      <div className={styles.section}>
        <Filter />
      </div>
    </div>
  </>
);

export default Layout;
