import React from 'react';
import Error from '../image/404-Error.gif';

const notFound = () => {
  return (
    <div>
      <img className="mx-auto h-screen" src={Error} alt="" />
    </div>
  );
};

export default notFound;
