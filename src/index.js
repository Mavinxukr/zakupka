import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer position="top-right" autoClose={5000} closeOnClick />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

