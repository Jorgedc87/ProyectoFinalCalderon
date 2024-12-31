import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4 bg-gray-100 text-center px-4">

      {/* Título del error */}
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mb-8">
        Oops... La página que buscas no existe.
      </h2>

      {/* Mensaje amigable */}
      <p className="text-gray-500 mb-8">
        Es posible que la URL esté incorrecta o la página haya sido movida.
      </p>

      {/* Botón para regresar al inicio */}
      <Link to="/">
        <button className="px-6 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-green-600 transition">
          Regresar al Inicio
        </button>
      </Link>
    </div>
  );
};
