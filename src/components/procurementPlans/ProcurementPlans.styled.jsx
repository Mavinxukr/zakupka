import styled from 'styled-components';
import Typography from '../typography/Typography.component';

export const ProcurementPlansTableTitle = styled(Typography)`
  padding-left: 15px;
`;

export const ProcurementPlansTbody = styled.tbody`
  border: 1px solid ${({ theme }) => theme.palette.divided};
`;

export const ProcurementPlansTableStyled = styled.table`
  border-collapse: collapse;
`;

export const ProcurementPlansTableTHead = styled.thead``;

export const ProcurementPlansTableTr = styled.tr``;

export const ProcurementPlansTableTh = styled.th`
  padding: 10px 0px 10px 15px;
  text-align: left;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.25;
  &:nth-child(1) {
    width: 50%;
  }

  &:nth-child(2) {
    width: 15%;
  }

  &:nth-child(3) {
    width: 15%;
  }

  &:nth-child(4) {
    width: 20%;
  } 
`;