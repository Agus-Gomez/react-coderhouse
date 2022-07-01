import { createContext, useContext, useState } from "react";

//Creo el contexto y lo guardo en la variable CartContext.
export const CartContext = createContext([]); //revisar por qué se rompe al sacar el export.

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);

  const AddToCart = (product, count) => {

    let prevCart = [...cartList];

    if (prevCart.some((i)=> i.product.id === product.id))
        {
        prevCart.find((i)=> i.product.id === product.id).count += count;
        setCartList(prevCart);
        } else {
          setCartList([...cartList, {product, count}]);
        }
  };

  //borrar 1 item del carrito
const DelItem = (id) => {
    const items = cartList.filter((i)=>i.product.id !== id)
    setCartList(items)
    return 
}


const TotalPrice = () => {
    return cartList.reduce((acum, i) => acum + i.count * i.product.Price, 0)
}

//borrar el carrito entero
const EmptyCart = () => {
    setCartList ([])
}
//para que no supere el stock al agregar al carrito.
  const IsInCart = (id) => {
    return cartList && cartList.some((i) => i.product.id === id && i.product.stock === i.count);
  };

  const IconCart = () => cartList.reduce((acum, i)=> acum + i.count, 0);


  return (
    <CartContext.Provider
    value={{ 
      AddToCart, 
      cartList, 
      EmptyCart, 
      DelItem, 
      TotalPrice, 
      IconCart }}
      >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
