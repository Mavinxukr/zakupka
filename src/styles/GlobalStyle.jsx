import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body,
  html,
  #root {
    height: 100%;
  }

  body {
    font-weight: 400;
    line-height: 1.6;
    font-size: 10px;
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
`;