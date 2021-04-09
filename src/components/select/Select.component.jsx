import { Controller } from 'react-hook-form';
import {
  customStyles,
  SelectError,
  SelectLabel,
  SelectContainer
} from './Select.styled';
import Select from 'react-select';

const SelectController = ({
  name,
  control,
  label,
  error,
  errorMessage,
  className,
  mt,
  mr,
  mb,
  ml,
  ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ onChange }) => (
        <SelectContainer
          className={className}
          mt={mt}
          mr={mr}
          mb={mb}
          ml={ml}
        >
          { label ? (
            <SelectLabel>
              {label}
            </SelectLabel>
          ) : null}
          <Select
            {...props}
            styles={customStyles}
            onChange={onChange}
          />
          { error && errorMessage && <SelectError>{errorMessage}</SelectError>}
        </SelectContainer>
      )}
    />
  )
}

export default SelectController;