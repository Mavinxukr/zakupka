import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.section}>
    <MenuPurchaser />
    <div className={styles.container}>
      <h2> Плани закупівель </h2>
      <button type="button" className={styles.buttonMainGlobal}>
        <NavLink
          to="my-plane-sales/my-create-plan"
        >Створити план
        </NavLink>
      </button>
      <button type="button" className={styles.buttonGlobal}>
        <NavLink
          to="my-plane-sales/cancel-my-plan"
        >Скасувати процедуру
        </NavLink>
      </button>
    </div>
  </div>
);

export default Layout;
