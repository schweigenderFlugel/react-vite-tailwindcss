import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/index.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'

const domain = import.meta.env.VITE_APP_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;
console.log(domain);
console.log(clientId);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
          domain={domain} 
          clientId={clientId}
          authorizationParams={{
          redirect_uri: window.location.origin,
          }}
        >
           <App />
        </Auth0Provider>
  </React.StrictMode>
)
