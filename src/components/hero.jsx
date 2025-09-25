import React, { useState } from "react";
import fbicon from "./../assets/images/fbicon.svg";
import twitter from "./../assets/images/twitter.svg";
import linkedinicon from "./../assets/images/linkedicon.svg";
import myntraicon from "./../assets/images/myntraicon.svg";
import snapicon from "./../assets/images/snapicon.svg";
import checkimg from "./../assets/images/Rectangle0.svg";
import lefttext from "./../assets/images/heroleftdiv.svg";
import righttext from "./../assets/images/herorighttext.svg";
import bgvideo from "./../assets/video/herobgvideo.mp4";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
    <div className="w-full  top-0 max-w-[1920px] bg-red">

    
      <div
        className="w-full absolute top-0 bottom-0 max-w-[1920px] h-full "
        
      >
        <div className="absolute top-0 w-full bottom-0 h-full">
          <div className="relative  h-full w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2  hidden xl:block">
              <ul className="flex flex-col gap-[11px]">
                {[fbicon, twitter, linkedinicon, myntraicon, snapicon].map(
                  (icon, index) => (
                    <li key={index}>
                      <div className="w-[60px] h-[60px] relative bg-red-500 [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%,0%_15%)]">
                        <div className="absolute right-0 top-[5px] w-[55px] h-[50px] bg-yellow [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%,0%_15%)] flex items-center justify-center">
                          <img
                            src={icon}
                            alt=""
                            className="w-[24px] h-[24px]" 
                          />
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            
          </div>
        </div>

        <div className=" flex flex-col max-w-[651px] w-full  items-center  justify-center gap-4.5 absolute top-[170px] md:top-[230px] lg:top-[390px] xl:top-[550px] left-1/2 -translate-x-1/2   2xl:top-[670px] ">
              <div className="hidden sm:flex sm:flex-row gap-3 lg:gap-8 justify-center text-white font-GlassAntique">
                <div className="lefttext relative w-[200px] h-[50px] lg:w-[256px] lg:h-[70px]  ">
                  <img
                    src={lefttext}
                    alt=""
                    className="absolute w-[200px] h-[50px] lg:w-[256px] lg:h-[70px]   "
                  />
                  <h1 className=" absolute top-0  py-2 lg:pt-2.5 lg:pb-[2.5] lg:px-3 pl-5">
                    Watch Trailer
                  </h1>
                </div>

                <div className="righttext relative  w-[200px] h-[50px] lg:w-[256px] lg:h-[70px] ">
                  <img
                    src={righttext}
                    alt=""
                    className="absolute w-[200px] h-[50px] lg:w-[256px] lg:h-[70px]   "
                  />
                  <h1 className="absolute top-0 py-2 pl-10 lg:pt-2.5 lg:pb-[2.5] lg:px-auto">
                    HIT & PLAY
                  </h1>
                </div>
              </div>
              <p className="hidden sm:block   font-Relay max-w-[651px] w-full text-center text-white text-xs px-3 md:px-0 md:font-medium md:text-[18.8889px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                penatibus felis diam purus augue lectus nullam. Purus mauris a
                scelerisque turpis le o duis. Rhoncus, mauris fringilla mi, et
                ac. Suscipit amet quam amet lectus
              </p>
            </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
