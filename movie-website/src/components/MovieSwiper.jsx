import React from 'react'
import './movieSwiper.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules';


function MovieSwiper({slides,slideChange}) {
  return (
    <Swiper
    
    effect={'overflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    autoplay={{
        delay:2500,
        disableOnInteraction : false,
    }}
    coverflowEffect={{
        rotate:50,
        stretch : 0,
        depth : 100,
        modifier : 1,
        slideShadows : true,
    }}
    loop={true}
    modules={[Autoplay, EffectCoverflow,Navigation]}
    className="movieSwiper"
    
    >


        {
            slides.map(slide=>(
                <SwiperSlide key={slide._id}>
                <img src={slide.previewImg} alt="Preview Image" onClick={()=>slideChange(slide._id)}/>
                </SwiperSlide>
            ))
        }

    </Swiper>
  )
}

export default MovieSwiper