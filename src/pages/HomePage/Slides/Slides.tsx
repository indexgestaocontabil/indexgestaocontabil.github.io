import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './slides.scss';

const Slides = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="swiper-wrapper"
    >
      <SwiperSlide>
        <img src="/hero-bg/about-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-bg/about-2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-bg/services-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-bg/services-2.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
