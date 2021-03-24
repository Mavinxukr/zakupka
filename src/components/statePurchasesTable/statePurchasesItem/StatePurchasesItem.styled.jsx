import styled from 'styled-components';
import Typography from '../../typography/Typography.component';
import Button from '../../button/Button.component';
import { AiOutlineStar } from 'react-icons/ai';

export const StatePurchasesItemTypography = styled(Typography)``;

export const StatePurchasesItemButton = styled(Button)``;

export const StatePurchasesItemTr = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.palette.divided};
  &:first-child {
    border-top: none;
  }
`;

export const StatePurchasesItemTd = styled.td`
  padding: 28px 0 30px 15px;
  vertical-align: top;
`;

export const AiOutlineStarIcon = styled(AiOutlineStar)`
  margin-right: 5px;
`;

