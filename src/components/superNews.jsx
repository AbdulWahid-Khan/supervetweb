import React from "react";
import bgcard1 from "./../assets/images/supernewscard1.svg";
import bgcard2 from "./../assets/images/supernewscard2.svg";
import bgcard3 from "./../assets/images/supernewscard3.svg";
import btnbg from "./../assets/images/cardbtnbg.svg";
import yellowdiv from "./../assets/images/tokenyellowcardbg.svg";
const SuperNews = () => {
  const cardData =[
      {
          id:1,
          bgimage:bgcard1,
          title:"boggy arrived "
      },
      {
          id:2,
          bgimage:bgcard2,
          title:"mina's world",
      },
      {
          id:3,
          bgimage:bgcard3,
          title:"scam alert"
      },
      {
          id:4,
          bgimage:bgcard2,
          title:"mina's world",
      },
  ]

  return (
    <>

    <div className="max-w-[1920px] w-full h-full bg-black relative overflow-hidden">

    
      <h1 className="font-Rajdhani text-white text-[111px] font-bold uppercase text-center pt-[42px] pb-5 ">
        super news
      </h1>

    <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center w-full gap-[6px]   ">

    {cardData.map((card, index) => (
      <div
        key={card.id }
        className="cards  max-w-[492px] w-full h-[722px] relative   p-5 g-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]"
        style={{ backgroundImage: `url(${card.bgimage})` }}
      >
      
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.14),rgba(143,136,136,1),rgba(0,0,0,0))] z-0">
          <h1 className="text-[42px] font-Rajdhani font-bold text-yellow text-center pt-1.5 uppercase">
            {card.title}
          </h1>
        </div>

    
        <div className="flex flex-col  text-white max-w-[383px]   absolute lg:top-[220px] xl:top-[289px] 2xl:top-[190px] left-[45px] right-[62px]  ">
          <p className="text-white text-lg font-Rajdhani text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
            turpis convallis ac non morbi. Adipiscing lectus justo, sit ipsum
            morbi. Turpis eleifend tempus sociis sagittis, ipsum sit. Augue
            pharetra, sit nisl massa tempor molestie duis. Suscipit congue
            molestie eget tortor. Quis mauris enim, augue nunc, porta. Facilisis
            aenean in in sodales ut . Morbi sapien
            ornare ipsum sed. Lectus aliquet urna posuere varius posuere.
          </p>
          <p className="flex items-end justify-end w-full">
            Publish by : Jenny
          </p>
          <p className="flex supernewsdate w-full justify-end text-end ">Sep-8-2002</p>
        </div>

        
        <button className="absolute font-Rajdhani text-base w-[118px] h-[39px] font-semibold  bottom-[60px] left-[186px]">
          <div className="realtive">
            <img src={btnbg} alt="" className="absolute top-0 left-0 right-0"/>
            <p className="absolute top-0 left-0 right-0 bottom-0 pt-2 font-Rajdhani text-lg font-semibold">
              Read More </p>
          </div>
        </button>
        <div className="absolute bottom-0 right-0 h-full w-[12px] bg-gradient-to-b from-black via-red-600 to-black rounded-t-md"></div>
      </div>
    ))}

    </div>
 <div className="absolute bottom-0 left-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md"></div>

     </div>
    </>
  );
};

export default SuperNews;
