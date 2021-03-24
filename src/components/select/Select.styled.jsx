import styled, { css } from 'styled-components';
import { rgba, darken, lighten } from 'polished';
import Typography from '../typography/Typography.component';
import { margin } from '../../styles/shared';

const SelectButtonShared = css`
  width: 100%;
  border-radius: 4px;
  text-align: left;
  min-height: 40px;
  color: ${({ theme }) => theme.palette.text.main};
  caret-color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  padding: 5px 30px 5px 20px;
  font-size: 1rem;
  line-height: 1.2;
  white-space: normal;
  font-weight: 300;
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  ${margin};
`;

export const SelectStyled = styled.div`
  position: relative;
`;

export const SelectIconStyled = styled.img`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 12px;
  height: 9px;
`;

export const SelectHeadStyled = styled.div``;

export const SelectHeadInputStyled = styled.input`
  ${SelectButtonShared};
  min-height: 40px;
  border: 1px solid ${({ theme }) => theme.palette.divided};
`;

export const SelectListItemButton = styled.input`
  ${SelectButtonShared};
  border: none;
  &:hover {
    background-color: ${({ theme }) => lighten(0.03, theme.palette.divided)};
    svg {
      fill: ${({ theme }) => rgba(theme.palette.divided, 0.05)};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary};
  }

  &:focus {
    background-color: ${({ theme }) => lighten(0.05, theme.palette.divided)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.05, theme.palette.divided)};
  }
`;

export const SelectOverlaidStyled = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
`;

export const SelectListStyled = styled.ul`
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  list-style: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.text.main};
  caret-color: ${({ theme }) => theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.divided};
`;

export const SelectListItemStyled = styled.li`
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  & + & {
    border-top: 1px solid ${({ theme }) => theme.palette.divided};
  }
`;

export const SelectError = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
`;

export const SelectLabel = styled(Typography)``;