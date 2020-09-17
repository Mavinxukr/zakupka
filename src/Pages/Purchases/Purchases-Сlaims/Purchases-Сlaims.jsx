import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from './Purchases-Сlaims.scss';
import TabsComponent from '../../../Components/Purchases/TabsComponent/TabsComponent';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';

const Layout = () => (
  <>
    <Header />
    <MenuPurchaser />
    <TabsComponent />
    <div className={styles.container}>
      <div className={styles.leftCard}>
        <p className={styles.title}>
          [тестування] ДК 021: 2015 03410000-7 - Деревина
        </p>
        <p className={styles.smallTextGlobal}>
          Як правильно обробляти скарги
          <NavLink
            to="/purchases/claims"
            className={cx(styles.linkGlobal, styles.link)}
          >
            читайте тут
          </NavLink>
        </p>
        <p className={cx(styles.smallTitleGlobal, styles.beforeSales)}>
          Скарги в АМКУ до закупівлі
        </p>
        <div>
          <span>Скарги не має</span>
        </div>
      </div>
      <div className={styles.cardProposition}>
        <p className={styles.header}>
          Прийом пропозиції
        </p>
        <div className={styles.footer}>
          <button type="button"> Кнопка </button>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;
