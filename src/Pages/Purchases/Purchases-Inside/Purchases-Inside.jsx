import React from 'react';
import styles from './Purchases-Inside.scss';
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
      <p> Purchases-Inside</p>
    </div>
    <Footer />
  </>
);

export default Layout;
