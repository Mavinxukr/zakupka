import styled from 'styled-components';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

export const AiOutlinePlusSquareIcon = styled(AiOutlinePlusSquare)``;
export const AiOutlineMinusSquareIcon = styled(AiOutlineMinusSquare)``;
export const TreeItemContainer = styled.div`
  position: relative;
  padding-left: 20px;
  margin-bottom: 5px;
  margin-top: 5px;
`;
export const TreeItemButton = styled.button`
  position: absolute;
  top: 0px;
  left: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

