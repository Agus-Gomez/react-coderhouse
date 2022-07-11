import { useContext, useState } from "react";
import { CartContext } from "../cartContext/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

const Cart = () => {
  const {
    cartList,
    EmptyCart,
    TotalPrice,
    IconCart,
    SetLastOrder,
    GetLastOrder,
  } = useContext(CartContext);

  async function generateOrder(e) {
    e.preventDefault();
    let order = {};
    order.buyer = { name: "Agus", email: "agus@gmail.com", phone: "123456789" };
    order.total = TotalPrice();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.product.id;
      const name = cartItem.product.Name;
      const price = cartItem.product.Price * cartItem.count;

      return { id, name, price };
    });

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((resp) => SetLastOrder(resp.id)); //modificar este console.log para que traiga toda la info del cliente

    const queryCollectionStock = collection(db, "Products");

    const queryUpdateStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.product.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            Stock:
              res.data().Stock -
              cartList.find((item) => item.product.id === res.id).count,
          })
        )
      )
      .finally(() => EmptyCart());

    batch.commit();
  }

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
        <>
          {cartList.map((i) => (
            <CartItem key={i.product.id} product={i.product} />
          ))}

          <button onClick={EmptyCart}>Borrar mis productos</button>

          <p>El precio total de tus productos es: {TotalPrice()}</p>
          <p>La cantidad total del carrito es {IconCart()}</p>

          <div>
            <button onClick={generateOrder}>Terminar Compra</button>
          </div>
        </>
      )}

      {GetLastOrder() && GetLastOrder() !== "" ? (
        <div>
          <h1>
            Muchas gracias por tu compra! usa el código debajo para seguir el
            envío de tu paquete:
          </h1>
          <p>{GetLastOrder()}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
