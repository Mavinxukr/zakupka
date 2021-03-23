import React from 'react';
import {
  StatePurchasesItemTd,
  StatePurchasesItemTr,
  StatePurchasesItemTypography,
  StatePurchasesItemButton
} from './StatePurchasesItem.styled';

const StatePurchasesItem = () => {
  return (
    <StatePurchasesItemTr>
      <StatePurchasesItemTd>
        <StatePurchasesItemButton
          variant="linkRoute"
          mb="5px"
        >
          [ТЕСТУВАННЯ] Тестовий опис предмету закупівлі у заголовку тендеру (created with procedure_tools)
        </StatePurchasesItemButton>
        <StatePurchasesItemTypography
          mb="5px"
        >
          broker
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography
          mb="5px"
        >
          О компании
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography
          mb="5px"
        >
          UA-2021-03-22-000015-b
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>
        <StatePurchasesItemTypography
          variant="subtitle-1"
          mb="5px"
        >
          500₴
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography
          mb="5px"
        >
          c НДС
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>

        <StatePurchasesItemTypography>
          Оголошено:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography mb="5px" variant="excretion">
          31 серп., 11:19
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography>
          Завершение периода уточнений:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography mb="5px" variant="excretion">
          31 серп., 11:45
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography>
          Прием предложений:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography mb="5px" variant="excretion">
          31 серп., 11:19 – 31 серп., 11:55
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>

        <StatePurchasesItemTypography>
          Період уточнень
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography>
          Осталось: --
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography>
          Додати в обране
        </StatePurchasesItemTypography>

      </StatePurchasesItemTd>
    </StatePurchasesItemTr>
  )
}

export default StatePurchasesItem;