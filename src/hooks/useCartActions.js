import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { saveOrder, updateStock } from "../firebase/firebase";
import { toast } from "sonner";

const useCartActions = () => {
  const { items, removeItem, removeOneItem, addOneItem, clear } = useContext(CartContext);
  const { products } = useContext(ProductsContext); 
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleRemoveItem = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    removeItem(itemId);
    toast.error(`Se eliminó ${item.name} del carrito.`);
  };

  const handleDecrementQuantity = (itemId) => {
    removeOneItem(itemId);
  };

  const handleIncrementQuantity = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    const product = products.find((product) => product.id === itemId);

    if (item && product && item.quantity < product.stock) {
      addOneItem(itemId);
    } else {
      toast.error("No puedes agregar más productos de los que hay en stock.");
    }
  };

  const handleFormSubmit = (data) => {
    const today = new Date().toISOString();
  
    const itemsOrder = items.map(item => ({
      name: item.name,
      quantity: item.quantity,
      total: item.quantity * item.price
    }));
  
    const total = itemsOrder.reduce((acc, item) => acc + item.total, 0);
  
    const order = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email
      },
      date: today,
      items: itemsOrder,
      total: total
    };
  
    setLoading(true);
    saveOrder(order)
      .then((id) => {
        items.forEach(item => {
          updateStock(item.id, item.quantity);
        });
        setOrderId(id);
        clear();
      })
      .catch((error) => {
        console.error("Error al guardar la orden:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { 
    handleRemoveItem, 
    handleDecrementQuantity,
    handleIncrementQuantity, 
    handleFormSubmit,
    loading,
    orderId,
    setOrderId
   };
};

export default useCartActions;
