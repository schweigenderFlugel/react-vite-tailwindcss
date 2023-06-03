import { useRoutes, BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import LoginButton from "../../Components/Login";
import "./App.css";

const AppRoutes = () => {
  // En estas rutas tomamos el endpoint y el componente que va a ser renderizado
  const domain = import.meta.env.VITE_APP_DOMAIN;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  console.log(domain);
  console.log(clientId);
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/all", element: <Home /> },
    { path: "/shoes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sign-in",
      element: (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <SignIn />
        </Auth0Provider>
      ),
    },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
