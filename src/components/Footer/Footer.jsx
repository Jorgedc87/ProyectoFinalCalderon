import { LogoEren, MercadoPago, MODO } from "../../assets/images";

export const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {/* Sección Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src={LogoEren} alt="Logo" className="w-36 mb-2" />
            <p className="text-sm text-gray-400">© 2024 Eren Petshop. <br />Todos los derechos reservados.</p>
          </div>

          {/* Sección Mapa del sitio */}
          <div className="flex flex-col items-center md:items-start text-[#ffffff]">
            <h3 className="text-lg font-bold mb-2">Mapa del sitio</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><a href="/shop/gatos" className="hover:underline">Productos para Gatos</a></li>
              <li><a href="/shop/perros" className="hover:underline">Productos para Perros</a></li>
              <li><a href="/shop/peces" className="hover:underline">Productos para Peces</a></li>
              <li><a href="/envios" className="hover:underline">Envíos Gratis</a></li>
            </ul>
          </div>

          {/* Sección Logos de medios de pago */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-4 drop-shadow-xl">
              <img src={MercadoPago} alt="Mercado Pago Logo" className="w-12 h-12 object-contain" />
              <img src={MODO} alt="MODO Logo" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
