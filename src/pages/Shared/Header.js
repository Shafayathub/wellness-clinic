import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/wellness-clinic.png';

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
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
        {/* Showing User name and Photo */}
        <span className="mr-1">
          {user && (
            <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
          )}
        </span>
        <span className="m-2">{user && <p>{user?.displayName}</p>}</span>

        {user?.uid ? (
          <Link
            className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0"
            onClick={() => signOut(auth)}
            to="/">
            LogOut
          </Link>
        ) : (
          <Link
            className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0"
            to="/login">
            Register/Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
