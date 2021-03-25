import styled from 'styled-components';
import Typography from '../typography/Typography.component';
import { margin } from '../../styles/shared';

export const TextareaLabel = styled(Typography)``;

export const TextareaContainer = styled.div`
  ${margin};
  display: flex;
  flex-direction: column;
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  border-radius: 4px;
  height: 200px;
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.palette.text.main};
  caret-color: ${({ theme }) => theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.divided};
  padding: 20px;
  resize: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.text.main};
  }
`;

export const TextareaError = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
`;
