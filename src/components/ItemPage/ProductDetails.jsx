import { ItemCount } from './ItemCount.jsx';

export const ProductDetails = ({
  item,
  count,
  handleIncrement,
  handleDecrement,
  addItemsToCart,
}) => {
  return (
    <div className="lg:max-w-full">
      <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
      <p className="mt-2 text-gray-600">{item.description}</p>

      {/* Contenedor de precio */}
      <div className="mt-4">
        <p className="text-gray-500 line-through text-lg">${Math.floor(item.price * 1.1)}</p>
        <p className="text-2xl font-bold text-green-600">${item.price}</p>
      </div>

      {/* Stock disponible */}
      <div className="mt-4">
        <p className="text-gray-600 text-sm">Stock disponible: {item.stock}</p>
      </div>

      {/* Selector de cantidad */}
      <ItemCount
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        stock={item.stock}
      />

      {/* Botón de compra */}
      {item.stock > 0 ? (
        <button
          className="mt-6 w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition"
          onClick={addItemsToCart}
        >
          Agregar al carrito
        </button>
      ) : (
        <div className="mt-6 w-full bg-red-500 text-white font-bold py-2 rounded-lg text-center">
          Sin stock
        </div>
      )}
    </div>
  );
};
