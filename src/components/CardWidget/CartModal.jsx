import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartForm from "./CartForm";
import CartTotal from "./CartTotal";
import useCartActions from "../../hooks/useCartActions";
import { ClipLoader } from "react-spinners";

const CartModal = ({ isOpen, onClose }) => {
  const { items, clearButton } = useContext(CartContext);
  const {
    handleRemoveItem,
    handleDecrementQuantity,
    handleIncrementQuantity,
    handleFormSubmit,
    loading,
    orderId, 
    setOrderId
  } = useCartActions();
  const [showForm, setShowForm] = useState(false);

  const handleCloseModal = () => {
    setOrderId(null);
    onClose();
    setShowForm(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-montserrat">
      <div className="relative bg-white p-4 rounded-lg w-3/4 max-w-lg">
        <button
          className="absolute top-2 right-8 text-black hover:text-gray-700 text-3xl"
          onClick={handleCloseModal}
        >
          ×
        </button>

        {loading ? ( 
          <div className="flex flex-col items-center">
            <ClipLoader color="#4CAF50" loading={loading} size={60} />
            <p className="mt-4 text-center text-gray-600">
              Procesando tu orden...
            </p>
          </div>
        ) : orderId ? (
          <>
            <h2 className="text-xl mb-4 text-center text-green-500 font-bold">¡Proceso completado!</h2>
            <p className="text-center text-green-500">
              ¡Tu compra fue confirmada! 
            </p>
            <p className="text-center text-green-500 mt-4">
              El ID de tu compra es: <br /><strong>{orderId}</strong>.
            </p>
          </>
        ) : items.length === 0 ? (
          <p className="text-center text-black">El carrito está vacío.</p>
        ) : (
          <>
            <h2 className="text-xl mb-4 text-center text-black">Tu carrito</h2>
            <ul>
              {!showForm && items.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    handleRemoveItem={handleRemoveItem}
                    handleDecrementQuantity={handleDecrementQuantity}
                    handleIncrementQuantity={handleIncrementQuantity}
                  />
              ))}
            </ul>

            <CartTotal items={items} />

            {!showForm && (
              <div className="mt-4 flex justify-center gap-5">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={clearButton}
                >
                  Vaciar
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => setShowForm(true)}
                >
                  Continuar
                </button>
              </div>
            )}

            {showForm && <CartForm onSubmit={handleFormSubmit} />}
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
