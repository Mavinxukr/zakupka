import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.section}>
    <MenuPurchaser />
    <div className={styles.container}>
      <h2> Плани закупівель </h2>
      <button type="button" className={styles.createButton}>
        <NavLink
          to="my-plane-sales/my-create-plan"
          className={styles.link}
        >Створити план
        </NavLink>
      </button>
    </div>
  </div>
);

export default Layout;
