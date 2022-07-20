import { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactForm.css";

const ContactForm = ({firebaseMethod, totalPrice, cartQuantity}) => {

  const [data, setData] = useState ({name: '', lastName: '', phone:'', email: '', emailConfirmation: ''})

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  async function sendData(event) {
    event.preventDefault()
    firebaseMethod(data)
  }

  return (
    <>
      <div className="form-container">
        <div className="form__name">DETALLES DE FACTURACIÓN</div>
        <div className="form__container">
          <div className="form__personal">
            <div className="sections">
              <div className="box">🐈‍⬛</div>
              <span>Información Personal:</span>
            </div>
            <div className="personal--form">
              <form className="form--name" onSubmit={sendData}>
                <div className="first">
                  <label htmlFor="firstname">Nombre:</label>
                  <input placeholder="Fede.F" id="firstname" type="text" required onChange={handleInputChange} name="name"
                  />
                </div>
                <div className="last">
                  <label htmlFor="lastname">Apellido:</label>
                  <input placeholder="Osandon" id="lastname" type="text" required onChange={handleInputChange} name="lastName" />
                </div>

                <div className="phone-number">
                  <label htmlFor="phone-number">Celular:</label>
                  <input placeholder="011-555-2368-00" id="phone" type="text" required onChange={handleInputChange} name="phone" />
                </div>

                <div className="email">
                  <label htmlFor="firstname">Correo:</label>
                  <input placeholder="F.Osandon@profe.com" id="email" type="email" required onChange={handleInputChange} name="email" />
                </div>
                <div className="email">
                  <label htmlFor="firstname">Confirma tu correo:</label>
                  <input placeholder="F.Osandon@profe.com" id="email-confirmation" type="email" required onChange={handleInputChange} name="emailConfirmation" />
                </div> 

                <div className="cartTextContainer">
                <p>El precio total de tus productos es : $ {totalPrice}</p>
                <p>La cantidad total del carrito es : {cartQuantity}</p>
              </div>

                <button className="form-button" type="submit">Terminar compra</button>
                <Link to="../products">
                <button className="form-button" type="submit">Ver más productos</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
