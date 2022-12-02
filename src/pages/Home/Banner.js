import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../../image/banner/Chiropractic.jpg';
import banner2 from '../../image/banner/physical-therapy.jpg';
import banner3 from '../../image/banner/pain-stress.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
