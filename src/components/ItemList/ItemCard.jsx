import { Link } from "react-router-dom";

export const ItemCard = ({ item }) => {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg flex flex-col items-center bg-white">
      <div className="w-[160px] h-[160px] flex justify-center p-2">
        <img className="h-full" src={item.img} alt={item.name} />
      </div>
      <div className="px-6 py-4 flex flex-col items-center justify-center p-2">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base h-[50px] text-center">{item.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {item.contain}kg
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          $ {item.price}
        </span>
      </div>
      <div className="px-6 py-4 flex gap-2">
        <Link
          to={`/item/${item.id}`}
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
            item.stock === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          Ver
        </Link>
        <div
          className={`${
            item.stock === 0 ? "bg-red-500" : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold px-4 rounded text-center`}
        >
          {item.stock === 0 ? (
            <p className="text-[8px] mt-1 -mb-1">Sin Stock</p>
          ) : (
            <>
              <p className="text-[8px] mt-1 -mb-1">Stock</p>
              <span>{item.stock}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
