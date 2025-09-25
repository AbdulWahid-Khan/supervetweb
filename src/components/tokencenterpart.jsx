import React from "react";
import leftreddiv from "../assets/images/tokenfullredcard.svg";
import rightreddiv from "../assets/images/tokenrightsidered.svg";
import yellowdiv from "../assets/images/tokenyellowcardbg.svg";
import leftcoins from "../assets/images/leftcoins.svg";
import rightcoins from "../assets/images/rightcoins.svg";
import singlecoin from "../assets/images/singlecoin.svg";
import leftsmallcoins from "../assets/images/leftsmallcoins.svg";
import rightsmallcoins from "../assets/images/rightsmallcoins.svg";
import blurcoin from "../assets/images/blurcoin.svg";
import Tokenbgvideo from "../assets/video/Tokensectionvideo.mp4";

const Tokencenterpart = () => {
  const supplyCards = [
    {
      leftImage: leftreddiv,
      middleImage: yellowdiv,
      rightImage: rightreddiv,
      topText: "1 BILLION",
      bottomText: "SUPPLY",
    },
    {
      leftImage: leftreddiv,
      middleImage: yellowdiv,
      rightImage: rightreddiv,
      topText: "$SVET",
      bottomText: "SYMBOL",
    },
    {
      leftImage: leftreddiv,
      middleImage: yellowdiv,
      rightImage: rightreddiv,
      topText: "$325K",
      bottomText: "Supply",
    },
  ];
  return (
    <>
      <div className={`bg-green-200 max-w-[1920px] w-full`}
        style={{
          position: "relative",
          width: "100%",
          height: "765px",
          overflow: "hidden",
        }}
      >
        <video
       className="absolute top-0 left-0 bottom-0  w-full h-full object-cover"
       autoPlay
       loop
       muted
     >
             <source src={Tokenbgvideo} type="video/mp4" />
           </video>

        <div className="flex justify-center items-center rotate-[4deg] ">
          <h4
            className="font-Rajdhani text-[180px] md:text-[240px]  lg:text-[370px] font-bold bg-[linear-gradient(to_right,_rgba(239,31,31,0.12),_rgba(255,200,16,1),_rgba(239,31,31,0.13))] opacity-10 "
            style={{
              WebkitTextStrokeWidth: "3px",

              WebkitTextStrokeColor: "transparent",
              WebkitTextFillColor: "rgba(0, 0, 0,1) ",
              WebkitBackgroundClip: "text",
              lineHeight: "1",
            }}
          >
            TOKENOMICS
          </h4>
        </div>

        <div className="absolute top-0 w-full ">
          <div className="flex  w-full justify-center relative  ">
            <p className=" font-Rajdhani font-bold text-[30px] md:text-[50px] text-yellow absolute top-[40px] sm:top-[60px] md:top-[80px] lg:top-[113px] ">
              TOKENOMICS
            </p>
          </div>
 
          <div className="flex relative w-full h-full pb-[160px] pt-[80px] md:pt-[100px] lg:pb-[180px]  lg:pt-[112px] ">
            <img
              src={leftcoins}
              alt=""
              className="2xl:w-[396px] 2xl:h-[532px] md:w-[300px] md:h-[400px] w-[300px] h-[420px] absolute left-0 top-[0px] hidden sm:block "
            />
            <img
              src={leftsmallcoins}
              alt=""
              className="2xl:w-[175px] 2xl:h-[276px] md:w-[130px] md:h-[220px] absolute left-[0px] top-[230px] hidden sm:block "
            />
              <div className="flex flex-col md:flex lg:flex-row w-full justify-center items-center gap-2 py-[60px] sm:pt-[200px] md:pt-[170px]  ">
              {supplyCards.map((img, ind) => (
                <div className="relative  w-[278px] h-[151px] ">
                  <img
                    src={img.leftImage}
                    alt=""
                    className="w-[270px] h-[145px] absolute left-0 top-0 z-[10]"
                  />
                  <img
                    src={img.middleImage}
                    alt=""
                    className="w-[270px] h-[145px] absolute left-[4px] top-[3px] bottom-0 z-[20]"
                  />
                  <img
                    src={img.rightImage}
                    alt=""
                    className="absolute right-0 bottom-[-2px] z-[10]"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center items-center font-Rajdhani z-[30] leading-none">
                    <p className="font-bold text-[36px]">{img.topText}</p>
                    <p className="font-bold text-[55px]">{img.bottomText}</p>
                  </div>
                </div>
              ))}
            </div>
            <img
              src={blurcoin}
              alt=""
              className="  lg:w-[250px] lg:h-[271px] absolute top-3 lg:left-[400px] z-[100] transform [transform:rotateY(60deg)] filter blur-[20px]"
            />
            <img
              src={blurcoin}
              alt=""
              className="w-[167px] h-[182px] absolute top-4 left-[700px] z-[100] filter blur-[20px] hidden sm:block "
            />

           

            <img
              src={rightcoins}
              alt=""
              className=" 2xl:w-[396px] 2xl:h-[532px] md:w-[300px] md:h-[400px] w-[300px] h-[420px] absolute right-0 top-[0px] hidden sm:block "
            />
            <img
              src={rightsmallcoins}
              alt=""
              className="2xl:w-[175px] 2xl:h-[276px] md:w-[130px] md:h-[220px] absolute right-0 top-[220px] hidden sm:block "
            />

            <img
              src={singlecoin}
              alt=""
              className="w-[246px] h-[190px] absolute bottom-4 left-[184px] z-[100] rotate-[25deg] "
            />
            <img
              src={singlecoin}
              alt=""
              className=" w-[250px] h-[187px]  absolute bottom-8 left-[800px] z-[100]rotate-[8deg]"
            />
            <img
              src={singlecoin}
              alt=""
              className="w-[150px] h-[107px] absolute bottom-1 left-[400px] z-[100]"
            />
            <img
              src={singlecoin}
              alt=""
              className="w-[100px] h-[87px] absolute bottom-3 left-[590px] z-[100]"
            />
            <img
              src={singlecoin}
              alt=""
              className="w-[96px] h-[100px] absolute bottom-4 right-[484px] z-[100] rotate-[2deg] "
            />
            <img
              src={singlecoin}
              alt=""
              className="w-[146px] h-[150px] absolute bottom-5 right-[284px] z-[100] rotate-[15deg] "
            />
            <img
              src={singlecoin}
              alt=""
              className="w-[106px] h-[100px] absolute bottom-1 right-[84px] z-[100] rotate-[12deg] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokencenterpart;
