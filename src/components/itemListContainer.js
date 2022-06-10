import { useEffect, useState } from "react";
import ItemList from "./itemList/itemList"
import { getFetch } from "./Fetch/Fetch";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)   
 
  useEffect(()=>{
    // llamo a la api
      getFetch()
      .then((resp)=> {
              setProducts(resp)
              setLoading(false)
      })
      .catch(err => console.log(err))
    
  }, [])


  
  return (
    <div>
        { loading ? 
            <h1>Cargando productos...</h1>            
        :   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                  <ItemList products={products} />                   
            </div>             
        }
    </div>
)
}

export default ItemListContainer;
