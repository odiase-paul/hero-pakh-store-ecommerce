import "./items.css";
const Items = ({ name, imageUrl, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={imageUrl} alt="" />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Items;
