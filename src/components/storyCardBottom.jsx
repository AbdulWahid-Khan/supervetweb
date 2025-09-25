import React from "react";
import bgcard from "./../assets/images/ourstorybgimg.svg";
import femalepic from "./../assets/images/femalepic.svg";
import malepic from "./../assets/images/malepic.svg";
import lightening from "./../assets/images/LIGHTNING.svg"

const StoryCardBottom = () => {
  return (
    <>
      <div className=" flex w-[350px] h-[180px] relative overflow-hidden ">
        <div className="card-wrapper absolute left-3 top-15 rotate-[20deg] z-100 hidden md:block">
          <div className="relative w-[162px] h-[162px] m-6  ">
            <div className="w-[135px] h-[135px] relative  border-[9px] border-white overflow-hidden">
              <img
                src={bgcard}
                alt="cardbackground"
                className="absolute top-[-45px] w-[200px] h-[200px]   "
              />

              <img
                src={malepic}
                alt="Female character"
                className="absolute bottom-[-1px] w-[100px] h-[144px] object-cover rotate-[0deg] filter grayscale"
              />
              
            </div>
          </div>
        </div>

        {/*   female image card */}
        <div className="card-wrapper absolute right-0 top-4 rotate-[-5deg]">
          <div className="relative w-[162px] h-[162px] m-6 hidden lg:block ">
            <div className="w-[158px] h-[158px] relative  border-[9px] border-white overflow-hidden">
              <img
                src={bgcard}
                alt="Card background"
                className="absolute top-[-45px] w-[250px] h-[250px] object-cover   "
              />

              <img
                src={femalepic}
                alt="Female character"
                className="absolute bottom-[-00px] w-[180px] h-[144px] object-cover rotate-[10deg] filter grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCardBottom;
