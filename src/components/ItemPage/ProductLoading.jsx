import { ClipLoader } from "react-spinners";

export const ProductLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <ClipLoader color="#4CAF50" loading size={60} />
      <p className="mt-4 text-center text-gray-600">Cargando el producto...</p>
    </div>
  );
};
