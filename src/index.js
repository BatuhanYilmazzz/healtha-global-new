import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DataState from './context/DataState';

ReactDOM.render(
  <DataState>
    <App />
  </DataState>,
  document.getElementById('root')
);
