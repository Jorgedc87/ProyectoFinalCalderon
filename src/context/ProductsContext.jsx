import { useEffect, useState } from "react";
import { createContext } from "react";
import { getProducts } from "../firebase/firebase";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}