import { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../contexts/ShopContext";
import { useParams } from "react-router-dom";

import ProductDisplay from "../../components/productDisplay/productDisplay";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import DescriptionBox from "../../components/descriptionBox/descriptionBox";
import RelatedProduct from "../../components/relatedProduct/relatedProduct";
const Product = () => {
  const { AllProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = AllProducts.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
