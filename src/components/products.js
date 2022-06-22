import ItemListContainer from "./itemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/itemDetailContainer";
const Products = () => {
  return (
    <div>
      <h1>Nuestros productos:</h1>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
};

export default Products;
