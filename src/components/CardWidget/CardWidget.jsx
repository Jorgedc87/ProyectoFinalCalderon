import { useContext } from "react";
import { ImCart } from "react-icons/im";
import { CartContext } from "../../context/CartContext";

export const CardWidget  = ({handleOpen}) => {
  const {items} = useContext(CartContext);
  const totalItems = items.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <div className="flex items-center relative">
      <span 
        className='bg-green-500 p-3 rounded-full drop-shadow-md cursor-pointer hover:bg-green-400 transition-all delay-2'
        onClick={handleOpen}
      >
      <ImCart  />
      </span>
      <span className='bg-red-500 p-2 rounded-full drop-shadow-md absolute bottom-0 -right-1 text-[7px] h-[20px] flex items-center'>
        {totalItems}               
      </span>
    </div>
  )
}
