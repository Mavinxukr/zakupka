import React from 'react';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import Layout from '../../Components/Complaints/Layout/Layout';
import MenuPurchaser from '../../Components/shared/MenuPurchaser/MenuPurchaser';

const Complaints = () => (
  <div>
    <Header />
    <MenuPurchaser />
    <Layout />
    <Footer />
  </div>
);

export default Complaints;
