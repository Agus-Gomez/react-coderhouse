import { useEffect, useState } from "react";
import ItemList from "./itemList/itemList";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

const { categoriesId } = useParams()

useEffect(() => {
  const db = getFirestore()
  const queryCollection = collection(db, 'Products')
  let finalQuery = queryCollection;
  if (categoriesId) {
    finalQuery = query(queryCollection, where('Categories', '==', categoriesId))
  }
  
  
  getDocs(finalQuery)
  .then( data => setProducts( data.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
}, [])
  return (
    <div>
      {loading ? (
        <h1>Cargando productos...</h1>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ItemList products={products} />
         
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
