import ItemCount from "../ItemCount/ItemCount";
import '../item/cardItem.css';
const ItemDetail = ({product}) => {
   
    const onAdd = (count) => {
      alert(`agregaste ${count} productos a tu carrito`)
    };
  
  
  return (
      <div className="col-md-4 p-1">
        <div className="card w-100 mt-5 product-card">
        <div className="card-header">
            {`${product.name} - ${product.category}`}
          </div>
        <div className="card-body">
          <img src={product.pic} alt="" className="w-50" />
        </div>
        <div>
          <div className="units-container">
          <h6 className="units-text">{product.stock} Unidades Disponibles</h6></div>
          <h5>Precio: {product.price}</h5> 
          < ItemCount stock={product.stock} initial ={1} onAdd={onAdd} />
         
        </div>
        </div>
      </div>
    );
};
  export default ItemDetail;