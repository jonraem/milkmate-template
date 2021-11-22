import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
  }
`;

/**
 * Here I would add any Providers I use in the application.
 */
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
