import { useRoutes, BrowserRouter } from "react-router-dom";


import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import Profile from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import LoginButton from "../../Components/LoginButton";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";
import LogoutButton from "../../Components/LogoutButton";

const AppRoutes = () => {
  // En estas rutas tomamos el endpoint y el componente que va a ser renderizado
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/all", element: <Home /> },
    { path: "/shoes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <Profile />},
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sign-in", element: <LoginButton /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
        <CheckoutSideMenu />
        <LogoutButton />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
