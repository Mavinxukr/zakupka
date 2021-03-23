import styled from 'styled-components';
import Button from '../../button/Button.component';
import { BsEnvelope } from 'react-icons/bs';

export const HeaderPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;
export const HeaderPanelButton = styled(Button)`
  line-height: 30px;
  margin-left: 20px;
  color: ${({ theme }) => theme.palette.text.main};
`;

export const BsEnvelopeIcon = styled(BsEnvelope)`
  margin-right: 7px;
`;