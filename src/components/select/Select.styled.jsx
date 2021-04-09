import styled from 'styled-components';
import Typography from '../typography/Typography.component';
import { margin } from '../../styles/shared'


export const SelectContainer = styled.div`
  ${margin};
`;
export const SelectLabel = styled(Typography)``;
export const SelectError = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
`;

export const customStyles = {
  singleValue: () => ({
    fontSize: '0.875rem',
    lineHeight: '1',
    color: '#333333',
  }),
  valueContainer: () => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px'
  }),
  placeholder: () => ({
    fontSize: '0.875rem',
    lineHeight: '1',
    color: '#333333',
    opacity: '.8'
  }),
  menuList: () => ({
    fontSize: '0.875rem',
    lineHeight: '1',
    color: '#333333',
    cursor: 'pointer',
  }),
}