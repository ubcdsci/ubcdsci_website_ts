// Library imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component imports
import App from './App';

// Style imports
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
