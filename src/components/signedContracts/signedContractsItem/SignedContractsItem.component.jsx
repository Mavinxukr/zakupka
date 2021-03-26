import React, { useState } from 'react';
import {
  AiOutlineStarIcon,
  SignedContractsItemButton,
  SignedContractsItemTd,
  SignedContractsItemTr,
  SignedContractsItemTypography
} from './SignedContractsItem.styled';

import { theme } from '../../../styles/theme'

const StatePurchasesItem = () => {
  const [selection, setSelection] = useState(false);

  return (
    <SignedContractsItemTr>
      <SignedContractsItemTd>
        <SignedContractsItemButton
          color={theme.palette.text.linkBlue}
          variant="linkRoute"
          to="/"
          mb="10px"
        >
          [ТЕСТУВАННЯ] Назва зкупівлі 1
        </SignedContractsItemButton>
        <SignedContractsItemTypography
          mb="10px"
        >
         ЗамовникТест
        </SignedContractsItemTypography>
        <SignedContractsItemTypography
          mb="10px"
        >
          О компании
        </SignedContractsItemTypography>
        <SignedContractsItemTypography
          mb="10px"
        >
          ID: UA-2020-08-31-000045-a
        </SignedContractsItemTypography>
      </SignedContractsItemTd>
      <SignedContractsItemTd>
        <SignedContractsItemTypography
          variant="subtitle-1"
        >
          25 000,00 ₴
        </SignedContractsItemTypography>
        <SignedContractsItemTypography
          variant="excretion"
        >
          c НДС
        </SignedContractsItemTypography>
      </SignedContractsItemTd>
      <SignedContractsItemTd>
        <SignedContractsItemTypography
          variant="subtitle-1"
        >
          25 000,00 ₴
        </SignedContractsItemTypography>
        <SignedContractsItemTypography
          variant="excretion"
        >
          c НДС
        </SignedContractsItemTypography>
      </SignedContractsItemTd>

      <SignedContractsItemTd>
        <SignedContractsItemTypography>
          Відділ освіти виконавчого комітету Софіївської селищної ради Софіївського району Дніпропетровської області
        </SignedContractsItemTypography>
      </SignedContractsItemTd>

      <SignedContractsItemTd>

        <SignedContractsItemTypography>
          Оголошено:
        </SignedContractsItemTypography>

        <SignedContractsItemTypography mb="10px" variant="excretion">
          31 серп., 11:19
        </SignedContractsItemTypography>

        <SignedContractsItemTypography>
          Завершение периода уточнений:
        </SignedContractsItemTypography>

        <SignedContractsItemTypography mb="10px" variant="excretion">
          31 серп., 11:45
        </SignedContractsItemTypography>

        <SignedContractsItemTypography>
          Прием предложений:
        </SignedContractsItemTypography>

        <SignedContractsItemTypography mb="10px" variant="excretion">
          31 серп., 11:19 – 31 серп., 11:55
        </SignedContractsItemTypography>
      </SignedContractsItemTd>
      <SignedContractsItemTd>

        <SignedContractsItemTypography>
          Період уточнень
        </SignedContractsItemTypography>
        <SignedContractsItemTypography mb="10px" variant="excretion">
          Залишилось: --
        </SignedContractsItemTypography>
        <SignedContractsItemTypography mb="10px">
          Додати в обране
        </SignedContractsItemTypography>
        <SignedContractsItemButton
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
        </SignedContractsItemButton>


      </SignedContractsItemTd>
    </SignedContractsItemTr>
  )
}

export default StatePurchasesItem;