import React from 'react';
import bgcard from "./../assets/images/ourstorybgimg.svg"
import Ninaimg from "./../assets/images/ourstoryninaimg.svg"
import ourstoryimg2 from "./../assets/images/ourstoryimg2.svg"
import wolfcardimg from "./../assets/images/ourstorywolfimg.svg"


const StoryCardright = () => {
  return (
    <>

<div className='lg:-mt-16 2xl:mt-0 overflow-hidden '>
    <div className="controlling relative w-[500px] h-[590px]  flex pt-[120px]   overflow-hidden">
        
        {/* Firstcard */}
        <div className="outer  absolute z-10 right-[270px] rotate-[-10deg]">
      <div className='relative w-[162px] h-[162px]   '>
        <div className="bg-black h-[14px] w-[26px] absolute top-[-5px] left-1/2 -translate-x-1/2 z-10">
</div>
 <div className=" w-[162px] h-[162px]  relative  border-[9px] border-white overflow-hidden">

  <img 
    src={bgcard} 
    alt="" 
    className="absolute top-[-45px]  w-[250px] h-[250px] object-cover rotate-[0deg] "
  />
  <img 
    src={ourstoryimg2} 
    alt=""  
    className="absolute bottom-[-20px] w-[200px] h-[184px] object-cover transform rotate-[20deg] "
  />
</div>
    </div>
        </div>
    
     
   {/* second card  */}
    <div className="outer  absolute top-[75px] right-[110px] rotate-[21deg] z-05">
    <div className='relative w-[162px] h-[162px]   '>
        <div className="bg-black h-[14px] w-[26px] absolute top-[-5px] left-1/2 -translate-x-1/2 z-10">
      </div>
      <div className=" w-[162px] h-[162px]  relative  border-[9px] border-white overflow-hidden">

      <img 
        src={bgcard} 
        alt="" 
        className="absolute top-[-45px]  w-[250px] h-[250px] object-cover rotate-[0deg] "
      />
      <img 
        src={Ninaimg} 
        alt=""  
        className="absolute bottom-[-20px] w-[200px] h-[184px] object-cover transform rotate-[-20deg] "
      />
</div>
    </div>
    </div>
 {/* this is 3rd card */}
 {/* <div className="outer hidden xl:block absolute top-50 left-1/2 -translate-x-1/2"> */}
 <div className='absolute right-[185px] top-[296px] w-[162px] h-[162px] hidden 2xl:block   '>
        <div className="bg-black h-[14px] w-[26px] absolute top-[-5px] left-1/2 -translate-x-1/2 z-10">
</div>
 <div className=" w-[162px] h-[162px]  relative  border-[9px] border-white overflow-hidden">

  <img 
    src={bgcard} 
    alt="" 
    className="absolute top-[-45px]  w-[250px] h-[250px] object-cover rotate-[0deg] "
  />
  <img 
    src={wolfcardimg} 
    alt=""  
    className="absolute bottom-[-20px] w-[200px] h-[184px] object-cover transform rotate-[0deg] "
  />
</div>
    </div>
    {/* </div> */}
    </div>
    </div>
    
    </>
  )
}

export default StoryCardright;
