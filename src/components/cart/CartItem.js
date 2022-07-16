import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
//esto es la card del producto agregado al carrito al momento de entrar ahí para terminar la compra
const CartItem = ({ product }) => {
  const { DelItem } = useContext(CartContext);
  const { Name, Pic, id, Categories } = product;
  return (
    <div>
      <div className="col-md-3 product-card-container">
        <div className="card w-100 mt-5 product-card">
          <div className="card-header">
            {`${Name}`}
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
