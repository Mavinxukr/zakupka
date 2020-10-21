import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import Layout from '../../../Components/Complaints/Layout/Layout';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';
import styles from '../Complaints.scss';

const AllComplaints = () => (
  <>
    <Header />
    <MenuPurchaser />
    <div className={styles.containerGlobal}>
      <h1>Усі скарги</h1>
    </div>
    <Layout />
    <Footer />
  </>
);

export default AllComplaints;
