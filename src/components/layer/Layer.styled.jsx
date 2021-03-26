import styled from 'styled-components';

export const LayerContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
`;