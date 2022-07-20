import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

//card de carrito
const CartItem = ({ product, count }) => {
  const { DelItem } = useContext(CartContext);
  const { Name, Pic, id } = product;
  return (
    <>

      <div className="mdl-card mdl-shadow--2dp mdl-card--horizontal-2">
        <div className="mdl-card__media">
          <img src={Pic} alt="img" />
        </div>
        <div className="mdl-card__title">
          <p className="mdl-card__title-text">{Name}</p>
          <div> x {count}</div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button className="deleteProductButton" onClick={() => DelItem(id)}>
            Borrar producto
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
