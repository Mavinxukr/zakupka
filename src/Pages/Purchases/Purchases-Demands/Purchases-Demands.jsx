import React from 'react';
import { NavLink } from 'react-router-dom';
import TabsComponent from '../../../Components/Purchases/TabsComponent/TabsComponent';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import PurchasesDemandsComponent
  from '../../../Components/Purchases/Purchases-Demands/PurchasesDemandsComponent/PurchasesDemandsComponent';
import styles from './Purchases-Demands.scss';

const Layout = () => (
  <>
    <Header />
    <MenuPurchaser />
    <TabsComponent />
    <PurchasesDemandsComponent />
    <div className={styles.containerGlobal}>
      <NavLink
        to="/complaints/new_complains"
        exact
        className={styles.buttonGlobal}
      >
        Подати вимогу на умови закупівлі
      </NavLink>
      <NavLink
        to="/complaints/cancel_complains"
        exact
        className={styles.buttonGlobal}
      >
        Відмінити вимогу
      </NavLink>
    </div>
    <Footer classWrapper={styles.footerGlobal} />
  </>
);

export default Layout;
