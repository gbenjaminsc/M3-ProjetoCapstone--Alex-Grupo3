/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter forceRefresh={true}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
