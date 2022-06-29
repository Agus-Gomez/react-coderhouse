import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartList, EmptyCart, TotalPrice, IconCart } = useContext(CartContext);

  return (
    <>
        {cartList.length < 1 ? (
          <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
            <h1 className="text-center">Carrito de Compras</h1>
            <p className="text-center">Oops El carrito esta Vacío</p>

            <div>
              <Link to="../products">
                <button className="btn btn-outline-primary btn-block detallebtn">
                  ver más productos
                </button>
              </Link>
            </div>
          </div>
        ) : (
          
          cartList.map((i) => (
            <CartItem key={i.product.id} product={i.product} />
          ))
        )}
     
      <button onClick={EmptyCart}>Borrar mis productos</button>
      <p>El precio total de tus productos es: {TotalPrice()}</p>
      <p>La cantidad total del carrito es {IconCart()}</p>
    </>
  );
};

export default Cart;
