import React from 'react'
import bottomred from "./../assets/images/drbrucebottomreddiv.svg";
import bottomblack from "./../assets/images/drbruceblackbottom.svg"
import drbruce from "./../assets/images/gameplaybrucemanpic.svg";
const DrBruceendpart = () => {
  return (
    <>
    <div className=' '>
 

    
    <div className='relative h-[73px] overflow-hidden lg:bg-yellow z-250 '>
    <img src={bottomred} alt=""  className='md:h-full min-h-[100px]'/>
    <img src={bottomblack} alt="" className='absolute  right-0 xl:top-[-290px] 2xl:top-[-290px] '/>
    </div>
     <div className="drbruce absolute w-[290px] h-[300px] md:w-[380px] md:h-[350px] lg:w-[468px] lg:h-[550px] flex md:w-[420px] md:h-[440px] md:bottom-[-60px]  bottom-[0px] lg:bottom-[-140px]
     xl:bottom-[0]  left-1/2 -translate-x-1/2
      z-[200]">
          <img src={drbruce} alt="" className="hidden sm:block  w-[290px] h-[300px] md:w-[380px] md:h-[350px] xl:w-[468px] xl:h-[550px]   " />
        </div>

    </div>
    
        
      
    </>
  )
}

export default DrBruceendpart
