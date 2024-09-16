import "./breadcrumb.css";
const Breadcrumb = ({ product }) => {
  return (
    <div className="breadcrumb">
      HOME
      <span>
        <span className="fa fa-chevron-right arrow"></span>
      </span>
      SHOP
      <span>
        <span className="fa fa-chevron-right arrow"></span>
      </span>
      {product.category}
      <span>
        <span className="fa fa-chevron-right arrow"></span>
      </span>
      {product.name}
    </div>
  );
};

export default Breadcrumb;
