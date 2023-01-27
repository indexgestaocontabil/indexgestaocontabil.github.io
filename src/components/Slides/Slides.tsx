import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './slides.scss';

type PropsType = {
  slides: JSX.Element[];
};

const Slides = ({ slides }: PropsType) => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="swiper-wrapper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides;
