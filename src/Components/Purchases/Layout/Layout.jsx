import React from 'react';
import styles from './Layout.scss';
import TabsComponent from '../TabsComponent/TabsComponent';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';

const Layout = () => (
  <>
    <MenuPurchaser />
    <TabsComponent />
  </>
);

export default Layout;
