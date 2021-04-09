import React, { useState } from 'react';
import {
  AiOutlineStarIcon,
  ProcurementPlansItemButton,
  ProcurementPlansItemItemTd,
  ProcurementPlansItemItemTr,
  ProcurementPlansItemTypography,
} from './ProcurementPlansItem.styled';

import { theme } from '../../../styles/theme';

const ProcurementPlansItem = () => {
  const [selection, setSelection] = useState(false);

  return (
    <ProcurementPlansItemItemTr>
      <ProcurementPlansItemItemTd>
        <ProcurementPlansItemButton
          color={theme.palette.text.linkBlue}
          variant="linkRoute"
          to="/"
          mb="10px"
        >
          [ТЕСТУВАННЯ] тест крит 4
        </ProcurementPlansItemButton>
        <ProcurementPlansItemTypography
          mb="10px"
        >
          privatmarket.ua
        </ProcurementPlansItemTypography>
        <ProcurementPlansItemTypography
          mb="10px"
        >
          О компании
        </ProcurementPlansItemTypography>
        <ProcurementPlansItemTypography
          mb="10px"
        >
          ID: UA-2021-03-25-000012-a
        </ProcurementPlansItemTypography>
      </ProcurementPlansItemItemTd>
      <ProcurementPlansItemItemTd>
        <ProcurementPlansItemTypography
          variant="subtitle-1"
        >
          127033200 ₴
        </ProcurementPlansItemTypography>
        <ProcurementPlansItemTypography variant="excretion">
          c НДС
        </ProcurementPlansItemTypography>
      </ProcurementPlansItemItemTd>
      <ProcurementPlansItemItemTd>

        <ProcurementPlansItemTypography>
          вересень, 2020
        </ProcurementPlansItemTypography>

      </ProcurementPlansItemItemTd>
      <ProcurementPlansItemItemTd>

        <ProcurementPlansItemTypography>
          Період уточнень
        </ProcurementPlansItemTypography>
        <ProcurementPlansItemTypography mb="10px" variant="excretion">
          Залишилось: --
        </ProcurementPlansItemTypography>
        <ProcurementPlansItemTypography mb="10px">
          Додати в обране
        </ProcurementPlansItemTypography>
        <ProcurementPlansItemButton
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
        </ProcurementPlansItemButton>

      </ProcurementPlansItemItemTd>
    </ProcurementPlansItemItemTr>
  )
}

export default ProcurementPlansItem;