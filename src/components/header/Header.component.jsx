import React from 'react';
import {
  HeaderContainer,
  HeaderInner,
  HeaderWrapper,
  HeaderLinkRoute
} from './Header.styled';
import Logo from '../logo/Logo.component'
import ContainerMain from '../containers/containerMain/ContainerMain.component';
import HeaderPanel from './headerPanel/HeaderPanel.component';
import Button from '../button/Button.component';
import { logoutUser } from '../../toolkitRedux/reducers/userReducer'
import { useSelector, useDispatch } from 'react-redux';
import { theme } from '../../styles/theme';
const Header = () => {
  const user = useSelector(({ user }) => user.user);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <ContainerMain>
        <HeaderInner>
          <Logo />
          <HeaderWrapper>
            <HeaderPanel />
            {
              user ? (
                <Button variant="contained"
                  onClick={() => dispatch(logoutUser())}
                >
                  Выйти
                </Button>
              ) : (
                <HeaderLinkRoute
                  variant="containedRoute"
                  color={theme.palette.text.white}
                  to="login"
                >
                  Зареєструватись
                </HeaderLinkRoute>
              )
            }

          </HeaderWrapper>
        </HeaderInner>
      </ContainerMain>
    </HeaderContainer >
  )
}

export default Header;