import React from 'react';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import MainMenu from '../../Components/shared/MainMenu/MainMenu';
import Layout from '../../Components/sales/Layout/Layout';
import styles from './Sales.scss';

const Sales = () => (
  <div className={styles.main}>
    <Header />
    <div className={styles.container}>
      <MainMenu />
      <Layout />
    </div>
    <Footer />
  </div>
);

export default Sales;
