export const ItemCount = ({
  count,
  handleIncrement,
  handleDecrement,
  stock,
}) => {
  return (
    <div className="flex items-center mt-6">
      <button
        className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300"
        onClick={handleDecrement}
        disabled={count === 0}
      >
        -
      </button>
      <span className="px-4 py-1 bg-gray-100">{count}</span>
      <button
        className={`px-3 py-1 ${
          count < stock ? "bg-gray-200 hover:bg-gray-300" : "bg-gray-400 cursor-not-allowed"
        } rounded-r-lg`}
        onClick={handleIncrement}
        disabled={count >= stock}
      >
        +
      </button>
    </div>
  );
};
