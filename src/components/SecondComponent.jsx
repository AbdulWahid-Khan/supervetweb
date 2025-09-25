import React from "react";
import headingline from "./../assets/images/storylineimg.svg";
import bgimg from "./../assets/images/secondcombgpimg.svg"
import StoryCardright from "./storyCardright";
import lefttopimg from "./../assets/images/ourstoryimglefttop.svg"
import StoryCardBottom from "./storyCardBottom";
import collens from "./../assets/images/collenpic.svg"
import bgcard from "./../assets/images/ourstorybgimg.svg";
const SecondComponent = () => {
  return (
    <>
   <div className=" max-w-[1920px] w-full h-full bg-cover  flex relative md:pb-[200px] 2xl:pb-[232px] pb-[190px] overflow-hidden"
   style={{ backgroundImage: `url(${bgimg})`, }}
    >

        <div className="absolute top-0 left-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md"></div>
<div className=" relative flex justify-between w-full  ">
 <img src={lefttopimg} alt="" className="w-[200px] h-[150px] md:w-[350px] md:h-[230px] lg:w-[450px] lg:h-[400px] "/>
 <div className="md:pt-[40px] 2xl:pt-[75px] hidden lg:block  ">
<StoryCardright />
 </div>         
</div>
     
  <div className="absolute  top-[120px] lg:top-[140px] 2xl:top-[156px]   flex flex-col items-center justify-center lg:gap-[67px] w-full">
    <div className="heading text-center relative">
        
      <h1 className="font-GlassAntique text-white text-lg lg:text-[50px] leading-[100%]">
        OUR STORY
      </h1>
      <img src={headingline} alt="" className="w-[100px] h-[12px] lg:w-full lg:h-full " />
    </div>
     
    <div className="flex text-white flex-col text-base lg:text-[28px] md:justify-center font-medium max-w-[500px] lg:max-w-[802px] w-full 2xl:pr-10 ">
       <p className="w-8 h-5.5 flex items-start justify-start w-full hidden sm:block">
        <img src={collens} alt="" className="w-8 h-5.5 " /> </p>

     <p className=" flex text-center  font-Rajdhani max-w-[802px] w-full">
      Super Vet is rescue to earn and read to earn 3D NFT metaverse 
RPG game & comics. In this game Super Vets are on the missions 
to rescue animals in the Super Vet World and Superverse - Animals 
own Metaverse. Players will rescue animals in Superverse (Metaverse) 
using their own customize avatar, and oculus gadgets. 
      </p>
          
      <p className="w-8 h-5.5 rotate-[180deg] flex items-end w-full hidden sm:block">
        <img src={collens} alt="" className="w-8 h-5.5 " /> </p>

    </div>
  </div>
    <div className="absolute bottom-0 left-30  hidden sm:block z-0">
        <StoryCardBottom />
    </div>
    <div className="absolute bottom-0 left-0 z-10 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md "></div>
</div>

    </>
  );
};

export default SecondComponent;
