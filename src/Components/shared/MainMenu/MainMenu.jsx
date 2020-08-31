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
        <p className={styles.title}>Закупки</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconUser className={styles.icon} />
        <p className={styles.title}>подписки</p>
      </NavLink>
      <NavLink
        to="/registration"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconCar className={styles.icon} />
        <p className={styles.title}>профиль</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconCog className={styles.icon} />
        <p className={styles.title}>оплаты</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconCog className={styles.icon} />
        <p className={styles.title}>Настройки</p>
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.tab}
        activeClassName={styles.active}
      >
        <IconInbox className={styles.icon} />
        <p className={styles.title}>уведомление</p>
      </NavLink>
    </div>
  </div>
);

export default MainMenu;
