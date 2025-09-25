import React from "react";
import vrcamera from "./../assets/images/vrteasercamera.svg"
import vrbgvideo from "./../assets/video/Metavrversebgvideo.mp4"
const VrTeaser = () => {
  return (
    <>
     <div className={`bg-green-200 max-w-[1920px] w-full h-[600px] md:h-[700px] overflow-hidden z-35 `} 
      style={{ position: 'relative', overflow: 'hidden'   }}>
       
        <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  >
    <source src={vrbgvideo} type="video/mp4" />
  </video>
 

 
      <div className="max-w-[944px] w-full   text-center items-center absolute sm:top-[70px] left-1/2 top-3 -translate-x-1/2 lg:top-[96px] "> 
      <p className="hidden sm:block
      2xl:text-[32px] md:text-[24px] text-base justify-center text-white flex text-center items-center"> RESCUE IN  <span className="text-[rgb(255,200,16)] leading-none p-0 m-0"> METAVERSE </span>  CUSTOMIZE <span className="text-[rgb(255,200,16)]"> AVATARS  </span>PLAY WITH <span className="text-[rgb(255,200,16)]"> OCULUS </span></p>
      <p className="flex text-sm sm:hidden text-white px-1 pt-[30px] justify-center">RESCUE IN  METAVERSE CUSTOMIZE AVATARS PLAY WITH OCULUS</p>
      </div>
      <div className="absolute  sm:top-[78px] left-1/2 top-14 -translate-x-1/2">
      <div className="flex relative flex-col items-center justify-center  max-w-[490px] max-h-[490px] w-full h-full justify-self-center ">
        <img src={vrcamera} alt="" className="w-[490px] h[290px] pb-[100px] pt-[30px] sm:pt-0 sm:pb-[70px] lg:pb-0"/>
        <button className="bg-yellow   absolute bottom-0 max-w-[216px] w-full text-center w-[216px] h-[56px] font-Rajdhani sm:text-[28px] font-bold items-center justify-center pt-[10px] cursor-pointer rounded px-auto pt-[11px] pb-[12px] text-lg">
        VR TEASER
        </button>
      </div>
      </div>
    
       </div>
      
    </>
  );
};

export default VrTeaser;
