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

              <div className="category-filtering category-filter-row">
                <a
                  href="0"
                  data-open="#shop-sidebar"
                  data-pos="left"
                  className="filter-button uppercase plain"
                >
                  <i>⇅</i>
                  <strong className="filterText">FILTRAR POR:</strong>
                </a>
                <div className="inline-block"></div>
              </div>

            </div>


            <div className="flex-col medium-text-center">
              <p className="woocommerce-result-count hide-for-medium">
                Mostrando 1-16 de 86 resultados
              </p> 
              </div>

              <form className="woocommerce-ordering" method="get">
                <select name="orderby" aria-label="Pedido de la tienda">
                  <option defaultValue="menu_order">
                    Orden predeterminado
                  </option>
                  <option defaultValue="popularity" selected="selected">
                    Ordenar por popularidad
                  </option>
                  <option defaultValue="date">Ordenar por los últimos</option>
                  <option defaultValue="price">
                    Ordenar por precio: bajo a alto
                  </option>
                  <option defaultValue="price-desc">
                    Ordenar por precio: alto a bajo
                  </option>
                </select>
                <input type="hidden" name="paged" value="1"></input>
              </form>
           
          </div>
        </div>

        <main id="main">
          <div className="row category-page-row">
            <div className="col large-12">
              <div className="shop-container">
                <div className="products row row-small large-columns-4 medium-columns-3 small-columns-2">
                  <ItemListContainer />
                </div>

                <div className="container">
                  <nav className="woocommerce-pagination">
                    <ul className="page-numbers nav-pagination links text-center">
                      <li>
                        <a
                          className="page-number"
                          href="https://www.eltigreazul.com.ar/tienda/page/2/?orderby=popularity"
                        >
                          2
                        </a>
                      </li>

                      <li>
                        <a
                          className="next page-number"
                          href="https://www.eltigreazul.com.ar/tienda/page/2/?orderby=popularity"
                        >
                          <i className="icon-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Products;
