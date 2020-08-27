import React from 'react';
import Filter from './Filters/Filters';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.main}>
    <Filter />
    <div>
      components Card sales
    </div>
  </div>
);

export default Layout;
