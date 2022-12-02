import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SelectedService = () => {
  const { serviceID } = useParams();

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h3>{serviceID}</h3>
        <Link to="/checkout">
          <button className="p-2 bg-gray-500 rounded-md border-2 hover:bg-yellow-500 text-white font-medium my-5">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SelectedService;
