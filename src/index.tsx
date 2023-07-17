import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import * as serviceWorker from './serviceWorker';

import App from './App';

import './assets/styles/index.scss';


// Disable React DevTools in production.
if (import.meta.env.NODE_ENV === 'production')
  disableReactDevTools();

// Render the app.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      toastStyle={{
        backgroundColor: "rgba(var(--primary-light), 0.25)",
        color: "white",
        backdropFilter: "blur(20px)",
      }}
    />
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
