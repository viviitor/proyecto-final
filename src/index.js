import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import conf_auth from './conf_auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider {...conf_auth}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

