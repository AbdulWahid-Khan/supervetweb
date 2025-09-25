import React from "react";
import roadmaptopimg from "./../assets/images/roadmaptop.svg";
import roadmapwomen from "./../assets/images/roadmapwomen.svg";
import roadmapcneterlinepic from "./../assets/images/roadmapcenterdotandlinepic.svg";
import yellowdot from "./../assets/images/yellowdot.svg";
import videobg from "./../assets/video/roadmapbgvideo.mp4";

const RoadMap = () => {
  return (
    <>
      <>
        <div className="max-w-[1920px] w-full h-[700px] md:h-[980px] relative ">
          <img
            src={roadmaptopimg}
            alt=""
            className=":[40px] h-[80px] md:[80px] md:h-[160px]  xl:[100px] xl:h-[200px] absolute left-1/2 -translate-x-1/2 xl:top-[-20px] lg:top-[-22px] md:top-[-24px] z-40 "
          />
          <div className=" w-full  h-full  relative  ">
            <div className="absolute top-0 left-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md z-10"></div>
            <div
              className={`bg-green-200 z-0`}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src={videobg} type="video/mp4" />
              </video>
            </div>
            <div className="w-full redlinescontrol hidden 2xl:block ">
              <div
                className="firstline w-[344px] h-[3px] hidden 2xl:block absolute top-[561px] left-[63px] z-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to left, rgba(239, 31, 31, 1) 0 7px, rgba(239, 31, 31, 0) 7px 14px)",
                }}
              ></div>

              <div className="absolute top-[561px] left-[399px] h-[5px] hidden 2xl:block 2xl:max-w-[1134px] w-full bg-[linear-gradient(to_right,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))] z-z-10 "></div>
              <img
                src={yellowdot}
                alt=""
                className="w-[38px] h-[38px] absolute top-[544px] left-[387px] z-20"
              />
              <div className="absolute top-[561px] left-[405px]  h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))] z-20"></div>
              <img
                src={yellowdot}
                alt=""
                className="w-[38px] h-[38px] absolute top-[544px] left-[662px]"
              />
              <div className="absolute top-[279px] left-[680px]  h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))]"></div>
              <img
                src={yellowdot}
                alt=""
                className="w-[38px] h-[38px] absolute top-[544px] left-[916px]"
              />
              <div className="absolute top-[561px] hidden 2xl:block  left-[934px]  h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))]"></div>
              <div className="absolute top-[279px] left-[1202px]  h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))]"></div>
              <img
                src={yellowdot}
                alt=""
                className="w-[38px] h-[38px] absolute top-[544px] left-[1184px]"
              />
              <div
                className="w-[344px] h-[3px] absolute top-[561px] left-[1222px] hidden 2xl:block"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to left, rgba(239, 31, 31, 1) 0 7px, rgba(239, 31, 31, 0) 7px 14px)",
                }}
              ></div>
            </div>

            <div className=" hidden 2xl:block">
              <div className="absolute left-[420px] top-[600px] z-20">
                <p className="font-Rajdhani font-semibold text-[33px] text-yellow ">
                  Phase 1
                </p>
                <p className="font-Randhani text-lg text-white">
                  RND and Initial
                </p>
                <p className="font-Randhani text-lg text-white">Concept</p>
                <p className="font-Randhani text-lg text-white">
                  Game Design/Plan
                </p>
                <p className="font-Randhani text-lg text-white">
                  Social Media Presence
                </p>
                <p className="font-Randhani text-lg text-white">
                  Team Building
                </p>
              </div>

              <div className="absolute left-[700px] top-[300px]">
                <p className="font-Rajdhani font-semibold text-[33px] text-white">
                  Phase 2
                </p>
                <p className="font-Randhani text-lg text-white">
                  Website Launch
                </p>
                <p className="font-Randhani text-lg text-white">Whitepaper</p>
                <p className="font-Randhani text-lg text-white">
                  Contract Development
                </p>
                <p className="font-Randhani text-lg text-white">
                  Contract Audit
                </p>
                <p className="font-Randhani text-lg text-white">
                  Matketing & Kols
                </p>
              </div>

              <div className="absolute left-[950px] top-[600px] ">
                <p className="font-Rajdhani font-semibold text-[33px] text-white ">
                  Phase 3
                </p>
                <p className="font-Randhani text-lg text-white">
                  Seed and Private
                </p>
                <p className="font-Randhani text-lg text-white">Round</p>
                <p className="font-Randhani text-lg text-white">
                  Strategic Partnership
                </p>
                <p className="font-Randhani text-lg text-white">IDO Launch</p>
                <p className="font-Randhani text-lg text-white">
                  INO Partnerships
                </p>
                <p className="font-Randhani text-lg text-white">
                  Mega NFT Airdrop
                </p>
              </div>

              <div className="absolute left-[1220px] top-[300px]">
                <p className="font-Rajdhani font-semibold text-[33px] text-white">
                  Phase 4
                </p>
                <p className="font-Randhani text-lg text-white">Game Trailer</p>
                <p className="font-Randhani text-lg text-white">
                  Game Alpha Version
                </p>
                <p className="font-Randhani text-lg text-white">
                  Ist Super Tire Introt
                </p>
                <p className="font-Randhani text-lg text-white">NFT Staking</p>
                <p className="font-Randhani text-lg text-white">
                  Community Expansion
                </p>
              </div>
            </div>

            <div className="forresponsivetextsettingd grid grid-cols-2 pl-2 md:grid-cols-2 lg:grid-cols-4 place-items-start absolute top-[160px] md:top-[300px] lg:top-[400px] left-1/2 -translate-x-1/2  gap-3  md:gap-2  2xl:hidden z-30  max-w-[1280px] w-full   ">
              <div className="max-w-[200px] w-full flex gap-3">
              <div className="  max-h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))] z-20"></div>
              <div>
                <p className="font-Rajdhani font-semibold text-lg md:text-[33px] text-yellow ">
                  Phase 1
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  RND and Initial
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Concept
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Game Design/Plan
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Social Media Presence
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Team Building
                </p>
                </div>
              </div>

              <div className="max-w-[200px] w-full flex gap-3">
                <div className="  max-h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))] z-20"></div>
                <div>
                <p className="font-Rajdhani font-semibold text-lg md:text-[33px] text-white">
                  Phase 2
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Website Launch
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Whitepaper
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Contract Development
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Contract Audit
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Matketing & Kols
                </p>
                </div>
              </div>

              <div className="max-w-[200px] w-full flex gap-3 ">
                 <div className="  max-h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))] z-20"></div>
                 <div>
                <p className="font-Rajdhani font-semibold text-lg md:text-[33px] text-white ">
                  Phase 3
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Seed and Private
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Round
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Strategic Partnership
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  IDO Launch
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  INO Partnerships
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Mega NFT Airdrop
                </p>
                </div>
              </div>

              <div className="max-w-[200px] flex w-full gap-3">
                <div className="  max-h-[283px] max-w-[5px] w-full bg-[linear-gradient(to_top,_rgba(239,31,31,0),_rgba(239,31,31,1),_rgba(239,31,31,0))] z-20"></div>
                <div>
                <p className="font-Rajdhani font-semibold text-lg md:text-[33px] text-white">
                  Phase 4
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Game Trailer
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Game Alpha Version
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Ist Super Tire Introt
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  NFT Staking
                </p>
                <p className="font-Randhani text-base md:text-lg text-white">
                  Community Expansion
                </p>
                </div>
              </div>
            </div>

            <img   src={roadmapwomen}   alt=""    className="xl:w-[522px] xl:h-[939px] md:w-[422px] md:h-[739px] absolute left-[10px] md:left-[63px] bottom-0 hidden sm:block " />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md"></div>
        </div>
      </>
    </>
  );
};

export default RoadMap;
