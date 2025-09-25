

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';

import brucebg from "./../assets/images/brucebg.svg";
import drbruce from "./../assets/images/gameplaybrucemanpic.svg";
import { FaRotate } from "react-icons/fa6";
import { RiTriangleLine } from "react-icons/ri";
import { IoTriangleOutline } from "react-icons/io5";
import whiteline from "./../assets/images/drtextwhitediv.svg";
import textred from "./../assets/images/drtextreddiv.svg";
const Bruce = () => {
  return (
    <>
      <div className="overflow-hidden relative max-w-[1920px] h-full w-full  items-center justify-center " >
  <Swiper
    navigation={true}
    modules={[Navigation]}
    loop={true}
    className="mySwiper w-full max-w-[1920px] bg-cover bg-no-repeat overflow-hidden"
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    }}
  >
    {[...Array(3)].map((_, index) => (
      <SwiperSlide className="flex  items-center justify-center w-full h-screen ">
        <p className="2xl:text-[355px] text-white w-full font-Fuguz xl:text-[300px] lg:text-[220px] md:text-[180px] sm:text-[150px] text-[80px] py-4 sm:py-0 text-start  lg:text-start w-full ">
          BRUCE
        </p>
      </SwiperSlide>
    ))}
     
  </Swiper>

  
  
</div>
    </>
  )
}

export default Bruce
