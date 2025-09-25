import React from "react";
import redlinepic from "./../assets/images/partnerredlinepic.svg";
import partnerbg from "./../assets/images/partnerbg.svg";
import image1 from "./../assets/images/partnerimg1.svg";
import image2 from "./../assets/images/partnerimg2.svg";
import image3 from "./../assets/images/partenr3.svg";
import image4 from "./../assets/images/partner4.svg";
import image5 from "./../assets/images/partner5.svg";
import image6 from "./../assets/images/partner6.svg";
import image7 from "./../assets/images/partner7.svg";
import image8 from "./../assets/images/partner8.svg";
import image9 from "./../assets/images/partner9.svg";
import image10 from "./../assets/images/partner10.svg";
import image11 from "./../assets/images/partenr11.svg";
import image12 from "./../assets/images/partner12.svg";
import image13 from "./../assets/images/partner13.svg";
import image14 from "./../assets/images/partner14.svg";

const Partner = () => {
  const partnerImage = [
    {
      id: 1,
      Image: image1,
    },
    {
      id: 2,
      Image: image2,
    },
    {
      id: 3,
      Image: image3,
    },
    {
      id: 4,
      Image: image4,
    },
    {
      id: 5,
      Image: image5,
    },
    {
      id: 6,
      Image: image6,
    },
    {
      id: 7,
      Image: image7,
    },
    {
      id: 8,
      Image: image8,
    },
    {
      id: 9,
      Image: image9,
    },
    {
      id: 10,
      Image: image10,
    },
    {
      id: 11,
      Image: image11,
    },
    {
      id: 12,
      Image: image12,
    },
    {
      id: 13,
      Image: image13,
    },
    {
      id: 14,
      Image: image14,
    },
  ];

  return (
    <>
      <div        className="bg-no-repeat bg-cover bg-center w-full h-full max-w-[1920px] w-full relative"
        style={{ backgroundImage: `url(${partnerbg})` }}
      >
         <div className=" w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md z-[300]"></div>
        <div className="flex  w-full items-center text-center justify-center pt-[87px] ">
          <div>
            <h1 className=" text-white font-GlassAntique text-[50px] pl-4 ">
              partNERS{" "}
            </h1>
            <img src={redlinepic} alt="" className="" />
          </div>
        </div>
        <div className="  pt-[15px] sm:pt-[30px] md:pt-[50px] lg:pt-[76px] flex flex-wrap  place-content-center 2xl:place-content-start pb-[60px] mx-auto gap-[92px] lg:px-3 2xl:gap-[52px] items-center 2xl:pl-[285px] 2xl:pr-[293px]">
          {partnerImage.map((imgObj) => (
            <div
              key={imgObj.id}
              className="w-[195px] h-[195px] flex justify-center items-center "
            >
              <img
                src={imgObj.Image}
                alt={`Partner ${imgObj.id}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
         
     
     <div className="absolute botttom-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md z-[300]"></div> </div>
     
       
    </>
  );
};

export default Partner;
