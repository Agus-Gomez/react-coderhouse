import ItemListContainer from "../../../containers/ItemListContainer/ItemListContainer";
import "./Products.css";

const Products = () => {
  return (
    //shop-page-title-inner tiene un flex-row medium-flex-wrap
    <>
      <div className="shop-page-title category-page-title page-title">
        <div className="shop-page-title-inner flex-row medium-flex-wrap">
          {/* first container */}
          <div className=" textCategoriesContainer flex-col flex-grow medium-text-center">
            <div className="is-larger">
              <span className=" filterText woocommerce-breadcrumb store-title">
                Tienda:
              </span>

              <ItemListContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
