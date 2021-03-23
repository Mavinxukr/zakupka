import styled, { css } from 'styled-components';
import { rgba, darken, lighten } from 'polished';
import { Link } from 'react-router-dom'

const sharedStyles = css`
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-block')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: ${({ icon }) => icon ? 'flex' : ''};
  align-items: ${({ icon }) => icon ? 'center' : ''};
  text-align: center;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 300;
  text-decoration: none;
  background: none;
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  border: none;
  border-radius: ${({ angle }) => angle ? 'none' : '4px'};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

export const ContainedButton = styled.button`
  ${sharedStyles};

  padding: 0.6875rem 1rem;
  min-height: 2.25rem;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme, color }) => color || theme.palette.text.inverted};

  &:hover {
    background-color: ${({ theme }) => lighten(0.03, theme.palette.primary)};
    svg {
      fill: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary};
  }

  &:focus {
    background-color: ${({ theme }) => lighten(0.05, theme.palette.primary)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.05, theme.palette.primary)};
  }
`;


export const ContainedButtonRoute = styled(Link)`
  ${sharedStyles};

  padding: 0.6875rem 1rem;
  min-height: 2.25rem;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme, color }) => color || theme.palette.text.inverted};

  &:hover {
    background-color: ${({ theme }) => lighten(0.03, theme.palette.primary)};
    svg {
      fill: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary};
  }

  &:focus {
    background-color: ${({ theme }) => lighten(0.05, theme.palette.primary)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.05, theme.palette.primary)};
  }
`;

export const OutlinedButton = styled.button`
  ${sharedStyles};

  color: ${({ theme, color }) => color || theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.primary};
  background: none;
  padding: 0.6875rem 1rem;
  min-height: 2.25rem;

  &:hover {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
    svg {
      fill: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
    }
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }

  &:focus {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.12)};
  }

  &:active {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.25)};
  }
`;


export const OutlinedButtonRoute = styled(Link)`
  ${sharedStyles};

  color: ${({ theme, color }) => color || theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.primary};
  background: none;
  padding: 0.6875rem 1rem;
  min-height: 2.25rem;

  &:hover {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
    svg {
      fill: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
    }
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }

  &:focus {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.12)};
  }

  &:active {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.25)};
  }
`;

export const ButtonLink = styled.button`
  ${sharedStyles};
  color: ${({ theme, color }) => color || theme.palette.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
    svg {
      fill: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export const ButtonLinkRoute = styled(Link)`
  ${sharedStyles};
  display: inline;
  color: ${({ theme, color }) => color || theme.palette.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
    svg {
      fill: ${({ theme }) => theme.palette.primary};
    }
  }
`;

