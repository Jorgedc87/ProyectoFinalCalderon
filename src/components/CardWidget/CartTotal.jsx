const CartTotal = ({ items }) => {
  const total = items.reduce((total, item) => total + item.quantity * item.price, 0);
  
  return (
    <div className="px-4 py-4 flex justify-between bg-slate-200 text-black">
      <span className="w-3/5 flex justify-center">Total:</span>
      <span className="w-3/5 flex justify-center">${total}</span>
    </div>
  );
};

export default CartTotal;
