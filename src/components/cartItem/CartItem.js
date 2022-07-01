import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";

const CartItem = ({ product }) => {
  const { DelItem } = useContext(CartContext);
  const { Name, Pic, id, Categories } = product;
  return (
    <div>
      <div className="col-md-3 product-card-container">
        <div className="card w-100 mt-5 product-card">
          <div className="card-header">
            {`${Name} - ${Categories}`}
          </div>
          <div className="card-body">
            <img src={Pic} alt="" className="w-50" />
          </div>
          <button onClick={() => DelItem(id)}>Borrar producto</button>
        </div>
      </div>
     
    </div>
  );
};

export default CartItem;
