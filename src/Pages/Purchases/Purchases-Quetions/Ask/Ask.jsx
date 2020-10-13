import React from 'react';
import MenuPurchaser from '../../../../Components/shared/MenuPurchaser/MenuPurchaser';
import Header from '../../../../Components/shared/Header/Header';
import Footer from '../../../../Components/shared/Footer/Footer';
import AskComponent from '../../../../Components/Purchases/Purchases-Questions/AskComponent/AskComponent';
import styles from './Ask.scss';

const Ask = () => (
  <>
    <Header />
    <MenuPurchaser />
    <AskComponent />
    <Footer classWrapper={styles.footer} />
  </>
);

export default Ask;
