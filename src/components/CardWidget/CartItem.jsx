import useCartActions from "../../hooks/useCartActions";

const CartItem = ({ item }) => {
  const { handleRemoveItem, handleDecrementQuantity, handleIncrementQuantity } = useCartActions();

  return (
    <li className="flex w-full items-center py-2 border-b text-black">
      <div className="w-1/5 flex justify-center">
        <img
          src={item.img}
          alt={item.name}
          className="w-12 h-12 object-cover"
        />
      </div>
      <span className="w-1/2 flex justify-center ">{item.name}</span>
      <span className="w-1/4 flex items-center justify-center">
        <button
          className="w-6 h-6 flex justify-center items-center bg-red-500 text-white rounded hover:bg-red-400"
          onClick={() => handleDecrementQuantity(item.id)}
        >
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          readOnly
          className="w-10 text-center"
        />
        <button
          className="w-6 h-6 -ml-3 flex justify-center items-center bg-green-500 text-white rounded hover:bg-green-400"
          onClick={() => handleIncrementQuantity(item.id)}
        >
          +
        </button>
      </span>
      <span className="w-1/5 flex justify-center">${item.price}</span>
      <button
        className="w-[26px] h-[22px] pb-[1px] rounded-full flex justify-center items-center bg-red-500 hover:bg-red-400 text-white"
        onClick={() => handleRemoveItem(item.id)}
      >
        x
      </button>
    </li>
  );
};

export default CartItem;
