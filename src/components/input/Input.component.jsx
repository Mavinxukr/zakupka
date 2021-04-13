import React from 'react';
import { Controller } from 'react-hook-form'

import {
  InputContainer,
  InputError,
  InputLabel,
  InputStyled,
  IMaskInputStyled
} from './Input.styled'

const Input = React.forwardRef(({
  error,
  label,
  errorMessage,
  mt,
  mb,
  mr,
  ml,
  name,
  control,
  variant,
  defaultValue = '',
  ...props
}, ref) => {
  switch (variant) {
    case "imask": {
      return (
        <Controller
          defaultValue={defaultValue}
          control={control}
          name={name}
          render={({ onChange }) => (
            <InputContainer
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
              < IMaskInputStyled
                onChange={onChange}
                ref={ref}
                {...props}
              />
              { error && errorMessage && <InputError>{errorMessage}</InputError>}
            </InputContainer>
          )}
        />
      )
    }

    default: {
      return (
        <InputContainer
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
            defaultValue={defaultValue}
            name={name}
            ref={ref}
            {...props}
          />
          { error && errorMessage && <InputError>{errorMessage}</InputError>}
        </InputContainer>
      )
    }
  }
})

export default Input;


