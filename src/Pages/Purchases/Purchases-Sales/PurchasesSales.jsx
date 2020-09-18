import React from 'react';
import TabsComponent from '../../../Components/Purchases/TabsComponent/TabsComponent';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import Layout from '../../../Components/Purchases/Purchases-Sales/Layout';

const PurchasesSales = () => (
  <>
    <Header />
    <MenuPurchaser />
    <TabsComponent />
    <Layout />
    <Footer />
  </>
);

export default PurchasesSales;
