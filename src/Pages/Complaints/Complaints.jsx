import React from 'react';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import Layout from '../../Components/Complaints/Layout/Layout';
import MenuPurchaser from '../../Components/shared/MenuPurchaser/MenuPurchaser';
import styles from './Complaints.scss';

const Complaints = () => (
  <div>
    <Header />
    <MenuPurchaser />
    <div className={styles.containerGlobal}>
      <h1>Скарги АКМУ</h1>
    </div>
    <Layout />
    <Footer />
  </div>
);

export default Complaints;
