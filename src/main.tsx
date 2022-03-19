import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createGlobalStyle } from 'styled-components';

import './index.css';

import store from './store';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
