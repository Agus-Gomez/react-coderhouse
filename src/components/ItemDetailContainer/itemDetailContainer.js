import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../Fetch/Fetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const { id } = useParams()


  useEffect(() => {
    getFetch(id)
      .then((resp) => setProduct(resp))
      .catch((err) => setProduct(err));
  }, );


  return <ItemDetail product={product}/>;
};
export default ItemDetailContainer;
