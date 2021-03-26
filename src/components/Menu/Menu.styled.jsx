import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { margin } from '../../styles/shared';
import { darken, lighten } from 'polished';
import { AiFillSetting } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';

export const BsEnvelopeIcon = styled(BsEnvelope)``;

export const AiFillSettingIcon = styled(AiFillSetting)``;

export const MenuContainer = styled.nav`
  ${margin};
`;

export const MenuDropList = styled.ul`
  display: none;
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
  margin-top: 3px;
  padding: 5px 0;
  font-size: 0;
  white-space: nowrap;
  background: ${({ theme }) => theme.palette.backgroundWhite};
  border: 1px ${({ theme }) => theme.palette.divided} solid;
  border-radius: 3px;
`;

export const MenuList = styled.ul`
  display: flex;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.palette.divided};
  background: ${({ theme }) => theme.palette.backgroundWhite};
  z-index: 10;
  border-radius: 2px 2px 0 0;
`;

export const MenuListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  border-right: 1px solid ${({ theme }) => darken(0.05, theme.palette.divided)};
  border-bottom: 1px solid ${({ theme }) => darken(0.05, theme.palette.divided)};
  background-color: ${({ theme }) => lighten(0.05, theme.palette.divided)};
  background-image: linear-gradient(to bottom,${({ theme }) => lighten(0.30, theme.palette.divided)}, ${({ theme }) => darken(0.01, theme.palette.divided)});
  &:first-child ${MenuDropList} {
    left: -1px;
    transform: translateX(0);
  }
  &:last-child ${MenuDropList} {
    left: auto;
    right: -1px;
    transform: translateX(0);
  }
  &:hover {
    ${MenuDropList} {
      display: block;
    }
  }

  &:focus-within > ul {
    display: block;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 4px;
  }
`

export const MenuListItemLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.text.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
`

export const MenuDropListItem = styled.li`
  position: relative;
  display: block;
  width: 100%;
  font-size: 13px;
  white-space: nowrap;
  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.palette.backgroundGrey)};
  }
`;

export const MenuDropListItemLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.text.main};
  display: block;
  width: 100%;
  z-index: 20;
  padding: 8px 6px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.palette.text.main};
`