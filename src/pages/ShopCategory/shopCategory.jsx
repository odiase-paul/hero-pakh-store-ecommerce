import { useContext } from "react";
import "./shopCategory.css";
import { ShopContext } from "../../contexts/ShopContext";
import Items from "../../components/item/items";

const ShopCategory = ({ category }) => {
  const { AllProducts } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="sortindex-shop-category">
        <p>
          <span>Showing 1-15</span> out of 34 products
        </p>
        <div className="shopcategory-sort">
          Sort by <span> &darr;</span>
        </div>
      </div>
      <div className="shopcategory-product">
        {AllProducts.map((item, i) => {
          if (category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
