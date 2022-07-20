import ItemCount from "../ItemCount/ItemCount";
import { React, useState, useContext } from "react";
import "../Item/Item.css";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { AddToCart } = useContext(CartContext);

  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = (count) => {
    AddToCart(product, count);
  };

  return (
    <>
      {product.Categories ? (
        <>
          <div className="cardDetailContainer cardItem mb-2">
            <div className="card-header">
              {`${product.Name} - ${product.Categories}`}
            </div>
            <div className="card-body">
              <img src={product.Pic} alt="" />
            </div>
            <div>
              <div>
                <p className="description-text">{product.Description}</p>
              </div>

              <div className="units-container">
                <p className="units-text">
                  Unidades Disponibles: {product.Stock}
                </p>
              </div>
              <h5>Precio: {product.Price}</h5>
              {addedToCart ? (
                <>
                  <div>
                    <Link to="/products">
                      <button>ver más productos</button>
                    </Link>
                  </div>

                  <Link to="/cart">
                    <button>Terminar mi compra</button>
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
        </>
      ) : (
        <>
          <h1>
            Lo sentimos, este producto que buscas no se encuentra disponible,
            intenta con otro!
          </h1>
          <div>
            <Link to="/products">
              <button>ver más productos</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};
export default ItemDetail;
