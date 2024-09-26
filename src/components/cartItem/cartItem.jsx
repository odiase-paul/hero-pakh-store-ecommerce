import { useContext } from "react";
import "./cartItem.css";
import { ShopContext } from "../../contexts/ShopContext";

const CartItem = () => {
  const { AllProducts, cartItem, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cart-item">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {AllProducts.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-format cartItems-format-main">
                <img className="cart-product-icon" src={e.imageUrl} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p className="cartItems-quantity">{cartItem[e.id]}x</p>
                <p>${e.new_price * cartItem[e.id]}</p>
                <span
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="fa fa-minus cartitem-remove-icon"
                ></span>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItem-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
