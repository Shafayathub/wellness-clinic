import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import pay from '../../image/E-Wallet.gif';

const Checkout = () => {
  const startTheLoop = () => {
    toast('Appoinment Confirmed');
  };
  return (
    <form onSubmit={startTheLoop} className="text-gray-600 h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center justify-center w-full mb-12">
          <img className="w-1/5" src={pay} alt="One touch Payment" />
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative flex-grow w-full">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Addess
            </label>
            <input
              type="text"
              id="Addess"
              name="Addess"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative flex-grow w-full">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <input
          type="submit"
          className="mt-5 text-white bg-yellow-500 border-0 py-2 px-8
        focus:outline-none hover:bg-yellow-600 rounded text-lg"
        />
        <ToastContainer></ToastContainer>
      </div>
    </form>
  );
};

export default Checkout;
