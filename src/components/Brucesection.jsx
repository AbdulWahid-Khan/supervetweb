import React, { useRef, useState } from "react";

// Images
import brucebg from "./../assets/images/brucebg.svg";
import drbruce from "./../assets/images/gameplaybrucemanpic.svg";
import whiteline from "./../assets/images/drtextwhitediv.svg";
import textred from "./../assets/images/drtextreddiv.svg";
import blackpartimg from "../assets/images/drbruceblackshadeupper.svg";
import topred from "../assets/images/drtopreddiv.svg";
import redlinestop from "../assets/images/drbrucetopredlinepic.svg";
import bottomred from "./../assets/images/drbrucebottomreddiv.svg";
import bottomblack from "./../assets/images/drbruceblackbottom.svg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// Icons
import { FaRotate } from "react-icons/fa6";
import { RiTriangleLine } from "react-icons/ri";
import { IoTriangleOutline } from "react-icons/io5";

const Brucesection = () => {
  return (
    <>
      <div
        className="relative w-full max-w-[1920px]  "
          style={{ backgroundImage: `url(${brucebg})` }}
      >     
        <div className="redimg ">
          <img src={topred} alt="" className="" />
          
        </div>
        <div className="absolute left-[-250px] top-0 hidden lg:block z-20 max-w-[1968px] w-full ">
          <img src={blackpartimg} alt="" />
        </div>
        <div className="text  absolute top-1 lg:left-[164px] left-1/2 -translate-x-1/2 md:transform-none 2xl:top-[10px]  z-20  ">
          <p className="font-GlassAntique lg:pt-4 text-base sm:text-2xl lg:text-5xl  md:text-[36px]  2xl:pl-[200px]  2xl:text-[74px] uppercase text-white z-20  rotate-0 lg:rotate-[-8deg]   ">
            Super vets
          </p>
          <img
            src={redlinestop}
            alt=""
            className="  hidden flex items-start lg:block leading-none rotate-[-3deg] h-[38px] w-full  left-[0px] top-[30px] xl:top-[55px] 2xl:pl-[200px] "
          />
        </div>
        
<div className=" overflow-hidden relative   max-w-[1920px] h-full w-full  items-center  justify-center bg-cover   "  >
          <div className="flex   w-full  justify-end pr-[106px] ">
            <FaRotate className=" w-[40px] h-[30px] right-[40px]  lg:w-[70px] lg:h-[50px]  md:right-[50px] md:top-[40px] lg:right-[70px] xl:right-[106px] top-[20px]   " />
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="myswiper w-full max-w-[1920px] bg-cover bg-no-repeat overflow-hidden "
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {[...Array(3)].map((_, index) => (
              <SwiperSlide className="swiper-wrapper flex  items-center justify-center w-full h-screen ">
                <p className="brucetext text-white w-full font-Fuguz  w-full opacity-100  ">
                  BRUCE
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" absolute top-0 bottom-0 inset-0 bg-[linear-gradient(to_top,_rgba(255,179,10,1)_0%,_rgba(255,200,16,0)_63%)]">

        </div>
        </div>
        <div className=" z-[100] w-[274px] h-[78px] flex flex-col bottom-10 lg:bottom-20  absolute left-1/2  -translate-x-1/2 hidden md:block">
          <p className="font-Fuguz text-4xl md:text-[53px]  ">
            DR.BRUCE
          </p>
          <img
            src={whiteline}
            alt=""
            className="absolute  bottom-0 top-[60px] "
          />
          <img
            src={textred}
            alt=""
            className="absolute  bottom-0  top-[70px] "
          />
        </div>
        <div className="relative    w-full bg-yellow">
          <img src={bottomred} alt="" className="md:h-full " />
          <img
            src={bottomblack}
            alt=""
            className="absolute  right-0 bottom-0 hidden md:block "
          />
        </div>
        
      </div>
    </>
  );
};

export default Brucesection;
