import styled from 'styled-components';

export const DatePickerInput = styled.input`
  width: 240px;
  border-radius: 4px;
  height: 40px;
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.palette.text.main};
  caret-color: ${({ theme }) => theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.divided};
  padding: 0 20px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.text.main};
  }
`;