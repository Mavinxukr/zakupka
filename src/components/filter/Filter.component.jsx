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
          <FilterContainerButton angle variant="outlined">
            Статус
        </FilterContainerButton>
          <FilterContainerButton angle variant="outlined">
            Регіон
        </FilterContainerButton>
          <FilterContainerButton angle variant="outlined">
            ДК 021:2015
        </FilterContainerButton>
          <FilterContainerButton angle variant="outlined">
            ДКПП
        </FilterContainerButton>
          <FilterContainerButton angle variant="outlined">
            Сума контракту
        </FilterContainerButton>
          <FilterContainerButton angle variant="outlined">
            Замовник
        </FilterContainerButton>
        </FilterBox>
        <FilterContainerButton angle variant="outlined">
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