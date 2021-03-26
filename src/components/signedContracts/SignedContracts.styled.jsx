import styled from 'styled-components';
import Typography from '../typography/Typography.component';

export const SignedContractsTableTitle = styled(Typography)`
  padding-left: 15px;
`;

export const SignedContractsTableTBody = styled.tbody`
  border: 1px solid ${({ theme }) => theme.palette.divided};
`;

export const SignedContractsTableStyled = styled.table`
  border-collapse: collapse;
`;

export const SignedContractsTableTHead = styled.thead``;

export const SignedContractsTableTr = styled.tr``;

export const SignedContractsTableTh = styled.th`
  padding: 10px 0px 10px 15px;
  text-align: left;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.25;
  &:nth-child(1) {
    width: 20%;
  }

  &:nth-child(2) {
    width: 16%;
  }

  &:nth-child(3) {
    width: 16%;
  }

  &:nth-child(4) {
    width: 16%;
  } 
  &:nth-child(5) {
    width: 16%;
  } 
  &:nth-child(6) {
    width: 16%;
  } 
`;




