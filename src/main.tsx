import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ProviderRedux } from 'react-redux';
import App from './App';

import './index.css';

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ProviderRedux store={store}>
      <App />
    </ProviderRedux>
  </React.StrictMode>,
  document.getElementById('root')
);
