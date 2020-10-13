import React from 'react';
import TabsComponent from '../../../Components/Purchases/TabsComponent/TabsComponent';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import AnswerQuestions from '../../../Components/Purchases/Purchases-Questions/AnswerQuestons/AnswerQwestion';
import styles from './Purchases-Questions.scss';

const Layout = () => (
  <>
    <Header />
    <MenuPurchaser />
    <TabsComponent />
    <div className={styles.containerGlobal}>
      <h4 className={styles.middleTitleGlobal}>Хліб</h4>
      <AnswerQuestions />
    </div>
    <Footer />
  </>
);

export default Layout;
