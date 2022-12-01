import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from './Service';

const Services = () => {
  const [services] = useServices();
  return (
    <div className="p-3 bg-slate-800">
      <h2 className="mt-5 mb-12 text-center font-bold text-4xl text-yellow-500">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
