import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  // store an array of products
  products: [],
  // some function that allows us to set those products.
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // add JSON object to the db.
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  // only run this once, ever.

  useEffect(() => {
    // any async things needed in useEffect, wrap it in an async-function.
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
    };
    // invoke the method
    getCategoriesMap();
  }, []);

  //export out the value, which is the products
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
