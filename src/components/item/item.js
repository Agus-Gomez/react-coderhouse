import { Link } from "react-router-dom"
import './cardItem.css'
const Item = ({prod}) => {
    return (
      <div className="col-md-4 p-1">
        <div className="card w-100 mt-5 product-card">
          <div className="card-header">
            {`${prod.Name} - ${prod.Categories}`}
          </div>
          <div className="card-body">
            <img src={prod.Pic} alt="" className="w-50" />
          </div>
          <div className="card-footer">
            <Link to={`/ItemDetail/${prod.id}`}>
            <button className="btn btn-outline-primary btn-block detallebtn">
              detalle del producto
            </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

export default Item