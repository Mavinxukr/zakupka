import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 1em;
  z-index: 999999;
  box-sizing: border-box;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalClose = styled.button`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  font-size: 1.25em;
  padding: 7px;
  background: rgba(255, 255, 255, 0.749);
  border: 1px solid #c3c0c0;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  &:hover {
    background: rgba(255, 255, 255, 0.989);
  }
`;

export const ModalBody = styled.div`
  z-index: 2;
  position: relative;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 3px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
  padding: 15px 20px;
`;