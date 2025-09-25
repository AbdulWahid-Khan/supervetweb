import React from 'react'
import Drbrucetopred from './../components/Drbrucetopred'
import Brucesection from './Brucesection'
import DrBruceendpart from './DrBruceendpart'
import brucebg from "./../assets/images/drbrucebg.svg";
import drbruce from "./../assets/images/gameplaybrucemanpic.svg";
import whiteline from "./../assets/images/drtextwhitediv.svg";
import textred from "./../assets/images/drtextreddiv.svg"
const DrBruceMain = () => {
  return (
    <>
    <div className="  relative  "
      >
     <div className="w-full absolute top-0 bottom-0 left-0 right-0  bg-gradient-to-t from-[rgba(255,179,10,.7)] to-[rgba(255,200,16,0)] z-[210]">
             </div>
      
             <Drbrucetopred />
             <Brucesection />
 
        <div className='absolute bottom-0 '>
            <DrBruceendpart />
        </div>
        
   
             <div className=" w-[274px] h-[78px] flex flex-col bottom-10  absolute left-1/2  -translate-x-1/2 z-[500]">
            <p className="font-Fuguz text-4xl md:text-[53px] z-[500] hidden sm:block">DR.BRUCE</p>
            <img src={whiteline} alt="" className="absolute z-[100] bottom-0 top-[60px] z-[500] "/>
            <img src={textred} alt="" className="absolute z-[100] bottom-0  top-[70px] "/>
        </div>
         <div className="absolute bottom-0 left-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md z-[250]"></div>
   </div>
   
     
    </>
  )
}

export default DrBruceMain
