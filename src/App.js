import { Route, Routes } from "react-router-dom";
import "./query.css";
import Shop from "./pages/shop/Shop";
import NavBar from "./Route/navbar/navBar";
import ShopCategory from "./pages/ShopCategory/shopCategory";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import LogInSignUp from "./pages/LogInSingUp/LogInSignUp";
import Footer from "./components/footer/footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Shop />} />
          <Route path="men" element={<ShopCategory category="men" />} />
          <Route path="women" element={<ShopCategory category="women" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LogInSignUp />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
