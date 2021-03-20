import styled from 'styled-components';
import Typography from '../typography/Typography.component';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  box-shadow: 0 0 3px rgb(0 0 0 / 30%);
`;

export const FooterInner = styled.footer`
  padding: 20px 0;
`;

export const FooterTypography = styled(Typography)``;