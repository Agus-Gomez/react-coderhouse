const ItemDetail = ({product}) => {
    return (
      <div className="row">
        <div className="col-md-6">
          <img src={product.pic} alt="" className="w-100" />
        </div>
        <div className="col-md-6">
          <h2>Nombre: {product.name}</h2>
          <h3>Categoria: {product.category}</h3>
          <h4>Precio: {product.price}</h4>
        </div>
      </div>
    );
  };

  export default ItemDetail