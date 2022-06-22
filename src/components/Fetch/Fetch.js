let products = [
  {
    id: "1",
    category: "Bazar",
    name: "taza con tapa de Gato",
    stock: "3",
    price: 800,
    pic: "https://cdn.shopify.com/s/files/1/2249/9605/products/4202C8B4-F604-40C3-B86A-B03B4F941D5E_1024x1024@2x.jpg?v=1598365541",
  },
  {
    id: "2",
    category: "Bazar",
    name: "taza con tapa de Gato",
    stock: "2",
    price: 1000,
    pic: "https://cdn.shopify.com/s/files/1/2249/9605/products/4202C8B4-F604-40C3-B86A-B03B4F941D5E_1024x1024@2x.jpg?v=1598365541",
  },
  {
    id: "3",
    category: "Bazar",
    name: "taza con tapa de Gato",
    stock: "5",
    price: 1500,
    pic: "https://cdn.shopify.com/s/files/1/2249/9605/products/4202C8B4-F604-40C3-B86A-B03B4F941D5E_1024x1024@2x.jpg?v=1598365541",
  },
];

export const getFetch = (id) => {
  //acciones
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve(products.find((prod) => prod.id === id));
      } else {
        resolve(products);
      }
    }, 3000);
  });
};

export const getFetchOne = () => {
  //acciones
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products.find((prod) => prod.id === '1'));
    }, 3000);
  });
};

