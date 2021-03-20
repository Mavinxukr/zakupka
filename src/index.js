import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App.component';
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

