import styled from 'styled-components';
import Typography from '../typography/Typography.component';

export const StatePurchasesTableTitle = styled(Typography)`
  padding-left: 15px;
  margin-bottom: 20px;
`;

export const StatePurchasesTableTBody = styled.tbody`
  border: 1px solid ${({ theme }) => theme.palette.divided};
`;

export const StatePurchasesTableStyled = styled.table`
  border-collapse: collapse;
`;

export const StatePurchasesTableTHead = styled.thead``;

export const StatePurchasesTableTr = styled.tr``;

export const StatePurchasesTableTh = styled.th`
  padding: 10px 0px 10px 15px;
  text-align: left;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.25;
  &:nth-child(1) {
    width: 40%;
  }

  &:nth-child(2) {
    width: 20%;
  }

  &:nth-child(3) {
    width: 20%;
  }

  &:nth-child(4) {
    width: 20%;
  } 
`;




