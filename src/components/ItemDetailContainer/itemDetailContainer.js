import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetchOne } from "../Fetch/Fetch";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    getFetchOne()
      .then((resp) => setProduct(resp))
      .catch((err) => setProduct(err));
  }, []);


  return <ItemDetail product={product}/>;
};
export default ItemDetailContainer;
