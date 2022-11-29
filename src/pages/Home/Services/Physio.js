import React from 'react';
import physio from '../../../image/physio.png';

const Physio = () => {
  return (
    <div className="bg-gray-800 p-3 md:p-5">
      <h2 className="mt-5 mb-12 text-center font-bold text-4xl text-yellow-500">
        The Physiotherapist
      </h2>
      <div className="bg-gray-800 mt-5 flex pl-3 md:pl-5">
        <div className="text-yellow-500 flex flex-col items-center justify-center text-left">
          <p>
            There are several benefits of a chiropractic adjustment including:
            Helps minimize migraines and neck-related headaches. Improves your
            posture. Reduces pain and improves range of motion of your spine and
            other joints.
          </p>
          <button className="mt-12 p-2 bg-yellow-500 rounded-md border-2 hover:bg-yellow-600 text-white font-medium">
            Book Appointment
          </button>
        </div>
        <img src={physio} alt="" />
      </div>
    </div>
  );
};

export default Physio;
