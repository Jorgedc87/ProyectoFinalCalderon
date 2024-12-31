import { ClipLoader } from "react-spinners";
import { ItemList } from "../ItemList";

export const ProductsSection = ({ products, loading }) => {
  if(loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-5">
      <ClipLoader color="#4CAF50" loading={loading} size={60} />
      <p className="mt-4 text-center text-gray-600">
        Cargando los productos...
      </p>
    </div>
    );
  }

  return (
    <section className="container mt-12 max-w-[1000px] mx-auto" id="productos">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
      <p className="text-gray-600 mb-6">Descubre los mejores productos para tus mascotas.</p>
      <ItemList items={products} loading={loading} />
    </section>
  );
};
