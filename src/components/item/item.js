import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ prod }) => {
  return (
    <div className="cardItem mt-5 mb-2">
      <div className="card-header">{`${prod.Name}`}</div>
      <div className="card-body">
        <img src={prod.Pic} alt="" />
      </div>
      <div className="card-footer">
        <Link to={`/ItemDetail/${prod.id}`}>
          <button>detalle del producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
