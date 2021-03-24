import React from 'react';
import {
  InputContainer,
  InputError,
  InputLabel,
  InputStyled
} from './Input.styled'

const Input = React.forwardRef(({
  error,
  label,
  errorMessage,
  className,
  mt,
  mb,
  mr,
  ml,
  ...props
}, ref) => {
  return (
    <InputContainer
      className={className}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
    >
      { label ? (
        <InputLabel>
          {label}
        </InputLabel>
      ) : null}
      <InputStyled
        error={error}
        ref={ref}
        {...props}
      />
      { error && errorMessage && <InputError>{errorMessage}</InputError>}
    </InputContainer>
  )
})

export default Input;


