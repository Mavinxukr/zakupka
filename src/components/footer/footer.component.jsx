import React from 'react';
import {
  FooterContainer,
  FooterInner,
  FooterTypography
} from './footer.styled'
import ContainerMain from '../containers/ContainerMain/ContainerMain.component'

const Footer = () => (
  <FooterContainer>
    <ContainerMain>
      <FooterInner>
        <FooterTypography variant='body'>
          © company, 2020
        </FooterTypography>
        <FooterTypography variant='body'>
          Акредитований учасник електронної системи державних закупівель України ProZorroo
        </FooterTypography>
      </FooterInner>
    </ContainerMain>
  </FooterContainer>
)

export default Footer;
