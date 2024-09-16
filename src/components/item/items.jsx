import { Link } from "react-router-dom";
import "./items.css";
const Items = ({ id, name, imageUrl, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={imageUrl} onClick={window.scrollTo(0, 0)} alt="" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Items;
