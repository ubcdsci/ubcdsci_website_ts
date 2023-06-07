// Library imports.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { store } from '@/app/store';
import * as serviceWorker from '@/serviceWorker';

// Component imports.
import App from '@/App';

// Style imports.
import '@/index.scss';


// Disable React DevTools in production.
// if (process.env.NODE_ENV === 'production')
//   disableReactDevTools();

// Render the app.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
