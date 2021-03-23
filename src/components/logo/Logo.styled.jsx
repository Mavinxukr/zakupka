import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  font-size: 2.375rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.primary}
`;