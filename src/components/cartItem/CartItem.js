import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";

const CartItem = ({ product }) => {
  const { DelItem } = useContext(CartContext);
  const { name, price, id } = product;
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => DelItem(id)}>Borrar producto</button>
    </div>
  );
};

export default CartItem;
