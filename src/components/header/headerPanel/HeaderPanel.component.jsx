import React from 'react';
import DropPhones from '../dropPhones/DropPhone.component';
import {
  HeaderPanelButton,
  HeaderPanelContainer,
  BsEnvelopeIcon
} from './HeaderPanel.styled';


const headerPanel = () => {
  return (
    <HeaderPanelContainer>
      <DropPhones />
      <HeaderPanelButton
        variant="link"
        icon>
        <BsEnvelopeIcon
          fontSize="2rem"
        />
        Напишіть нам
      </HeaderPanelButton>
    </HeaderPanelContainer>
  )
};

export default headerPanel;