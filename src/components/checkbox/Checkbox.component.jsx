import React, { forwardRef } from 'react';
import {
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInputHidden
} from './Checkbox.styled';

const Checkbox = forwardRef(({
  className,
  label,
  id,
  mt,
  mr,
  mb,
  ml,
  type = "checkbox",
  disabled = false,
  ...props
}, ref) => {
  return (
    <CheckboxContainer
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      className={className}
      disabled={disabled}
    >
      <CheckboxInputHidden
        ref={ref}
        type={type}
        {...props}
      />
      <CheckboxLabel >
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  )
})

export default Checkbox;
