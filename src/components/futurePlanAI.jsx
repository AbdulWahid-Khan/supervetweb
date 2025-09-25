import React from "react";
import horsepic from "./../assets/images/futureaihorsepic.svg";
import futureaibg from "./../assets/images/futureaibg.svg";

const FuturePlanAI = () => {
  return (
    <div className="w-full min-h-[700px] overflow-hidden relative max-w-[1920px] w-full">
      
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center grayscale z-0 h-full"
        style={{
          backgroundImage: `url(${futureaibg})`,
        }}
      ></div>

    
      <div className="flex flex-col absolute gap-3 top-0 left-0 right-0  z-10 lg:flex lg:flex-row justify-between items-center px-[30px] pt-[30px] sm:pt-[40px] md:px-[70px] md:pt-[100px] lg:pb-[70px] xl:pl-[177px] xl:pt-[111px] xl:pb-[129px]  xl:pr-[193px]">
       
        <div className="leftparttext max-w-[928px] w-full flex flex-col justify-start w-full">
          <p className="font-Rajdhani text-[40px] lg:text-[60px] xl:text-[83px] text-yellow font-bold leading-none">
            FUTURE <span className="text-white">PLAN</span>{" "}
            <span className="text-[rgba(16,226,255,1)]">AI</span>
          </p>
          <p className="font-Rajdhani text-white text-base lg:text-[22px]  xl:text-[25px] max-w-[921px] w-full text-start mt-4">
            Lorem ipsum dolor sit amet consectetur. Maecenas eu egestas sit
            fringilla. Magna cursus condimentum quis et in. Nec maecenas
            lobortis faucibus turpis. Morbi hendrerit imperdiet ornare aliquam
            turpis in lacus nulla orci. Odio viverra vehicula enim lorem
            fringilla. Ante ut dui nullam nunc condimentum condimentum mattis
            adipiscing vestibulum.
          </p>
        </div>

        {/* Right Image */}
        <img src={horsepic} alt="Horse" className="w-[300px] h-[300px]  pt-4 lg:w-[440px] lg:h-[440px] " />
      </div>
    </div>
  );
};

export default FuturePlanAI;
