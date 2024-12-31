import { Banner } from "../../assets/images";

export const BannerSection = () => {
  return (
    <div className="relative w-full h-[400px] shadow-lg overflow-hidden">
      {/* Imagen como fondo */}
      <img 
        src={Banner} 
        alt="Banner" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">¡Bienvenidos a Nuestra Tienda!</h1>
        <p className="mt-2 text-lg">Los mejores productos para tus mascotas, con envíos a todo el país.</p>
        <a href="#productos" className="mt-4 px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
          Explorar Productos
        </a>
      </div>
    </div>
  );
};
