import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className='flex items-center justify-between px-4 py-2 bg-white fixed top-0 left-0 right-0 z-10 shadow-md'>
        <div className='flex items-center'>
          <Link to='/'>
            <img
              src='/images/logo-black.png'
              alt='Logo'
              className='h-16 w-auto mr-2'
            />
          </Link>
        </div>
        <nav className='space-x-4 hidden md:block'>
          <Link
            to='/'
            className='text-black hover:text-gray-300 transition duration-300'>
            Flytteservice
          </Link>
          <Link
            to='/price'
            className='text-black hover:text-gray-300 transition duration-300'>
            Pristilbud
          </Link>
          <Link
            to='/about'
            className='text-black hover:text-gray-300 transition duration-300'>
            Om oss
          </Link>
          <Link
            to='/contact'
            className='text-black hover:text-gray-300 transition duration-300'>
            Kontakt
          </Link>
        </nav>
        <div onClick={handleNavToggle} className='md:hidden'>
          {isMobileMenuOpen ? (
            <AiOutlineClose size={25} onClick={handleCloseMenu} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'
          onClick={handleCloseMenu}>
          <div className='max-w-md w-full p-6 bg-white rounded-md'>
            <nav className='text-black'>
              <ul className='space-y-4 text-center'>
                <li>
                  <Link
                    to='/'
                    className='block py-2 hover:text-gray-300 transition duration-300'
                    onClick={handleCloseMenu}>
                    Flytteservice
                  </Link>
                </li>
                <li>
                  <Link
                    to='/price'
                    className='block py-2 hover:text-gray-300 transition duration-300'
                    onClick={handleCloseMenu}>
                    Pristilbud
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='block py-2 hover:text-gray-300 transition duration-300'
                    onClick={handleCloseMenu}>
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='block py-2 hover:text-gray-300 transition duration-300'
                    onClick={handleCloseMenu}>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
