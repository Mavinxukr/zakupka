import styled from 'styled-components';
import Button from '../button/Button.component';

export const FilterContainer = styled.form`
  padding: 20px 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.divided};
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
`;

export const FilterInputPosition = styled.div`
  margin-bottom: 20px;
`;



export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FilterBox = styled.div`

`;

export const FilterContainerButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.main};
  & + & {
    margin-left: 10px;
  }
`;