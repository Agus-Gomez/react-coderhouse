import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartList from "../CartList/CartList";
import ContactForm from "./ContactForm/ContactForm";
import { Link } from "react-router-dom";
import Spinner from "../../Images/Spinner/Spinner";
import "./Cart.css";
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
    CartQuantity,
    SetLastOrder,
    GetLastOrder,
  } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  async function generateOrder(data) {
    setLoading(true);
    let order = {};
    order.buyer = {
      name: data.name,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
    };

    order.total = TotalPrice();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.product.id;
      const name = cartItem.product.Name;
      const price = cartItem.product.Price * cartItem.count;
      const quantity = cartItem.count;

      return { id, name, price, quantity };
    });

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    await addDoc(orderCollection, order).then((resp) => SetLastOrder(resp.id));

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
      .finally(() => {
        EmptyCart();
        setLoading(false);
      });

    batch.commit();
  }

  return (
    <>
      {loading ? (
        <>
          <div className="pos-center">
            <Spinner />
          </div>
        </>
      ) : (
        <>
          {GetLastOrder() == "" || !GetLastOrder() ? (
            <>
              {cartList.length < 1 ? (
                <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
                  <h1 className="text-center">Carrito de Compras</h1>
                  <p className="text-empty">El carrito esta Vacío</p>
                  <Link to="../products">
                    <button className="form-button" type="submit">
                      Ver más productos
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="containerFlex">
                    <ContactForm
                      firebaseMethod={generateOrder}
                      totalPrice={TotalPrice()}
                      cartQuantity={CartQuantity()}
                    />

                    <div className="cart-card-container">
                      <button className="delete-all-btn" onClick={EmptyCart}>
                        Borrar todos mis productos
                      </button>
                      <CartList cartList={cartList} />
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {GetLastOrder() && GetLastOrder() !== "" ? (
                <div className="thanks-container">
                  <p className="thanksText">
                    Muchas gracias por tu compra! usa el código debajo para
                    seguir el envío de tu paquete:
                  </p>
                  <p className="orderNumberText">{GetLastOrder()}</p>
                  <Link to="/products">
                    <button className="form-button" type="submit">
                      Ver más productos
                    </button>
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
