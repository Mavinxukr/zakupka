import React from 'react';
import InfoArrow from '../../shared/InfoArrow/InfoArrow';
import Bulletin from '../Bulletin board/Bulletin';
import styles from './Layout.scss';

const Layout = () => (
  <>
    <div className={styles.containerGlobal}>
      <div className={styles.flexContainer}>
        <InfoArrow />
        <Bulletin />
      </div>
    </div>
  </>
);

export default Layout;
