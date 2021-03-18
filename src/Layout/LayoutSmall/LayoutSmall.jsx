import React from 'react';
import ContainerSmall from '../../Components/Containers/ContainerSmall/ContainerSmall';
import ContainerMain from '../../Components/Containers/ContainerMain/ContainerMain';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import MenuPurchaser from '../../Components/shared/MenuPurchaser/MenuPurchaser';
import styles from './LayoutSmall.scss';

const LayoutSmall = ({ children }) => {
  return (
    <>
      <div className={styles.LayoutSmall}>
        <Header />
        <div className={styles.Сontent}>
          <ContainerMain>
            <div className={styles.MenuPurchaser}>
              <MenuPurchaser />
            </div>
          </ContainerMain>
          <ContainerSmall>
            {children}
          </ContainerSmall>
        </div>
        <div className={styles.Footer}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LayoutSmall;