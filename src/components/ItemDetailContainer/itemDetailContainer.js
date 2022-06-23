import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../Fetch/Fetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);   
  const { id } = useParams();

  useEffect(() => {
    getFetch(id)
      .then((resp) => {
         setProduct(resp)
         setLoading(false)})
      .catch((err) => setProduct(err));
  });

  return (
    <div>
      {loading ? (
        <h1>Cargando información del producto ...</h1>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ItemDetail product={product} />{" "}
        </div>
      )}
    </div>
  );
};
export default ItemDetailContainer;
