import React from 'react';
import { ContainerAuthStyled } from './ContainerAuth.styled';

export const ContainerAuth = ({ children }) => (
  <ContainerAuthStyled>
    {children}
  </ContainerAuthStyled>
);

export default ContainerAuth;