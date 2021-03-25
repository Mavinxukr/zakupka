import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './theme';
import { lighten } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  input[type="checkbox"],
  input[type="radio"] {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    &:focus + span {
      &::before {
        border: 2px solid ${() => lighten(0.05, theme.palette.focused)};
      }
    }
    &:checked + span {
      &::after {
        display: block;
      }
    }
  }

  html,
  body {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    outline-color: ${() => lighten(0.05, theme.palette.focused)};
  }

  body,
  html,
  #root {
    height: 100%;
  }

  body {
    font-weight: 400;
    line-height: 1.6;
    font-family: 'Inter', sans-serif;
    background-color: #f5f7f9;
  }

  img {
    display: block;
    max-width: 100%;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;