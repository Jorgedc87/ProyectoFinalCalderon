import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProductById } from "../firebase/firebase";
import { toast } from "sonner";

const useItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(CartContext);

  const handleIncrement = () => {
    if (item && count < item.stock) {
      setCount((prevCount) => prevCount + 1);
    } else {
      toast.error("No puedes agregar más productos de los disponibles en stock.");
    }
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const addItemsToCart = () => {
    if (item && item.stock > 0) {
      if (count <= item.stock) {
        toast.success(`Agregaste ${count} producto(s) al carrito.`);
        addItem(itemId, item, count);

        setItem((prevItem) => ({
          ...prevItem,
          stock: prevItem.stock - count,
        }));

        if (item.stock - count <= 0) {
          toast.error("Producto sin stock o reservado.");
        }
      } else {
        toast.error("No puedes agregar más productos de los disponibles en stock.");
      }
    } else {
      toast.error("Producto sin stock o reservado.");
    }
  };


  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((fetchedItem) => {
        setItem(fetchedItem);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return {
    item,
    count,
    loading,
    handleIncrement,
    handleDecrement,
    addItemsToCart,
  };
};

export default useItemPage;

