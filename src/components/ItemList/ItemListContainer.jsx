import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../firebase/firebase";
import { ItemList } from "./ItemList";
import { ClipLoader } from "react-spinners";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [ products, setProducts ] = useState(null); 
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    getProductsByCategory(category)
      .then((products) => {
        setProducts(products);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <ClipLoader color="#4CAF50" loading={loading} size={60} />
          <p className="mt-4 text-center text-gray-600">
            Cargando los productos...
          </p>
        </div>
      ) : (
        <ItemList items={products} />
      )}
    </div>
  )
}
