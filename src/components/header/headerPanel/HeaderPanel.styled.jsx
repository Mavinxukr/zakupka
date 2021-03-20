import styled from 'styled-components';
import Buttom from '../../button/Button.component';

export const HeaderPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;
export const HeaderPanelButtom = styled(Buttom)`
  line-height: 30px;
  margin-left: 20px;
  color: ${({ theme }) => theme.palette.text.main}
`;