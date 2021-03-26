import styled from 'styled-components';

import Button from '../button/Button.component';

export const HeaderLinkRoute = styled(Button)``;

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  box-shadow: 0 0 3px rgb(0 0 0 / 30%);
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

