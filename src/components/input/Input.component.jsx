import React from 'react';
import {
  InputContainer,
  InputError,
  InputLabel,
  InputStyled
} from './Input.styled'

const Input = ({
  error,
  label,
  errorMessage,
  ...props
}) => {
  return (
    <InputContainer >
      <InputLabel>
        {label}
      </InputLabel>
      <InputStyled
        {...props}
      />
      {
        error ? (
          <InputError>
            {errorMessage}
          </InputError>
        ) : null
      }
    </InputContainer>
  )
}

export default Input;