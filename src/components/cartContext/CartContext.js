import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const AddToCart = (product, count) => {
    if (IsInCart(product.id)) {
      alert("El producto ya se encuentra en el carrito");
    } else {
      setCartList([...cartList, { product, count }]);
      alert("Se ha agregado el producto correctamente");
    }
  };

const DelItem = (id) => {
    const items = cartList.filter((i)=>i.product.id !== id)
    setCartList(items)
    return 
}

const IconCart = () => {
    return cartList.reduce((acum, i)=> acum + i.count, 0)
}


const TotalPrice = () => {
    return cartList.reduce((acum, i) => acum + i.count * i.product.price, 0)
}




const EmptyCart = () => {
    setCartList ([])
}

  const IsInCart = (id) => {
    return cartList && cartList.some((i) => i.product.id === id);
  };

  return (
    <CartContext.Provider value={{ AddToCart, cartList, EmptyCart, DelItem, TotalPrice, IconCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
