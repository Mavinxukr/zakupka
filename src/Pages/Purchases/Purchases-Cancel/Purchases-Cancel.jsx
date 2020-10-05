import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import Layout from '../../../Components/Purchases/CancelPurchase/CancelPurchases/CancelPurchases';
import TabsComponent from '../../../Components/Purchases/TabsComponent/TabsComponent';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';

const CancelPurchases = () => (
  <>
    <Header />
    <MenuPurchaser />
    <TabsComponent />
    <Layout />
    <Footer />
  </>
);

export default CancelPurchases;
