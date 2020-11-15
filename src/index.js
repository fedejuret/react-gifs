import React from 'react';
import ReactDOM from 'react-dom';

// Componentes
import { GiftExpertApp } from './GiftExpertApp';

import reportWebVitals from './reportWebVitals';

import './index.css';
import './bootstrap.min.css';
import './animations.css';

ReactDOM.render(
    <GiftExpertApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
