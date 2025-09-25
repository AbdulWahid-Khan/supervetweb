import React from "react";
import leftfemale from "./../assets/images/gameplaymainfemalepic.svg";
import maincardmanpic from "./../assets/images/gameplaybrucemanpic.svg";
import bgcardredpic from "./../assets/images/gameplaycardbg.svg";
import gameplayvideo from "./../assets/video/gameplaybgvideo.mp4";
import { MdFullscreen } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import GamePlaySmartCard from "./gamePlaySmartCard";
const GamePlay = () => {
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] z-1 max-w-[1920px] w-full">
        
        <div
          className=" w-full h-[600px] md:h-[720px] lg:h-[890px]  "
          style={{ position: "relative", overflow: "hidden" }}
        >
          <video  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
          >
            <source src={gameplayvideo} type="video/mp4" />
          </video>

          <div className=" z-10 isolated opacity-100 lg:w-[346px] mx-auto absolute lg:top-[-10px] left-1/2 -translate-x-1/2  bg-yellow [clip-path:polygon(0_0,100%_0,80%_100%,20%_100%)] text-black  uppercase font-normal font-GlassAntique lg:text-[50px]  text-center   lg:py-4 lg:pl-[59px] lg:pr-[56px]
          w-[200px] text-[28px] ">
            Game Play
          </div>

          <div className="flex absolute top-[0px] justify-between w-full  ">
            <div className="leftimg absolute top-[86px] ">
              <img src={leftfemale} alt="" className="w-[544px] md:h-[800px] hidden xl:block" />
            </div>
            <div className="right   flex flex-col  overflow-hidden   ">
              <div   className="flex flex-col gap-[6px] text-white   absolute left-1/2 -translate-x-1/2 top-[80px]  md:top-[115px] xl:translate-x-0 xl:top-[187px] xl:left-[500px] 2xl:left-[946px]
                max-w-[736px] w-full  text-justify px-5 md:px-0"   >
                <p className="font-Rajdhani   text-xl font-semibold  ">
                  Play Super Vet & Earn Exciting Rewards
                </p>

                <p className="font-Rajdhani text-sm    ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Faucibus in dolor, pulvinar euismod et arcu sit odio. At
                  sed vulputate ornare maecenas sit. Malesuada vitae augue morbi
                  eget donec. Erat a eget sed sollicitudin vitae ac at. Sagittis
                  senectus hen drerit accumsan tinciduntut aenean at in laoreet.
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-[280px] md:top-[230px] xl:translate-x-0 xl:top-[294px]   2xl:left-[946px]  xl:left-[500px]  md:max-w-[718px] max-w-[400px] w-full ">
                <div  className="cardimage-and-centeral relative flex items-center  bg-cover bg-center bg-no-repeat max-w-[600px] mx-auto  md:max-w-[718px] 2xl:max-w-[718px] w-full max-h-[352px] h-full"
                  style={{ backgroundImage: `url(${bgcardredpic})` }}
                >
                  <div className="absoulte b-yellow 2xl:bottom-0 h-full ">
                    <img
                      src={maincardmanpic}
                      alt=""
                      className="w-[200px] h-[250px]  md:w-[283px] md:h-[340px] lg:h-full lg:w-full "
                    />
                  </div>

                  <div className=" flex gap-[56px] max-w-[460px] w-full items-center ">
                    <div
                      className="playbuttton p-[2.5px] rounded-full bg-gradient-to-b from-yellow to-red 
                 w-[65px] h-[65px] flex items-center justify-center "
                    >
                      <div className=" w-[55px] h-[55px] rounded-full bg-yellow flex items-center justify-center ">
                        <IoMdPlay className="text-white h-[29px] w-[29px]" />
                      </div>
                    </div>
                    <div className="font-semibold text-2xl  md:font-bold md:text-[35px] lg:text-[56px] max-w-[230px] w-full  font-Rajdhani tracking-[0.35em] leading-[90%] text-white uppercase">
                        Dr.
                        bruce
                        on A 
                        Mission
                    </div>
                  </div>
                  <div className="h-1 w-full bg-[rgb(76,76,76)] absolute bottom-10">
                    <div className="h-full w-[60%] bg-[rgb(103,106,106)] ">
                      <div className="h-full w-[60%] bg-[rgb(179,140,11)] "></div>
                    </div>
                  </div>
                  <MdFullscreen className="absolute bottom-3 right-4 h-[25px] w-[25px] text-yellow" />
                </div>
                <div className=" mt-5 hidden md:block md:max-w-[718px] w-full max-h-[113px] h-full  ">
                  <GamePlaySmartCard />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md"></div>
        </div>
      </div>
    </>
  );
};

export default GamePlay;
