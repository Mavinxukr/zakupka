import React from 'react';
import {
  FilterContainer,
  FilterContainerButton,
  FilterWrapper,
  FilterBox,
  FilterInputPosition
} from './Filter.styled';
import FilterInput from '../filterInput/FilterInput.component'

export const Filter = () => {
  return (
    <FilterContainer>
      <FilterInputPosition>
        <FilterInput />
      </FilterInputPosition>
      <FilterWrapper>
        <FilterBox>
          <FilterContainerButton variant="outlined">
            Статус
        </FilterContainerButton>
          <FilterContainerButton variant="outlined">
            Регіон
        </FilterContainerButton>
          <FilterContainerButton variant="outlined">
            ДК 021:2015
        </FilterContainerButton>
          <FilterContainerButton variant="outlined">
            ДКПП
        </FilterContainerButton>
          <FilterContainerButton variant="outlined">
            Сума контракту
        </FilterContainerButton>
          <FilterContainerButton variant="outlined">
            Замовник
        </FilterContainerButton>
        </FilterBox>
        <FilterContainerButton variant="outlined">
          Ще фільтри
        </FilterContainerButton>
      </FilterWrapper>
      <FilterContainerButton variant="link">
        Скинути фільтри
      </FilterContainerButton>
    </FilterContainer>
  )
}

export default Filter;