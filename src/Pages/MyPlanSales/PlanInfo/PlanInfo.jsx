import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import styles from './PlanInfo.scss';

const PlanInfo = () => {
  const a = 'hello';
  return (
    <>
      <Header />
      <div className={styles.containerGlobal}>
        <div className={styles.gridBlock}>
          <span className={styles.smallBoldTextGlobal} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlanInfo;
