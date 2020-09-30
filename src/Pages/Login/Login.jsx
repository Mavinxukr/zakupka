import React from 'react';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import Layout from '../../Components/Login/Layout/Layout';
import styles from './Login.scss';

const Login = () => (
  <>
    <Header />
    <Layout />
    <Footer className={styles.footer} />
  </>
);

export default Login;
