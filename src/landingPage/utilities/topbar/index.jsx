import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/Logo.svg'

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" bg-opacity-50 backdrop-filter backdrop-blur-lg py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" style={{ width: "110px"}} />
      </div>

      {/* Center items */}
      <div className="hidden md:flex items-center justify-center">
        <a href="#" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">Plataforma</a>
        <a href="#" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">Seu Perfil</a>
        <a href="#" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">Sobre Nós</a>
      </div>

      {/* Right items */}
      <div className="flex items-center">
        {/* Menu icon for mobile */}
        <div className="md:hidden mr-4">
          <MenuIcon className="text-white cursor-pointer" onClick={toggleMenu} />
        </div>
        <button className="hidden md:block text-white text-lg px-4 py-2 mr-4 bg-blue-500 hover:bg-blue-600 rounded">Login</button>
        <div className="relative">
          <AccountCircleIcon className="hidden md:block rounded-full cursor-pointer" style={{ fontSize: "33px" }} />
          {/* Profile icon in menu for mobile */}
          {showMenu && (
            <div className="absolute right-0 mt-10 bg-gray-800 py-2 px-4 rounded shadow-lg w-48">
              <a href="#" className="block text-white py-1 px-2 hover:bg-gray-700 rounded">Item 1</a>
              <a href="#" className="block text-white py-1 px-2 hover:bg-gray-700 rounded">Item 2</a>
              <a href="#" className="block text-white py-1 px-2 hover:bg-gray-700 rounded">Item 3</a>
              <hr className="my-2 border-gray-700" />
              <button className="block text-white py-1 px-2 hover:bg-gray-700 rounded w-full">Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
