import React from 'react';
import {
  MainLayoutContainer,
  MainLayoutContent,
  MainLayoutFooter,
  MainLayoutWrapper
} from './MainLayout.styled';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/footer.component';
import ContainerMain from '../../components/containers/containerMain/ContainerMain.component'

const MainLayout = ({ children }) => {
  return (
    <MainLayoutContainer>
      <MainLayoutWrapper>
        <Header />
        <MainLayoutContent>
          <ContainerMain>
            {children}
          </ContainerMain>
        </MainLayoutContent>
        <MainLayoutFooter>
          <Footer />
        </MainLayoutFooter>
      </MainLayoutWrapper>
    </MainLayoutContainer>
  )
};

export default MainLayout;