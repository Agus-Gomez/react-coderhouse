let productos = [
  {
    id: "1",
    categoria: "Bazar",
    name: "taza con tapa de Gato",
    price: 800,
    foto: "https://cdn.shopify.com/s/files/1/2249/9605/products/4202C8B4-F604-40C3-B86A-B03B4F941D5E_1024x1024@2x.jpg?v=1598365541",
  },
  {
    id: "2",
    categoria: "Bazar",
    name: "taza con tapa de Gato",
    price: 1000,
    foto: "https://cdn.shopify.com/s/files/1/2249/9605/products/4202C8B4-F604-40C3-B86A-B03B4F941D5E_1024x1024@2x.jpg?v=1598365541",
  },
  {
    id: "3",
    categoria: "Bazar",
    name: "taza con tapa de Gato",
    price: 1500,
    foto: "https://cdn.shopify.com/s/files/1/2249/9605/products/4202C8B4-F604-40C3-B86A-B03B4F941D5E_1024x1024@2x.jpg?v=1598365541",
  },
];

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve(productos.find((prod) => prod.id === id));
      } else {
        resolve(productos);
      }
    }, 3000);
  });
};
