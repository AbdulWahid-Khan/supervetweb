import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import squadman from "./../assets/images/squadmanpic.svg";
import redlinefrontbox from "./../assets/images/redlinebox.svg";
import videobg from "./../assets/video/squadvideobg.mp4";
import borderline from "./../assets/images/squadborder.svg";
import { FaLinkedin } from "react-icons/fa6";

const Squad = () => {
  const [tab, setTab] = useState(1);
  const swiperRef = useRef(null);

  const cardData = [
    { id: 1, Image: squadman },
    { id: 2, Image: squadman },
    { id: 3, Image: squadman },
    { id: 4, Image: squadman },
  ];

  return (
    <div className="w-full h-[900px] relative max-w-[1920px] w-full ">
      <div className=" absolute top-0 inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))] "></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        autoPlay
        loop
        muted
      >
        <source src={videobg} type="video/mp4" />
      </video>

      <div className="relative z-10 px-4 pt-[100px] text-white z-20 ">
        <div className="flex justify-center">
          <p className="bg-yellow text-[50px] font-GlassAntique px-[105px]">
            squad
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center pt-[60px]">
          <div className="flex gap-[124px]">
            <button
              className={`font-GlassAntique text-[35px] ${
                tab === 1 ? "border-b-2 border-red" : ""
              }`}
              onClick={() => setTab(1)}
            >
              Team
            </button>
            <button
              className={`font-GlassAntique text-[35px] ${
                tab === 0 ? "border-b-2 border-red" : ""
              }`}
              onClick={() => setTab(0)}
            >
              Advisor
            </button>
          </div>
        </div>

        <div className="squad pt-[80px] pb-[170px]  relative">
          <Swiper
            modules={[Navigation]}
            navigation={true} // ✅ this line is needed to show default arrows
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={0}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              868: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {cardData.map((member, index) => (
              <SwiperSlide
                key={index}
                
              >
                <div className="squadslide relative group  w-[386px] h-[395px] flex items-end ">

               
                <div className="relative  w-[386px] h-[355px]  flex flex-wrape justify-center items-start ">
                  <img
                    src={redlinefrontbox}
                    alt=""
                    className="hidden group-hover:block left-0 right-0 w-[386px] h-[211px] absolute top-[90px] z-40  "
                  />
                  <div className="card w-[269px] h-[355px] relative  bg-blue-500 ">
                    <div className="redbox w-[261px] h-[115px] bg-red absolute top-[-9px] left-[-11px]  " />

                    <div className="relative isolate    bg-yellow w-[269px] h-[355px] bg-[linear-gradient(0deg,_#000_0%,_rgba(4,4,4,0)_69.58%)]  ">
                      <div className="absolute top-0 flex flex-col w-[246px] h-[126px] leading-none  ">
                        {["super", "super", "super"].map((word, idx) => (
                          <p
                            key={idx}
                            className="font-GlassAntique text-[94px] leading-none opacity-30 text-red mix-blend-soft-light pointer-events-none"
                          >
                            {word}
                          </p>
                        ))}
                      </div>

                      <div className="w-[12px] h-[42px] bg-[#232323] absolute right-0 top-[89px]" />
                      <div className="w-3 h-[42px] bg-[#232323] absolute left-0 top-[220px]" />

                      <img
                        src={member.Image}
                        alt="team"
                        className="absolute bottom-0 w-[263px] h-[396px]"
                      />

                      <div className="absolute pointer-events-none top-0 inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]  z-30" />
                      <div className="hidden group-hover:flex w-full justify-between items-center pl-[22px] pb-[17px] pr-5 absolute bottom-0 z-50">
  <div className="flex   w-full items-center justify-between">
    <p className="text-[24px] leading-none">Damian Clerk <p className="text-[10px] leading-none">Founder Of Super Vet</p></p>
    
    <a
    href="https://www.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-white text-xl"
  >
    <FaLinkedin className="hidden group-hover:block"/>
  </a>
  </div>

  
</div>
                    </div>
                  </div>
                </div>
                 </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="absolute flex justify-center "> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default Squad;
