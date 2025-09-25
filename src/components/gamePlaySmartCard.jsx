import React from 'react'
import leftfemale from "./../assets/images/gameplaymainfemalepic.svg";

import bgcardredpic from "./../assets/images/gameplaycardbg.svg";
import wolfcardimg from "./../assets/images/gameplaywolfmanpic.svg";
import secondcardimg from "./../assets/images/gameplaysecondmanpic.svg"
import lastcardwomen from "./../assets/images/gameplaywomenspic.svg"
import { MdFullscreen } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";

const GamePlaySmartCard = () => {
    const cardData =[
        {
    id: 1,
    bgImage: wolfcardimg, 
    text: 'COMING SOON',
   
  },
  {
    id: 2,
    bgImage: secondcardimg,
    text: 'COMING SOON',
  },
  {
    id: 3,
    bgImage: lastcardwomen,
    text: 'COMING SOON',
  },
    ]
  return (
    <>
    
    <div className='flex justify-between max-w-[718px] w-full '>
                   {
                    cardData.map((card ,index) =>
                         <div  className="cardimage-and-centeral relative flex items-center bg-cover bg-center bg-no-repeat w-[230px] h-[113px]  justify-end pr-[18px]  "
                       style={{ backgroundImage: `url(${bgcardredpic})` }}
                    >
                      <div className="w-[108px] h-[111px] absolute left-0">
                        <img src={card.bgImage} alt="" className="w-[108px] h-[111px] " />
                      </div>
        
                      <div className=" flex  pr-[38px] gap-[18px] max-w-[106px] w-full items-center justify-start ">
                        <div className="playbuttton p-[2px] rounded-full bg-gradient-to-b from-yellow to-red 
                         w-[21px] h-[21px] flex items-center justify-center " >
                          <div className=" w-[16px] h-[16px] rounded-full bg-yellow flex items-center justify-center ">
                            <IoMdPlay className="text-white h-[10px] w-[10px]" />
                          </div>
                        </div>
                        <div className="font-bold text-lg max-w-[68px] w-full  font-Rajdhani  leading-[90%] text-white text-center pr-5  ">
                          {card.text} 
                        </div>
                      </div>
                     
                    
                    </div>
                    )
                   }
                   

    </div>
      
    </>
  )
}

export default GamePlaySmartCard
