import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './slides.scss';

function Slides() {
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
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slides;
