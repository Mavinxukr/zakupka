import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import PlansByCompany from '../../../Components/PlansByCompany/PlansByCompany';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';

const MyProcurementPlans = () => (
  <>
    <Header />
    <MenuPurchaser />
    <PlansByCompany />
    <Footer />
  </>
);

export default MyProcurementPlans;
