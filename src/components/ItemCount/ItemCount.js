import './ItemCount.css'
import React,{useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const [show, setShow] = useState(true);

    const decrease = () => {
        setCount(count - 1);
    }
    
    const increase = () => {
        setCount(count + 1);
    }

    const addProduct = () => {
        onAdd(count)
    }

//-- la cantidad de productos agregados al carrito se ve por consola --
    if (show&&stock>0) {
    return (
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <=0} onClick={addProduct}>Agregar al carrito</button>
            </div>
        </div>
    )}

    if(stock===0) {
        return (
            <p>Sin unidades disponibles</p>
        )
    }

    if (!show && stock>0) {
        return (
            <link to="../cart/cart.js"><button>Ir al carrito</button></link>
        )
    }
}

export default ItemCount;