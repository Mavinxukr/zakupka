import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import Layout from '../../../Components/Complaints/Layout/Layout';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';
import styles from '../Complaints.scss';

const Tracking = () => (
  <>
    <Header />
    <MenuPurchaser />
    <div className={styles.containerGlobal}>
      <h1>Відстеження</h1>
    </div>
    <Layout />
    <Footer />
  </>
);

export default Tracking;
