import { Link, Outlet } from "react-router-dom";
import cartIcon from "../../components/assets/cart-image/shopping-bag.svg";
import "./navBar.css";
import { Fragment, useState } from "react";
const NavBar = () => {
  const [horizontalRule, setHorizontalRule] = useState("shop");

  return (
    <Fragment>
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="logo-div">
            <Link className="logo" to="/">
              <h2>LOGO</h2>
            </Link>
          </div>
          <div className="nav-links-container">
            <Link
              onClick={() => {
                setHorizontalRule("shop");
              }}
              className="nav-links"
              to="/"
            >
              Shop{horizontalRule === "shop" ? <hr /> : ""}
            </Link>

            <Link
              onClick={() => {
                setHorizontalRule("men");
              }}
              className="nav-links"
              to="/men"
            >
              Men{horizontalRule === "men" ? <hr /> : ""}
            </Link>
            <Link
              onClick={() => {
                setHorizontalRule("women");
              }}
              className="nav-links"
              to="women"
            >
              Women{horizontalRule === "women" ? <hr /> : ""}
            </Link>
          </div>
          <div className="cart-nav">
            <Link to="login" className="nav-links login">
              Login
            </Link>
            <Link to="cart">
              <img className="cart-icon" src={cartIcon} alt="" />
            </Link>
            <Link className="count-link" to="cart">
              <div className="nav-links-count">0</div>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
