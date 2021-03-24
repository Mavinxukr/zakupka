import React from 'react';
import {
  StatePurchasesTableTitle,
  StatePurchasesTableStyled,
  StatePurchasesTableTr,
  StatePurchasesTableTh,
  StatePurchasesTableTHead,
  StatePurchasesTableTBody
} from './StatePurchasesTable.styled';
import StatePurchasesItem from './statePurchasesItem/StatePurchasesItem.component'

const StatePurchasesList = () => {
  return (
    <>
      <StatePurchasesTableTitle
        mt="30px"
        mb="30px"
        variant="headline-1">
        Державні закупівлі
      </StatePurchasesTableTitle>
      <StatePurchasesTableStyled>
        <StatePurchasesTableTHead>
          <StatePurchasesTableTr>
            <StatePurchasesTableTh>
              Предмет закупівлі
          </StatePurchasesTableTh>
            <StatePurchasesTableTh>
              Очікувана вартість
          </StatePurchasesTableTh>
            <StatePurchasesTableTh>
              Важливі дати
          </StatePurchasesTableTh>
            <StatePurchasesTableTh>
              Статус
          </StatePurchasesTableTh>
          </StatePurchasesTableTr>
        </StatePurchasesTableTHead>
        <StatePurchasesTableTBody>
          <StatePurchasesItem />
          <StatePurchasesItem />
          <StatePurchasesItem />
        </StatePurchasesTableTBody>
      </StatePurchasesTableStyled>
    </>

  )
}

export default StatePurchasesList;