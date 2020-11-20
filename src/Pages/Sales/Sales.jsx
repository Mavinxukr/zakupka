import React from 'react';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import Layout from '../../Components/sales/Layout/Layout';
import { createPlan } from '../../services/createPlan';
import styles from './Sales.scss';

const Sales = () => {
  createPlan()
    .then((r) => console.log(r))
    .catch((e) => console.log(e));

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Layout />
      </div>
      <Footer />
    </div>
  );
};

export default Sales;
