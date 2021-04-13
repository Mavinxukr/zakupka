import styled, { css } from 'styled-components';
import Typography from '../typography/Typography.component';
import { margin } from '../../styles/shared';
import { IMaskInput } from 'react-imask';

const shared = css`
  width: 100%;
  border-radius: 4px;
  height: 40px;
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.palette.text.main};
  caret-color: ${({ theme }) => theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.divided};
  padding: 0 20px;
  cursor: pointer;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.text.main};
    opacity: .8;
  }
`;

export const InputLabel = styled(Typography)``;

export const IMaskInputStyled = styled(IMaskInput)`
  ${shared};
`;

export const InputContainer = styled.div`
  ${margin};
  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled.input`
  ${shared};
`;

export const InputError = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
`;
