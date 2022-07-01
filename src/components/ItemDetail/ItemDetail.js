import ItemCount from "../ItemCount/ItemCount";
import { React, useState, useContext } from "react";
import "../item/cardItem.css";
import { CartContext } from "../cartContext/CartContext";
import { Link } from "react-router-dom";
const ItemDetail = ({ product }) => {
  const { AddToCart } = useContext(CartContext);

  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = (count) => {
    AddToCart(product, count);
  };



  return (
    <div className="col-md-4 p-1">
      <div className="card w-100 mt-5 product-card">
        <div className="card-header">
          {`${product.Name} - ${product.Categories}`}
        </div>
        <div className="card-body">
          <img src={product.Pic} alt="" className="w-50" />
        </div>
        <div>
          <div className="units-container">
            <h6 className="units-text">{product.Stock} Unidades Disponibles</h6>
          </div>
          <h5>Precio: {product.Price}</h5>
          {addedToCart ? (
            <>
              <Link className="btn btn-outline-primary btn-block detallebtn" to="/cart">
                Terminar mi compra
              </Link>
            </>
          ) : (
            <ItemCount
              stock={product.Stock}
              initial={1}
              onAdd={onAdd}
              setAddedToCart={setAddedToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
