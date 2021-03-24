import React, { useState } from 'react';
import {
  SelectStyled,
  SelectHeadStyled,
  SelectListItemStyled,
  SelectListStyled,
  SelectIconStyled,
  SelectOverlaidStyled,
  SelectError,
  SelectLabel,
  SelectWrapper,
  SelectListItemButton,
  SelectHeadInputStyled
} from './Select.styled';
import arrowDown from './arrow-down.svg';

const Select = React.forwardRef(({
  error,
  label,
  errorMessage,
  className,
  mt,
  mb,
  mr,
  ml,
  selectItems,
  defaultValue
}, ref) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onClickOpen = () => {
    setOpen((prevState) => !prevState)
  };

  const onClickChangeValue = (e) => {
    setValue(e.target.value)
    setOpen((prevState) => !prevState)
  };

  return (
    <SelectWrapper
      className={className}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
    >
      {label ? (
        <SelectLabel>
          {label}
        </SelectLabel>
      ) : null}
      <SelectStyled >
        <SelectHeadStyled onClick={onClickOpen}>
          <SelectHeadInputStyled
            ref={ref}
            error={error}
            value={value}
            type="button"
          />
          <SelectIconStyled src={arrowDown} />
        </SelectHeadStyled>
        {
          open ? (
            <>
              <SelectOverlaidStyled onClick={onClickOpen} />
              <SelectListStyled>
                {
                  selectItems?.map((value) => {
                    return (
                      <SelectListItemStyled key={value}>
                        <SelectListItemButton
                          type="button"
                          defaultValue={value}
                          onClick={onClickChangeValue} />
                      </SelectListItemStyled>
                    )
                  })
                }
              </SelectListStyled>
            </>
          ) : null
        }
      </SelectStyled>
      {error && errorMessage && <SelectError>{errorMessage}</SelectError>}
    </SelectWrapper>
  );
})

export default Select;