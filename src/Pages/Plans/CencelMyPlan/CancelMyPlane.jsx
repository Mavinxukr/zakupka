import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import CancelMyPlanComponent from '../../../Components/MyCreatePlan/CancelMyPlanComponent/CancelMyPlanComponent';
import styles from './CancelMyPlane.scss';

const MyCreatePlane = () => (
  <>
    <Header />
    <CancelMyPlanComponent />
    <Footer classWrapper={styles.footerGlobal} />
  </>
);

export default MyCreatePlane;
