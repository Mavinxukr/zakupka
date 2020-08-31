import React from 'react';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import Layout from '../../Components/Registration/Layout/Layout';
import styles from './Registration.scss';

const Registration = () => (
  <div className={styles.main}>
    <Header />
    <Layout />
    <Footer />
  </div>
);

export default Registration;
