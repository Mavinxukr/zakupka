import React from 'react';
import {
  TextareaContainer,
  TextareaError,
  TextareaLabel,
  TextareaStyled
} from './Textarea.styled';

const Textarea = React.forwardRef(({
  error,
  label,
  errorMessage,
  mt,
  mb,
  mr,
  ml,
  ...props
}, ref) => {
  return (
    <TextareaContainer
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
    >
      { label ? (
        <TextareaLabel>
          {label}
        </TextareaLabel>
      ) : null}
      <TextareaStyled
        error={error}
        ref={ref}
        {...props} />
      { error && errorMessage && <TextareaError>{errorMessage}</TextareaError>}
    </TextareaContainer>
  )
})

export default Textarea;