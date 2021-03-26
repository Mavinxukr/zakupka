import styled from 'styled-components';
import Button from '../../button/Button.component';
import { AiOutlinePhone } from 'react-icons/ai';

export const AiOutlinePhoneIcon = styled(AiOutlinePhone)`
  margin-right: 5px;
`;

export const DropPhoneContainer = styled.div`
  position: relative;
`;

export const DropPhoneHead = styled(Button)`
  line-height: 30px;
`;

export const DropPhoneList = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 10;
  min-width: 100%;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  padding: 5px 0;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
  }
`;

export const DropPhoneItem = styled.li``;

export const DropPhoneItemInfo = styled.li`
  white-space: nowrap;
  font-size: 13px;
  padding: 2px 10px;
`;

export const DropPhoneLink = styled(Button)`
  padding: 5px;
`;



