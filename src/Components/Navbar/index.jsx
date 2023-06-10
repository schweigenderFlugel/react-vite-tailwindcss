import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = React.useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  const { isAuthenticated, user } = useAuth0();

  const signIn = () => {
    if (!isAuthenticated) {
      return (
        <NavLink
          to="/sign-in"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Sign In
        </NavLink>
      );
    }
  }

    const myAccount = () => {
      if (isAuthenticated) {
      return (
        <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
      )
    }
  }
  
  const myEmail = () => {
    if (isAuthenticated) {
      return (
    <p>{user.email}</p>
      )}
  }

  const myOrders = () => {
    if (isAuthenticated) {
      return (
        <NavLink
        to="/my-orders"
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        My Orders
      </NavLink>
      )}
  }
  

  return (
    <nav className=" sm:table lg:flex lg:justify-between lg:items-center lg:fixed lg:z-10 lg:top-0 lg:w-full lg:py-5 lg:px-8 lg:text-sm lg:font-light">
      <ul className="sm:table-row lg:flex lg:items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory("shoes")}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory("furniture")}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory("New Category ome")}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="lg:flex lg:items-center lg:gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {myEmail()}
          </NavLink>
        </li>
        <li>
          {myOrders()}
        </li>
        <li>
          {myAccount()}
        </li>
        <li>
          {signIn()}
        </li>
        <li className="flex justify-between">
          <ShoppingCartIcon className="h-6 w-6" />
          {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
