import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const TabStyled = styled(Tab)`
  display: inline-flex;
  align-items: center;
  height: 40px;
  margin-bottom: -1px;
  border: 1px solid ${({ theme }) => theme.palette.divided};
  padding: 0 20px 0 20px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  cursor: pointer;
  &.react-tabs__tab--selected {
    position: relative;
    border-bottom: none;
    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0px;
      width: 100%;
      height: 1px;
      z-index: 5;
      background-color: ${({ theme }) => theme.palette.backgroundWhite};
    }
  }
  &:first-child {
    border-top-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
  }
`;

export const TabsStyled = styled(Tabs)`
`;

export const TabListStyled = styled(TabList)`

`;

export const TabPanelStyled = styled(TabPanel)`
  &.react-tabs__tab-panel--selected {
    padding: 20px;
    border: 1px solid  ${({ theme }) => theme.palette.divided};
    background-color: ${({ theme }) => theme.palette.backgroundWhite};
    border-radius: 4px;
    border-top-left-radius: 0;
  }
`;
