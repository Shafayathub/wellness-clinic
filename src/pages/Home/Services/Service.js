import React from 'react';

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="border border-yellow-500 rounded-lg text-white">
      <img className="w-full rounded-lg" src={img} alt="" />

      <div className="p-2 md:p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h3 className="text-lg font-semibold"> price:${price}</h3>
        <p className="my-2  text-justify">{description}</p>
        <button className="p-2 bg-yellow-500 rounded-md border-2 hover:bg-yellow-600 text-white font-medium">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Service;
