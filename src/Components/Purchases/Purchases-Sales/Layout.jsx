import React from 'react';
import InfoArrow from '../../shared/InfoArrow/InfoArrow';
import Bulletin from '../Bulletin board/Bulletin';
import styles from './Layout.scss';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import TabsComponent from '../TabsComponent/TabsComponent';
import InfoAboutCustomer from '../Bulletin board/InfoAboutCustomer/InfoAboutCustomer';
import InfoAboutPurchase from '../Bulletin board/InfoAboutPurchase/InfoAboutPurchase';
import InfoAboutListOffers from '../Bulletin board/InfoAboutListOffers/InfoAboutListOffers';
import InfoDocumentPurchase from '../Bulletin board/InfoDocumentPurchase/InfoDocumentPurchase';
import InfoAboutPayment from '../Bulletin board/infoAboutPayment/infoAboutPayment';
import InfoAboutMainContact from '../Bulletin board/InfoAboutMainContact/InfoAboutMainContact';
import CancelButton from '../../CancelButton/CancelButton';

const Layout = () => (
  <>
    <MenuPurchaser />
    <TabsComponent />
    <CancelButton />
    <div className={styles.containerGlobal}>
      <div className={styles.flexContainer}>
        <InfoArrow />
        <Bulletin />
      </div>
      <InfoAboutCustomer />
      <InfoAboutPurchase />
      <InfoAboutListOffers />
      <InfoDocumentPurchase />
      <InfoAboutPayment />
      <InfoAboutMainContact />
    </div>
  </>
);

export default Layout;
