import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './HqmApp';
import reportWebVitals from './reportWebVitals';
import HqmApp from './HqmApp';

const HqmRoot = ReactDOM.createRoot(document.getElementById('HqmRoot'));
HqmRoot.render(
  <React.StrictMode>
    <HqmApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
