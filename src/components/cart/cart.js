import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import CartItem from "../cartItem/CartItem";
const Cart = () => {
  const { cartList, EmptyCart, TotalPrice, IconCart } = useContext(CartContext);

  return (
    <>
    <div>
      {cartList.length < 1 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cartList.map((i) => <CartItem key={i.product.id}product={i.product} />)
      )}
    </div>
    <button onClick={EmptyCart}>Borrar mis productos</button>
    <p>El precio total de tus productos es: {TotalPrice()}</p>
    <p>La cantidad total del carrito es {IconCart()}</p>
    </>
  );
};

export default Cart;
