import styled from 'styled-components';
import Typography from '../../typography/Typography.component';
import Button from '../../button/Button.component';

export const StatePurchasesItemTypography = styled(Typography)``;

export const StatePurchasesItemButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.linkBlue};
`;

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