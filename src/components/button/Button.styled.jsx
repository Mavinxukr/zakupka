import styled, { css } from 'styled-components';
import { rgba, darken, lighten } from 'polished';
import { Link } from 'react-router-dom'
import { marginAndPadding } from '../../styles/shared';

const sharedStyles = css`
  ${marginAndPadding};
  display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-block')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: ${({ center }) => center ? 'flex' : ''};
  align-items: ${({ center }) => center ? 'center' : ''};
  ${({ color }) => color && `color: ${color}`};
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 300;
  text-decoration: none;
  background: none;
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
  border-radius: ${({ angle }) => angle ? 'none' : '4px'};
  transition: .3s ease;
`;

const ContainedShared = css`
  padding: 0.6875rem 1rem;
  min-height: 2.25rem;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme, color }) => color || theme.palette.text.inverted};
  text-align: center;

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

const outlineShared = css`
  color: ${({ theme, color }) => color || theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.primary};
  background: none;
  padding: 0.6875rem 1rem;
  min-height: 2.25rem;
  text-align: center;

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

const sharedLink = css`
  color: ${({ theme, color }) => color || theme.palette.primary};
  padding: 0;
  text-align: left;

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
    svg {
      fill: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export const ContainedButton = styled.button`
  ${sharedStyles};
  ${ContainedShared};
`;

export const ContainedButtonRoute = styled(Link)`
  ${sharedStyles};
  ${ContainedShared};
`;

export const OutlinedButton = styled.button`
  ${sharedStyles};
  ${outlineShared};
`;

export const OutlinedButtonRoute = styled(Link)`
  ${sharedStyles};
  ${outlineShared};
`;

export const ButtonLink = styled.button`
  ${sharedStyles};
  ${sharedLink};
`;

export const ButtonLinkRoute = styled(Link)`
  ${sharedStyles};
  ${sharedLink};
`;

