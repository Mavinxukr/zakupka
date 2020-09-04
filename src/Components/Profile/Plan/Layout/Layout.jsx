import React from 'react';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import styles from './Layout.scss';
import UserProfile from '../../../../Pages/UserProfile/UserProfile';

const Layout = () => (
  <>
    <Header />
    <UserProfile />
    <Footer />
  </>
);

export default Layout;
