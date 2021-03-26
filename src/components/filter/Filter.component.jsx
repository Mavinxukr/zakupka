import React, { useRef } from 'react';
import {
  FilterContainer,
  FilterContainerButton,
  FilterWrapper,
  FilterBox,
  FilterInputPosition
} from './Filter.styled';
import FilterInput from '../filterInput/FilterInput.component'
import Classifier from '../classifier/Classifier.component';

export const Filter = () => {

  const controlModal = useRef();
  console.log(123);
  return (
    <>
      <FilterContainer>
        <FilterInputPosition>
          <FilterInput />
        </FilterInputPosition>
        <FilterWrapper>
          <FilterBox>
            <FilterContainerButton angle variant="outlined">
              Статус
        </FilterContainerButton>
            <FilterContainerButton
              angle variant="outlined">
              Регіон
        </FilterContainerButton>
            <FilterContainerButton
              onClick={() => controlModal.current.open()}
              angle variant="outlined">
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
      <Classifier ref={controlModal} />
    </>
  )
}

export default Filter;