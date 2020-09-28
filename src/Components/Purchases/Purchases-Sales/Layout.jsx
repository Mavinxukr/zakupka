import React from 'react';
import InfoArrow from '../../shared/InfoArrow/InfoArrow';
import Bulletin from '../Bulletin board/Bulletin';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import TabsComponent from '../TabsComponent/TabsComponent';
import InfoAboutCustomer from '../Bulletin board/InfoAboutCustomer/InfoAboutCustomer';
import InfoAboutPurchase from '../Bulletin board/InfoAboutPurchase/InfoAboutPurchase';
import InfoAboutListOffers from '../Bulletin board/InfoAboutListOffers/InfoAboutListOffers';
import InfoDocumentPurchase from '../Bulletin board/InfoDocumentPurchase/InfoDocumentPurchase';
import InfoAboutPayment from '../Bulletin board/infoAboutPayment/infoAboutPayment';
import InfoAboutMainContact from '../Bulletin board/InfoAboutMainContact/InfoAboutMainContact';
import CancelButton from '../CancelPurchase/CancelButton/CancelButton';
import CancelConfirm from '../CancelPurchase/CancelConfirm/CancelConfirm';
import CancelBlockFinished from '../CancelPurchase/CancelBlockFinished/CancelBlockFinished';
import styles from './Layout.scss';

const Layout = () => (
  <>
    <MenuPurchaser />
    <TabsComponent />
    <div className={styles.containerGlobal}>
      <CancelButton />
      <CancelConfirm />
      <CancelBlockFinished />
      <div className={styles.flexContainer}>
        <InfoArrow />
        <Bulletin classNameWrapper={styles.bulletin} />
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
