import styled from 'styled-components';
import Typography from '../typography/Typography.component';
import { margin } from '../../styles/shared';

export const InputLabel = styled(Typography)``;


export const InputContainer = styled.div`
  ${margin};
  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled.input`
  width: 100%;
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
    color: ${({ theme }) => theme.palette.darkGrey};
  }
`;

export const InputError = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
`;
