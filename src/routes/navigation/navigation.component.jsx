import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import AddToCart from "../../components/add-to-cart/add-to-cart.component";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <img
            id="logo-img"
            src={require("../../assets/static/images/logo.png")}
            alt="logo"
          />
        </Link>

        <div className="nav-links-right-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </div>

        <div className="nav-links-left-container">
          <Link className="nav-link" to="/login">
            SignIn
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>

          <AddToCart />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
