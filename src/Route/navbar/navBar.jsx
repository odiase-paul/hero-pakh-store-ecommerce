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
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="logo-div">
            <Link className="logo">
              <img src={logo} alt="" />
              <p>AKH-STORES</p>
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
              Shop{horizontalRule === "shop" ? <hr /> : <></>}
            </Link>

            <Link
              onClick={() => {
                setHorizontalRule("men");
              }}
              className="nav-links"
              to="men"
            >
              Men{horizontalRule === "men" ? <hr /> : <></>}
            </Link>
            <Link
              onClick={() => {
                setHorizontalRule("women");
              }}
              className="nav-links"
              to="women"
            >
              Women{horizontalRule === "women" ? <hr /> : <></>}
            </Link>
          </div>
          <div className="cart-nav">
            <Link to="login" className="nav-links login">
              Login
            </Link>
            <Link className="cart" to="cart">
              <img className="cart-icon" src={cartIcon} alt="" />
              <div className="nav-links-count">{getTotalCartItem()}</div>
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
