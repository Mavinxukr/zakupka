import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TabsComponent.scss';

const TabsComponent = () => (

  <>
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <NavLink
          to="/purchases/sales"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Закупівля</span>
        </NavLink>
        <NavLink
          to="/purchases/questions"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Питання (0)</span>
        </NavLink>
        <NavLink
          to="/purchases/demands"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Вимоги (0)</span>
        </NavLink>
        <NavLink
          to="/purchases/claims"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Скарги (0)</span>
        </NavLink>
        <NavLink
          to="/purchases/dozorro"
          exact
          className={styles.tab}
          activeClassName={styles.tabActive}
        >
          <span>Dozorro (0)</span>
        </NavLink>
        <NavLink
          to="/purchases/report"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Звіти</span>
        </NavLink>
        <NavLink
          to="/purchases/monitoring"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Моніторинг (0)</span>
        </NavLink>
        <NavLink
          to="/purchases/inside"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <span>Внутрішнє обговореня (0)</span>
        </NavLink>
      </div>
    </div>
  </>
);

export default TabsComponent;
