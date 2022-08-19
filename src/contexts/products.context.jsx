import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  // store an array of products
  products: [],
  // some function that allows us to set those products.
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  //export out the value, which is the products
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
