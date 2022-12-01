import React from 'react';
import developer from '../../../image/shafayat.png';

const About = () => {
  return (
    <div className="bg-gray-800 p-3 md:p-5">
      <h2 className="mt-5 text-center font-bold text-4xl text-yellow-500">
        MD Shafayat Islam
      </h2>
      <div className="bg-gray-800 mt-5 flex pl-3 md:pl-5">
        <div className="text-yellow-500 flex flex-col items-center justify-center text-left">
          <p>
            Greetings, I'm MD Shafayat Islam from Bangladesh. Currently, I'm
            doing my Bachelor's degree in Mathematics at Rajshahi college and
            learning Full stack Web development with the Programming Hero
            community.
          </p>
          <button className="mt-12 p-2 bg-yellow-500 rounded-md border-2 hover:bg-yellow-600 text-white font-medium">
            <a
              href="https://www.linkedin.com/in/md-shafayat-islam-97000110b/"
              rel="noopener noreferrer"
              target="_blank">
              Contact
            </a>
          </button>
        </div>
        <img className="w-1/2" src={developer} alt="" />
      </div>
    </div>
  );
};

export default About;
