import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Spinner from "../../Images/Spinner/Spinner.js";
import ItemList from "../../components/itemList/itemList";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriesId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "Products");
    let finalQuery = queryCollection;
    if (categoriesId) {
      finalQuery = query(
        queryCollection,
        where("Categories", "==", categoriesId)
      );
    }

    getDocs(finalQuery)
      .then((data) =>
        setProducts(data.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="cardsProducts">
      {loading ? (
        <>
            <div className="pos-center">
              <Spinner />
            </div>
        </>
      ) : (
        
          <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
