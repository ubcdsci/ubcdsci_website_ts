// Library imports.
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './configureStore';
import * as serviceWorker from './serviceWorker';

// Component imports.
import App from './App';

// Style imports.
import './index.scss';


const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || '';

/**
 * Setting up the index.
 * @returns {JSX.Element} JSX Component.
 */
const Index = () => {
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
          <App />

          { RECAPTCHA_SITE_KEY && (
              <div
                className="g-recaptcha"
                data-sitekey={RECAPTCHA_SITE_KEY}
                data-size="invisible"
                data-callback="onsubmit"
              />
            )}
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Index />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
