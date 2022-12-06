import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './scenes/Root';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

reportWebVitals();
