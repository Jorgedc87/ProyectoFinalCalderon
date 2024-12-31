import { useState } from "react";
import { createContext } from "react";
import { toast } from "sonner";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Agregar un item al carrito
  const addItem = (id, item, count) => {
    setItems((prevItems) => {
      // Buscar si el ítem ya está en el carrito
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === id);
  
      if (existingItemIndex !== -1) {
        // Si el ítem ya existe, actualizar su cantidad
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 0) + count,
        };
        return updatedItems;
      }
  
      // Si no existe, agregarlo con una propiedad "quantity"
      return [...prevItems, { ...item, id, quantity: count }];
    });
  };

  // Eliminar un item del carrito
  const removeItem = (itemId) => {
    console.log("Removing item", itemId);
    setItems(items.filter((item) => item.id !== itemId));
  };

  // Agregar +1 item al carrito desde input del cartModal
  const addOneItem = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  }

  // Restar -1 item al carrito desde input del cartModal (si solo queda 1, se elimina)
  const removeOneItem = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        if (item.quantity === 1) {
          return null;
        }
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setItems(updatedItems.filter((item) => item !== null));
  }
  
  // Resetear el carrito al comprar
  const clear = () => {
    setItems([]);
  };

  // Resetear el carrito por botón
  const clearButton = () => {
    setItems([]);
    toast.error("Se eliminaron todos los productos del carrito.");
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, removeOneItem, addOneItem, clear, clearButton }}>
      {children}
    </CartContext.Provider>
  );
}