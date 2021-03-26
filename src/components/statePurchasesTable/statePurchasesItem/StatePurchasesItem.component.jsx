import React, { useState } from 'react';
import {
  StatePurchasesItemTd,
  StatePurchasesItemTr,
  StatePurchasesItemTypography,
  StatePurchasesItemButton,
  AiOutlineStarIcon,
} from './StatePurchasesItem.styled';

import { theme } from '../../../styles/theme'

const StatePurchasesItem = () => {
  const [selection, setSelection] = useState(false);

  return (
    <StatePurchasesItemTr>
      <StatePurchasesItemTd>
        <StatePurchasesItemButton
          color={theme.palette.text.linkBlue}
          variant="linkRoute"
          to="/"
          mb="10px"
        >
          [ТЕСТУВАННЯ] Тестовий опис предмету закупівлі у заголовку тендеру (created with procedure_tools)
        </StatePurchasesItemButton>
        <StatePurchasesItemTypography
          mb="10px"
        >
          broker
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography
          mb="10px"
        >
          О компании
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography
          mb="10px"
        >
          UA-2021-03-22-000015-b
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>
        <StatePurchasesItemTypography
          variant="subtitle-1"
        >
          500₴
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography
          variant="excretion"
        >
          c НДС
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>

        <StatePurchasesItemTypography>
          Оголошено:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography mb="10px" variant="excretion">
          31 серп., 11:19
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography>
          Завершение периода уточнений:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography mb="10px" variant="excretion">
          31 серп., 11:45
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography>
          Прием предложений:
        </StatePurchasesItemTypography>

        <StatePurchasesItemTypography mb="10px" variant="excretion">
          31 серп., 11:19 – 31 серп., 11:55
        </StatePurchasesItemTypography>
      </StatePurchasesItemTd>
      <StatePurchasesItemTd>

        <StatePurchasesItemTypography>
          Період уточнень
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography mb="10px" variant="excretion">
          Залишилось: --
        </StatePurchasesItemTypography>
        <StatePurchasesItemTypography mb="10px">
          Додати в обране
        </StatePurchasesItemTypography>
        <StatePurchasesItemButton
          variant="link"
          onClick={() => setSelection((prev) => !prev)}
          color={selection ? theme.palette.primary : theme.palette.text.linkBlue}
          center
        >
          <AiOutlineStarIcon
            fontSize="25px"
            color={selection ? theme.palette.primary : ''}
          />
          {selection ? 'Видалити з обраного' : 'Додати до обраного'}
        </StatePurchasesItemButton>


      </StatePurchasesItemTd>
    </StatePurchasesItemTr>
  )
}

export default StatePurchasesItem;