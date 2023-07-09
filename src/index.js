import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-w1i0vymfmmnyxtzn.us.auth0.com'
    clientId='UNXYI6jXhd0E0D3q8QTd7Q3odnamLXHU'
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
