import React from 'react';
import {
  ButtonLink,
  ContainedButton,
  OutlinedButton,
  ButtonLinkRoute,
  ContainedButtonRoute,
  OutlinedButtonRoute
} from './Button.styled'

const Button = ({
  variant = 'link',
  children,
  ...props }) => {
  const buttonRender = () => {
    switch (variant) {
      case 'contained': {
        return (
          <ContainedButton {...props}>
            {children}
          </ContainedButton>
        );
      }
      case 'outlined': {
        return (
          <OutlinedButton {...props}>
            {children}
          </OutlinedButton>
        );
      }

      case 'linkRoute': {
        return (
          <ButtonLinkRoute {...props}>
            {children}
          </ButtonLinkRoute>
        );
      }

      case 'containedRoute': {
        return (
          <ContainedButtonRoute {...props}>
            {children}
          </ContainedButtonRoute>
        );
      }

      case 'outlinedRoute': {
        return (
          <OutlinedButtonRoute {...props}>
            {children}
          </OutlinedButtonRoute>
        );
      }

      default: {
        return (
          <ButtonLink {...props}>
            {children}
          </ButtonLink>
        );
      }
    }
  };

  return buttonRender();
}


export default Button;