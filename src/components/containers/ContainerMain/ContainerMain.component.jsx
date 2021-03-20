import React from 'react';
import { ContainerMainStyled } from './ContainerMain.styled';

export const ContainerMain = ({ children }) => (
  <ContainerMainStyled>
    {children}
  </ContainerMainStyled>
);

export default ContainerMain;