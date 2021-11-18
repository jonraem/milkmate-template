import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import reportWebVitals from './reportWebVitals';

// Here I would add any Providers I use in the application.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
