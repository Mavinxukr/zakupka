import React from 'react';
import styles from './Layout.scss';
import TabsComponent from '../TabsComponent/TabsComponent';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';

const Layout = () => (
  <>
    <MenuPurchaser />
    <TabsComponent />
    <div className={styles.container}>
      {/* <Panel /> */}
    </div>
  </>
);

export default Layout;
