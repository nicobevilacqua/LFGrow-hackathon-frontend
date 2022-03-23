import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ProviderRedux } from 'react-redux';
import App from './App';
import { createGlobalStyle } from 'styled-components';

// import { Provider as ProviderSelfId } from '@self.id/react';

import './index.css';

import store from './store';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const ceramic = import.meta.env.CERAMIC_NODE || 'testnet-clay';

ReactDOM.render(
  <React.StrictMode>
    <ProviderRedux store={store}>
      <App />
    </ProviderRedux>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
