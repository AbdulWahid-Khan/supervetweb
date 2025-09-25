import React from 'react'
import securedby1 from "./../assets/images/securedbypic1.svg";
import securedby2 from "./../assets/images/securedbypic2.svg";
import publishedby1 from "./../assets/images/publishedby1.svg";
import publishedby2 from "./../assets/images/publishedby2.svg";
import publishedby3 from "./../assets/images/publishedby3.svg";
import technologypic1 from "./../assets/images/technologpic1.svg";
import technologypic2 from "./../assets/images/technologypic2.svg";
import technologypic3 from "./../assets/images/technnologypic3.svg";
import technologypic4 from "./../assets/images/technnologypic4.svg";
import technologypic5 from "./../assets/images/technnologypic5.svg";
import technologypic6 from "./../assets/images/technologypic6.svg";
import mainbgpic from "./../assets/images/publishedmainbg.svg";
import borderline from "./../assets/images/squadborder.svg";

const PublishedBy = () => {
  return (
    <>

<div className='max-w-[1920px] w-full h-full relative bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${mainbgpic})` }}
    >
<div className='bg-[linear-gradient(to_right,_rgba(0,0,0,1),_rgba(0,0,0,0))] w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 md:gap-1  place-items-center justify-between pt-[94px]  max-w-[1920px] mx-auto  '>
            <div>
                <div className='relative flex justify-center items-center w-full py-5 2xl:pb-[59px]'>
                    <img src={borderline} alt="" />
                     <button className='absolute  text-yellow font-GlassAntique text-[34px]  '>
              secured by
                     </button>
                </div>
           
            <div className='flex flex-col items-center justify-center border-1 border-yellow rounded-md lg:w-[320px] lg:h-[320px] 2xl:w-[413px] 2xl:h-[413px] gap-[54px] '>
                <img src={securedby1} alt="" className='2xl:w-[94px] 2xl:h-[104px] lg:w-[74px] lg:h-[84px]'/>
                <img src={securedby2} alt="" className='2xl:w-[254px] 2xl:h-[126px] lg:w-[154px] lg:h-[100px]'/>
            </div>
            </div>
            
        
            <div>
                 <div className='relative flex justify-center items-center w-full py-5 2xl:pb-[59px]'>
                    <img src={borderline} alt="" />
                     <button className='absolute  text-yellow font-GlassAntique text-[34px]  '>
              published by
                     </button>
                </div>
             <div className='flex justify-center  flex flex-col items-center justify-center border-1 border-yellow rounded-md md:w-[370px] md:h-[370px]  2xl:h-[481px] 2xl:w-[481px] gap-[64px] '>
                <img src={publishedby1} alt="" className='md:w-[120px] h-[37px] w-full 2xl:w-[196px] 2xl:h-[55px] w-full '/>
                <img src={publishedby2} alt="" className='md:w-[200px] md:h-[50px] 2xl:w-[271px] 2xl:h-[75px] w-full  '/>
                <img src={publishedby3} alt="" className='md:w-[185px] md:h-[44px] 2xl:w-[235px] 2xl:h-[64px] w-full  '/>
            </div>
            </div>
            <div className=''>
            <div className='relative flex justify-center items-center w-full py-5 2xl:pb-[59px]'>
                    <img src={borderline} alt="" />
                     <button className='absolute  text-yellow font-GlassAntique text-[34px]  '>
              Technologies
                     </button>
                </div>
             <div className='technology flex flex-col items-center justify-center border-1 border-yellow rounded-md py-3 md:py-0 lg:w-[320px] lg:h-[320px] 2xl:w-[413px] 2xl:h-[413px] gap-[47px] pl-[33px] pr-[30px] '>
                <div className='flex 2xl:gap-[50px] gap-[20px]'>
                    <img src={technologypic1} alt="" className='w-[120px] h-[40px] 2xl:w-[142px] 2xl:h-[50px]'/>
                    <img src={technologypic2} alt="" className=' w-[130px] h-[40px] 2xl:w-[158px] 2xl:h-[55px]'/>
                </div>
                <div className='flex 2xl:gap-[50px] gap-[30px]'>
                    <img src={technologypic3} alt="" className='w-[120px] h-[40px] 2xl:w-[142px] 2xl:h-[50px]'/>
                    <img src={technologypic4} alt="" className='w-[130px] h-[40px] 2xl:w-[158px] 2xl:h-[55px]'/>
                </div>
                <div className='flex 2xl:gap-[50px] gap-[30px] '>
                    <img src={technologypic5} alt="" className='w-[120px] h-[40px] 2xl:w-[142px] 2xl:h-[50px]'/>
                    <img src={technologypic6} alt="" className='w-[130px] h-[40px] 2xl:w-[158px] 2xl:h-[55px]'/>
                </div>
                
            </div>
            </div>



            </div>

       
        <div className='flex max-w-[1920px] mx-[204px]  justify-between items-center pt-5 pb-[98px]'>
            {/* <div className='flex flex-col items-center justify-center border-1 border-yellow rounded-md  w-[413px] h-[413px] '>
                <img src={securedby1} alt="" className='w-[94px] h-[104px]'/>
                <img src={securedby2} alt="" className='w-[254px] h-[126px]'/>
            </div> */}

            {/* <div className='flex flex-col items-center justify-center border-1 border-yellow rounded-md w-[481px] h-[481px] '>
                <img src={publishedby1} alt="" className='w-[196px] h-[55px]'/>
                <img src={publishedby2} alt="" className='w-[271px] h-[75px]'/>
                <img src={publishedby3} alt="" className='w-[235px] h-[64px]'/>
            </div> */}
            {/* <div className='technology flex flex-col items-center justify-center border-1 border-yellow rounded-md  w-[413px] h-[413px] gap-[47px] '>
                <div className='flex '>
                    <img src={technologypic1} alt="" className='w-[142px] h-[50px]'/>
                    <img src={technologypic2} alt="" className='w-[158px] h-[55px]'/>
                </div>
                <div className='flex '>
                    <img src={technologypic3} alt="" className='w-[142px] h-[50px]'/>
                    <img src={technologypic4} alt="" className='w-[158px] h-[55px]'/>
                </div>
                <div className='flex '>
                    <img src={technologypic5} alt="" className='w-[142px] h-[50px]'/>
                    <img src={technologypic6} alt="" className='w-[158px] h-[55px]'/>
                </div>
                
            </div> */}

        </div>

         <div className="absolute bottom-0 left-0 w-full h-[12px] bg-gradient-to-r from-black via-red-600 to-black rounded-t-md"></div>

    </div>
</div>
    
      
    </>
  )
}

export default PublishedBy
