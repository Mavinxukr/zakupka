import React from 'react';
import {
  HeaderContainer,
  HeaderInner,
  HeaderWrapper,
  HeaderLinkRoute
} from './Header.styled';
import Logo from '../logo/Logo.component'
import ContainerMain from '../containers/ContainerMain/ContainerMain.component';
import HeaderPanel from './headerPanel/HeaderPanel.component';
import { theme } from '../../styles/theme';

const Header = () => {
  return (
    <HeaderContainer>
      <ContainerMain>
        <HeaderInner>
          <Logo />
          <HeaderWrapper>
            <HeaderPanel />
            <HeaderLinkRoute
              variant="containedRoute"
              color={theme.palette.text.white}
              to="login"
            >
              Зареєструватись
            </HeaderLinkRoute>
          </HeaderWrapper>
        </HeaderInner>
      </ContainerMain>
    </HeaderContainer>
  )
}

export default Header;