import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import MyProcurementPlansComponent from '../../../Components/MyProcurementPlansComponent/MyProcurementPlansComponent';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';

const MyProcurementPlans = () => (
  <>
    <Header />
    <MenuPurchaser />
    <MyProcurementPlansComponent />
    <Footer />
  </>
);

export default MyProcurementPlans;
