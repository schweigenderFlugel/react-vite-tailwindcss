import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App/index.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const domain = import.meta.env.VITE_AUTH0_APP_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
// const apiAudience = import.meta.env.VITE_AUTH0_API_AUDIENCE

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      //useRefreshTokens={true}
      //useRefreshTokensFallback={false}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
