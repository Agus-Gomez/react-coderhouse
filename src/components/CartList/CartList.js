import CartItem from "../cart/CartItem";

const CartList = ({ cartList }) => {
  return cartList.map((i) => <CartItem
  key={i.product.id}
  product={i.product}
  count={i.count}
/>);
};

export default CartList;