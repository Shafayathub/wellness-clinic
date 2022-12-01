import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/wellness-clinic.png';

const Header = () => {
  return (
    <header className="bg-yellow-400 text-gray-800 font-semibold lg:sticky lg:top-0 z-10 dark:bg-slate-800 dark:text-yellow-400">
      <div className="container mx-auto flex p-3 flex-col md:flex-row items-center">
        <Link to="/">
          <img className="h-16" src={logo} alt="" />
        </Link>

        <nav className="text-lg md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-5">
          <Link className="hover:text-yellow-700" to="/services">
            Services
          </Link>
          <Link className="hover:text-yellow-700" to="/blog">
            Blog
          </Link>
          <Link className="hover:text-yellow-700" to="/about">
            About
          </Link>
        </nav>
        <button class="inline-flex items-center bg-gray-100 dark:bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 dark:hover:bg-slate-600 rounded text-base mt-4 md:mt-0">
          Register/Login
        </button>
      </div>
    </header>
  );
};

export default Header;
