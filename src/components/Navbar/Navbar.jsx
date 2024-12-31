import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/eren-logo.webp';
import { CardWidget } from '../CardWidget/CardWidget';
import CartModal from '../CardWidget/CartModal';
import { useState, useEffect, useRef } from 'react';

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setIsMenuOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const closeMenuOnLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav ref={navbarRef} className="bg-gray-800 text-white p-4 font-montserrat">
        <div className="flex justify-between items-center container mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to={"/"} className="text-2xl font-bold">
              <img
                src={logo}
                alt="logo"
                className="h-12"
              />
            </NavLink>
          </div>

          {/* Menú hamburguesa en dispositivos mobiles */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl"
            >
              ☰
            </button>
          </div>

          {/* Menú web */}
          <div className="hidden lg:flex space-x-12 items-center">
            <NavLink to='/envios' className="border-b-2 border-white border px-5 py-2 transition-all delay-25 hover:bg-gray-700 cursor-pointer">
              <span className='text-xl mr-3'>🏍</span> Envios gratis
            </NavLink>

            <div className='flex space-x-16'>
              <NavLink 
                to={"/shop/gatos"} 
                className="border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25"
              >
                Gatos
              </NavLink>
              <NavLink 
                to={"/shop/perros"} 
                className="border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25"
              >
                Perros
              </NavLink>
              <NavLink 
                to={"/shop/peces"} 
                className="border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25"
              >
                Peces
              </NavLink>
            </div>
          </div>

          {/* Cart Widget */}
          <CardWidget handleOpen={handleCartClick} />
        </div>

        {/* Menú mobile desplegable */}
        <div 
          ref={menuRef}
          className={`lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4 mt-2 space-y-4 transform transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'max-h-screen' : 'hidden max-h-0 overflow-hidden'}`}
        >
          <NavLink 
            to='/envios' 
            onClick={closeMenuOnLinkClick}
            className="text-xl border-b-2 border-white px-5 py-2 transition-all delay-25 hover:bg-gray-700 cursor-pointer"
          >
            <span className='mr-3'>🏍</span> Envios gratis
          </NavLink>
          <div className='flex flex-col space-y-4'>
            <NavLink 
              to={"/shop/gatos"} 
              onClick={closeMenuOnLinkClick}
              className="text-xl border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25"
            >
              Gatos
            </NavLink>
            <NavLink 
              to={"/shop/perros"} 
              onClick={closeMenuOnLinkClick}
              className="text-xl border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25"
            >
              Perros
            </NavLink>
            <NavLink 
              to={"/shop/peces"} 
              onClick={closeMenuOnLinkClick} 
              className="text-xl border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25"
            >
              Peces
            </NavLink>
          </div>
        </div>

        {/* Cart Modal */}
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </nav>
    </>
  );
};
