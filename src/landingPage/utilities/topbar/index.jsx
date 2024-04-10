import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/Logo.svg'

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50 border-b border-gray-300/10">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" style={{ width: "80px"}} />
      </div>

      {/* Center items */}
      <div className="hidden md:flex items-center justify-center">
        <a href="/" className="text-white text-lg px-4 py-2 hover:bg-blue-700 rounded">Plataforma</a>
        <a href="/form" className="text-white text-lg px-4 py-2 hover:bg-pink-700 rounded">Seu Perfil</a>
        <a href="/about" className="text-white text-lg px-4 py-2 hover:bg-red-700 rounded">Sobre Nós</a>
        <a href="/pricing" className="text-white text-lg px-4 py-2 hover:bg-green-700 rounded">Planos</a>
      </div>

      {/* Right items */}
      <div className="flex items-center">
        {/* Menu icon for mobile */}
        <div className="md:hidden mr-4">
          <MenuIcon className="text-white cursor-pointer" onClick={toggleMenu} />
        </div>
        <Link to="/login">
        <button className="hidden md:block text-white text-lg px-4 py-2 mr-4 bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl">Login</button>
        </Link>
        <div className="relative">
        <Link to="/login">
        <button className="hidden md:block text-white text-lg px-4 py-2 mr-4 border border-white/40 bg-transparent rounded-xl">Sign Up</button>
        </Link>
          {/* Profile icon in menu for mobile */}
          {showMenu && (
            <div className="absolute right-0 mt-10 bg-slate-900 py-2 px-4 rounded shadow-lg w-48">
              <a href="/" className="block text-white py-1 px-2 hover:bg-gray-700 rounded">Plataforma</a>
              <a href="form" className="block text-white py-1 px-2 hover:bg-gray-700 rounded">Seu Perfil</a>
              <a href="about" className="block text-white py-1 px-2 hover:bg-gray-700 rounded">Sobre Nós</a>
              <hr className="my-2 border-gray-700" />
              <Link to="/login">
              <button className="block text-white py-1 px-2 hover:bg-gray-700 rounded w-full">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
