import React from "react";
import blackpartimg from "../assets/images/drbruceblackshadeupper.svg";
import topred from "../assets/images/drtopreddiv.svg";
import redlinestop from "../assets/images/drbrucetopredlinepic.svg";

const Drbrucetopred = () => {
  return (
    <>
      <div className="flex items-center relative z-30 bg-gradient-to-t from-[rgba(255,179,10,.7)] to-[rgba(255,200,16,0)] z-[210] ">
        <div
          className="w-full relative overflow-hidden h-[70px] lg:h-[155px] xl:h-[155px] 2xl:h-[195px] "
          style={{ backgroundImage: `url(${topred})` }}
        >
        <div className="w-full absolute top-0 bottom-0 left-0 right-0  ">
                </div>
        <img
          src={blackpartimg}
          alt=""
          className="absolute  lg:top-[-130px] lg:h-[732px] xl:top-[-67px] 2xl:top-[-37px] xl:left-[-87px] xl:h-[732px] 
          w-[1968px] hidden lg:block  "
        />
        <div className=" flex items-center top-5 absolute left-1/2 -translate-x-1/2 md:x-translate-x-0 lg:left-[250px] md:h-[137px] md:top-[10px] leading-none rotate-0  lg:rotate-[-3deg]">
          
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Drbrucetopred;
