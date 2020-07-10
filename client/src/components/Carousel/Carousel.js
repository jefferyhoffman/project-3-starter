import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const Carousel = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={3}
      onSlideChange={() => console.log('slide change')} 
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide><img src='/newYorker.png' style={{ width: "200px" }}/></SwiperSlide>
      <SwiperSlide><img src='/Jake.png' style={{ width: "200px" }}/></SwiperSlide>
      <SwiperSlide><img src='/George.png' style={{ width: "200px" }}/></SwiperSlide>
      <SwiperSlide><img src='andrew.png' style={{ width: "200px"}}/></SwiperSlide>
    </Swiper>
  );
};

export default Carousel