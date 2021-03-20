import styled from 'styled-components';
import Button from '../button/Button.component';
import Input from '../input/Input.component';

export const FilterInputContainer = styled.div`
  position: relative;
  height: 40px;
`;

export const FilterInputStyled = styled(Input)`
  padding-right: 100px;
`;

export const FilterInputButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 40px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  color: ${({ theme }) => theme.palette.text.white};
`;