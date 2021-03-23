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
        <StatePurchasesItemButton variant="linkRoute">
          [ТЕСТУВАННЯ] Тестовий опис предмету закупівлі у заголовку тендеру (created with procedure_tools)
        </StatePurchasesItemButton>
        <StatePurchasesItemTypography>
          broker
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography>
          О компании
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography>
          UA-2021-03-22-000015-b
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>
        <StatePurchasesItemTypography variant="subtitle-1">
          500₴
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography>
          c НДС
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>

        <StatePurchasesItemTypography>
          Оголошено:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography variant="excretion">
          31 серп., 11:19
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography>
          Завершение периода уточнений:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography variant="excretion">
          31 серп., 11:45
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography>
          Прием предложений:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography variant="excretion">
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