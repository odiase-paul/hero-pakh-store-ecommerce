import { Link, Outlet } from "react-router-dom";
import cartIcon from "../../components/assets/cart-image/shopping-bag.svg";
import logo from "../../components/backgroundImage/ak_logo.png";
import "./navBar.css";
import { Fragment, useContext, useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";
const NavBar = () => {
  const { getTotalCartItem } = useContext(ShopContext);
  const [horizontalRule, setHorizontalRule] = useState("shop");

  return (
    <Fragment>
      <nav className="navbar-expand-sm navbar-light bg-light nav-bar-container sticky-top">
        <div className="navbar nav-bar container-fluid ">
          <div className="logo-div">
            <Link className="logo">
              <img src={logo} alt="" />
              <p>AKH-STORES</p>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarText">
            <div className="nav-links-container navbar-nav ms-auto">
              <Link
                onClick={() => {
                  setHorizontalRule("shop");
                }}
                className={`nav-links ${
                  horizontalRule === "shop" ? " active" : ""
                }`}
                to="/"
              >
                Shop
              </Link>

              <Link
                onClick={() => {
                  setHorizontalRule("men");
                }}
                className={`nav-links ${
                  horizontalRule === "men" ? " active" : ""
                }`}
                to="men"
              >
                Men
              </Link>
              <Link
                onClick={() => {
                  setHorizontalRule("women");
                }}
                className={`nav-links ${
                  horizontalRule === "women" ? " active" : ""
                }`}
                to="women"
              >
                Women
              </Link>
            </div>
          </div>

          <div className="collapse navbar-collapse " id="navbarText">
            <div className="cart-nav navbar-nav ms-auto login-segment">
              <Link to="login" className="nav-links login">
                Login
              </Link>
              <Link className="cart" to="cart">
                <img className="cart-icon" src={cartIcon} alt="" />
                <div className="nav-links-count">{getTotalCartItem()}</div>
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
