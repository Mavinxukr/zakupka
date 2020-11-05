import React from 'react';
import Header from '../../../../Components/shared/Header/Header';
import Footer from '../../../../Components/shared/Footer/Footer';
import MenuPurchaser from '../../../../Components/shared/MenuPurchaser/MenuPurchaser';
import Layout from '../../../../Components/Profile/UserProfile/UserCompanyRoom/Layout';

const UserCompanyRoom = () => (
  <>
    <Header />
    <MenuPurchaser />
    <Layout />
    <Footer />
  </>
);

export default UserCompanyRoom;
