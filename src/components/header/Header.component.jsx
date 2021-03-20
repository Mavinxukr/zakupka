import React from 'react';
import {
  HeaderContainer,
  HeaderInner,
  HeaderWrapper
} from './Header.styled';
import Logo from '../logo/Logo.component'
import ContainerMain from '../containers/ContainerMain/ContainerMain.component';
import Button from '../button/Button.component'
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
            <Button variant="contained" color={theme.palette.text.white}>
              Кабінет
            </Button>
            {/* <Button variant="contained" color={theme.palette.text.white}>
              Вийти
            </Button> */}
          </HeaderWrapper>
        </HeaderInner>
      </ContainerMain>
    </HeaderContainer>
  )
}

export default Header;