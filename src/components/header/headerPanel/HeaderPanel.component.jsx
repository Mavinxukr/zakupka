import React from 'react';
import DropPhones from '../dropPhones/DropPhone.component';
import {
  HeaderPanelButtom,
  HeaderPanelContainer
} from './HeaderPanel.styled';
import message from '../../../static/svg/mail.svg';

const headerPanel = () => {
  return (
    <HeaderPanelContainer>
      <DropPhones />
      <HeaderPanelButtom variant="link" icon={message}>
        Напишіть нам
      </HeaderPanelButtom>
    </HeaderPanelContainer>
  )
};

export default headerPanel;