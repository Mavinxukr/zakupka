import React from 'react';
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
