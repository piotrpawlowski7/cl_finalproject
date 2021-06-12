import React from 'react';
import ReactDOM from 'react-dom';
import './scss/_reset.scss';
import './index.scss';
import App from './components/app/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

