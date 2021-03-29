import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App.component';
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './toolkitRedux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

