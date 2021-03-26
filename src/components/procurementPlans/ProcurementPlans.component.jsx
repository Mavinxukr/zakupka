import React from 'react';
import {
  ProcurementPlansTableStyled,
  ProcurementPlansTableTHead,
  ProcurementPlansTableTh,
  ProcurementPlansTableTitle,
  ProcurementPlansTableTr,
  ProcurementPlansTbody
} from './ProcurementPlans.styled';
import ProcurementPlansItem from './procurementPlansItem/ProcurementPlansItem.component';
const ProcurementPlans = () => {
  return (
    <>
      <ProcurementPlansTableTitle
        mt="30px"
        mb="30px"
        variant="headline-1"
      >
        Плани закупівель
      </ProcurementPlansTableTitle>
      <ProcurementPlansTableStyled>
        <ProcurementPlansTableTHead>
          <ProcurementPlansTableTr>
            <ProcurementPlansTableTh>
              Назва плану
            </ProcurementPlansTableTh>
            <ProcurementPlansTableTh>
              Планова сума закупівлі
            </ProcurementPlansTableTh>
            <ProcurementPlansTableTh>
              Початок процедури
            </ProcurementPlansTableTh>
            <ProcurementPlansTableTh>
              Статус
            </ProcurementPlansTableTh>
          </ProcurementPlansTableTr>
        </ProcurementPlansTableTHead>
        <ProcurementPlansTbody>
          <ProcurementPlansItem />
          <ProcurementPlansItem />
          <ProcurementPlansItem />
        </ProcurementPlansTbody>
      </ProcurementPlansTableStyled>
    </>
  )
}

export default ProcurementPlans;