import ItemListContainer from "../../../containers/ItemListContainer/ItemListContainer";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="shop-page-title category-page-title page-title">
        <div className="shop-page-title-inner">
          <span className="store-title">Tienda:</span>

          <ItemListContainer />
        </div>
      </div>
    </>
  );
};

export default Products;
