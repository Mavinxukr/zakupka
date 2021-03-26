import styled from 'styled-components';
import Typography from '../../typography/Typography.component';
import Button from '../../button/Button.component';
import { AiOutlineStar } from 'react-icons/ai';

export const ProcurementPlansItemTypography = styled(Typography)``;

export const ProcurementPlansItemButton = styled(Button)``;

export const ProcurementPlansItemItemTr = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.palette.divided};
  &:first-child {
    border-top: none;
  }
`;

export const ProcurementPlansItemItemTd = styled.td`
  padding: 28px 15px 30px 15px;
  vertical-align: top;
`;

export const AiOutlineStarIcon = styled(AiOutlineStar)`
  margin-right: 5px;
`;

