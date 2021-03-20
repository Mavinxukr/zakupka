import React from 'react';
import {
  ButtonLink,
  ContainedButton,
  OutlinedButton,
  Icon,
  IconWrapper,
} from './Button.styled'

const renderIcon = ({ icon, children, ...props }) => {
  return (
    <IconWrapper>
      <Icon src={icon} {...props} />
      {children}
    </IconWrapper>
  )
}

const Button = ({
  variant = 'link',
  children,
  icon,
  className,
  ...props }) => {
  const buttonRender = () => {
    switch (variant) {
      case 'contained': {
        return (
          <ContainedButton className={className} {...props}>
            {icon ? renderIcon({ icon, children, ...props }) : children}
          </ContainedButton>
        );
      }
      case 'outlined': {
        return (
          <OutlinedButton className={className} {...props}>
            {icon ? renderIcon({ icon, children, ...props }) : children}
          </OutlinedButton>
        );
      }

      default: {
        return (
          <ButtonLink className={className} {...props}>
            {icon ? renderIcon({ icon, children, ...props }) : children}
          </ButtonLink>
        );
      }
    }
  };

  return buttonRender();
}


export default Button;