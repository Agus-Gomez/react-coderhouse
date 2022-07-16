import { createContext, useContext, useState } from "react";

//Creo el contexto y lo guardo en la variable CartContext.
export const CartContext = createContext([]); //revisar por qué se rompe al sacar el export.

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const [trackingOrder, setTrackingOrder] = useState("");

  const AddToCart = (product, count) => {
    let prevCart = [...cartList];

    if (prevCart.some((i) => i.product.id === product.id)) {
      prevCart.find((i) => i.product.id === product.id).count += count;
      setCartList(prevCart);
    } else {
      setCartList([...cartList, { product, count }]);
    }
  };

  //borrar 1 item del carrito
  const DelItem = (id) => {
    const items = cartList.filter((i) => i.product.id !== id);
    setCartList(items);
    return;
  };

  const TotalPrice = () => {
    return cartList.reduce((acum, i) => acum + i.count * i.product.Price, 0);
  };

  //borrar el carrito entero
  const EmptyCart = () => {
    setCartList([]);
  };

  const IconCart = () => cartList.reduce((acum, i) => acum + i.count, 0);

  //para hacer el set del trackingOrder
  const SetLastOrder = (id) => {
    setTrackingOrder(id);
  };

  //para traer el trackingOrder
  const GetLastOrder = () => {
    return trackingOrder;
  };

  return (
    <CartContext.Provider
      value={{
        AddToCart,
        cartList,
        EmptyCart,
        DelItem,
        TotalPrice,
        IconCart,
        SetLastOrder,
        GetLastOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
