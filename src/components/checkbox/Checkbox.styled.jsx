import styled from 'styled-components';
import { margin } from '../../styles/shared'
import icon from './ic_check.svg'
export const CheckboxContainer = styled.label`
  ${margin};
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

export const CheckboxInputHidden = styled.input``;

export const CheckboxLabel = styled.span`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    cursor: pointer;
  }
  &::before {
    width: 17px;
    height: 17px;
    border: 1px solid ${({ theme }) => theme.palette.primary};
    border-radius: 4px;
  }
  &::after {
    display: none;
    width: 12px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 9px;
    background-image: url(${icon});
    transform: translateY(-50%) translateX(-50%);
  }
 `;
