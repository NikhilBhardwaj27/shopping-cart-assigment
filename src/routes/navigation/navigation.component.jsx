import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/static/images/cart.svg";
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

          <div className="cart-container">
            <Cart className='cart-icon' />
            <span className="cart-count">0 items</span>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
