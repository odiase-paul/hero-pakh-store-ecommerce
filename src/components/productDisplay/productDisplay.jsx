import { useContext } from "react";
import "./productDisplay.css";
import { ShopContext } from "../../contexts/ShopContext";
const ProductDisplay = ({ productDisplay }) => {
  const { id, imageUrl, name, new_price, old_price } = productDisplay;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={imageUrl} alt="" />
          <img src={imageUrl} alt="" />
          <img src={imageUrl} alt="" />
          <img src={imageUrl} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="mainproduct-img" src={imageUrl} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1> {name}</h1>
        <div className="productdisplay-right-stars">
          <span className="fa fa-star color"></span>
          <span className="fa fa-star color"></span>
          <span className="fa fa-star color"></span>
          <span className="fa fa-star color"></span>
          <span className="fa fa-star white"></span>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-old-price">${old_price}</div>
          <div className="productdisplay-right-new-price">${new_price}</div>
        </div>
        <div className="productdisplay-right-descrip">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          className="product-display-add"
          onClick={() => {
            addToCart(id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tag : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
