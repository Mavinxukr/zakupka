import React from 'react';
import {
  FilterInputContainer,
  FilterInputStyled,
  FilterInputButton
} from './FilterInput.styled';

const FilterInput = () => {
  return (
    <FilterInputContainer>
      <FilterInputStyled />
      <FilterInputButton variant='contained'>
        Пошук
      </FilterInputButton>
    </FilterInputContainer>
  )
}

export default FilterInput;