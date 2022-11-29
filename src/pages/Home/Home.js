import React from 'react';
import Banner from './Banner';
import Physio from './Services/Physio';
import Services from './Services/Services';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Physio></Physio>
    </>
  );
};

export default Home;
