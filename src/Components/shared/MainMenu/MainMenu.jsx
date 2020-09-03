import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainMenu.scss';
import IconCar from '../../../static/svg/car-solid.svg';
import IconCog from '../../../static/svg/cog-solid.svg';
import IconInbox from '../../../static/svg/inbox-solid.svg';
import IconUser from '../../../static/svg/user-circle-solid.svg';
import IconBriefcase from '../../../static/svg/briefcase-solid.svg';

const MainMenu = () => (
  <div className={styles.container}>
    <div className={styles.tabs}>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconBriefcase className={styles.icon} />
        <p className={styles.title}>Закупівлі</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconUser className={styles.icon} />
        <p className={styles.title}>Підписки</p>
      </NavLink>
      <NavLink
        to="/registration"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconCar className={styles.icon} />
        <p className={styles.title}>Профіль</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconCog className={styles.icon} />
        <p className={styles.title}>Оплати</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconCog className={styles.icon} />
        <p className={styles.title}>Налаштування</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconInbox className={styles.icon} />
        <p className={styles.title}>Сповіщення</p>
      </NavLink>
    </div>
  </div>
);

export default MainMenu;
