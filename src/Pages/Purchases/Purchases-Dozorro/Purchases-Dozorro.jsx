import React from 'react';
import styles from './Purchases-Dozorro.scss';
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
      <p> Purchases-Dozorro</p>
    </div>
    <Footer />
  </>
);

export default Layout;
