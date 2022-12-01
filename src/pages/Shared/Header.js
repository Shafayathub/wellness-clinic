import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/wellness-clinic.png';

const Header = () => {
  return (
    <header className="font-semibold lg:sticky lg:top-0 z-10 bg-slate-800 text-yellow-400">
      <div className="container mx-auto flex p-3 flex-col md:flex-row items-center">
        <Link to="/">
          <img className="h-16" src={logo} alt="" />
        </Link>

        <nav className="text-lg md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-5 lg:space-x-8">
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
        <button className="inline-flex items-center bg-gray-500  border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">
          <Link to="/login">Register/Login</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
