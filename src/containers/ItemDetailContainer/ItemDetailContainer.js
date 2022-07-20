import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import  Spinner  from "../../Images/Spinner/Spinner";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const [bool] = useState(true);

  
  const { id } = useParams();


  useEffect(() => {
      const db = getFirestore()
      const queryItem = doc(db, 'Products', id)
      getDoc(queryItem) //promesa
     .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
     .catch(err => console.log(err))
     .finally(() => setLoading(false))
    }, [bool])


  return (
    <div>
      
      {loading ? (
        <>
        <div className="pos-center">
      <Spinner />
    </div>
        </>
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
