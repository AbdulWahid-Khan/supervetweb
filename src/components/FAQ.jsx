import React from 'react'
  import { Collapse } from 'antd';
import { MdSquare } from "react-icons/md";
import leftlogo from "./../assets/images/leftlogo.svg";
import mainbg from "./../assets/images/faqbg.svg"
import { IoSend } from "react-icons/io5";
import faqredline from "./../assets/images/faqredline.svg"
const FAQ = () => {

const text = (
  <p className='text-lg'>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);
const items = [
  {
    key: '1',
    label: <p  className='font-Rajdhani font-medium text-[30px] flex items-center gap-[25px]'> 
    <MdSquare size={13} className="rotate-45" /> Can your provide us with a brief introduction to super vet ?</p> ,
    children: text,
  },
  {
    key: '2',
    label: <p  className='font-Rajdhani font-medium text-[30px] flex items-center gap-[25px]'> <MdSquare size={13} className="rotate-45" /> What is the gameplay like briefly ?</p>,
    children: text,
  },
  {
    key: '3',
     label: <p  className='font-Rajdhani font-medium text-[30px] flex items-center gap-[25px]'> <MdSquare size={13} className="rotate-45" /> Where can i learn more about the game ? </p>,
    children: text,
  },
   {
    key: '4',
     label: <p  className='font-Rajdhani font-medium text-[30px] flex items-center gap-[25px] w-full'>
      <MdSquare size={13} className="rotate-45" /> What are the different ways players can earn while they play ? </p>,
    children: text,
  },
   {
    key: '5',
     label: <p  className='font-Rajdhani font-medium text-[30px] flex items-center gap-[25px] w-full '> 
     <MdSquare size={13} className="rotate-45" />
     If I’m an influencer/content creator/partner, who should i contact? </p>,
    children: text,
  },
];
  return (
    <>
  <div className="relative bg-yellow  max-w-[1920px] w-full overflow-hidden">
    <div
    className="absolute inset-0 bg-cover bg-no-repeat mix-blend-soft-light z-0"
    style={{ backgroundImage: `url(${mainbg})` }}
  ></div>

      
 
     <div className="flex flex-col items-center justify-center pt-[86px] isolate ">
  <h1 className="font-GlassAntique text-[50px] text-center pl-17 w-full">FAQ</h1>
  <img src={faqredline} alt="" className='w-[256px] h-[14px] '/>
</div>
      <div className='flex justify-center   items-center xl:w-[880px] transition-none pt-[103px] pb-[107px]  mx-auto '>
        <Collapse items={items} bordered={false} defaultActiveKey={['1']} expandIcon={() => null}   />
        
      </div>
      <div className="h-[4px] max-w-[90%] mx-auto w-full bg-[linear-gradient(to_right,rgba(239,31,31,0.1),rgba(239,31,31,1),rgba(239,31,31,0.18))]">
      </div>

      <div className='flex flex-col lg:flex lg:flex-row pt-[20px] pb-4   items-center md:pt-[92px] w-full justify-center gap-[10px] md:gap-[30px] px-4 lg-px-0 lg:gap-[80px] xl:gap-[150px]'>
        <div className='icon  w-[240px] h-[240px]'>
            <img src={leftlogo} alt=""  className='w-[240px] h-[240px] ' />
        </div>
        <div className='flex gap-2 px-3 sm:gap-[40px] lg:gap-[50px] xl:gap-[148px]  '>
            <ul className='flex flex-col w-full'>
                <li className='font-Rajdhani font-bold md:text-[22px] '>learn More</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Home</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Gameplay</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Roadmap</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Superverse</li>
            </ul>
             <ul>
                <li className='font-Rajdhani font-bold text-[22px] '>Marketplace</li>
                <li className='font-Rajdhani text-base md:text-xl '>Charcters</li>
                <li className='font-Rajdhani text-base md:text-xl '>In-Game Assets</li>
                <li className='font-Rajdhani text-base md:text-xl '>Buy/Sell</li>
                <li className='font-Rajdhani text-base md:text-xl '>NFT Staking</li>
            </ul>
            <ul className='flex flex-col w-full'>
                <li className='font-Rajdhani font-bold text-[22px] '>Quick Links</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Whitepaper</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Pitch Deck</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Marketplace</li>
                <li className='font-Rajdhani font-medium text-base md:text-xl '>Marketplace</li>
            </ul>
        </div>

        <div className='flex flex-col  '>
            <p className='font-Rajdhani font-bold text-[34px]'>Subscribe Us</p>
            <div className='flex w-[231px] h-[56px]  rounded-lg items-center border-2 z-20'>
              <div className='w-full h-full '>
              <input type="email" name="" id="" placeholder='info@yourgmail.com' className='focus-none w-[171px] py-3 px-6  outline-none  w-full  '/>
              </div>
                
                <div className='w-[75px] h-[56px] bg-red  rounded-lg flex items-center justify-center overflow-hidden'>
                    <IoSend size={24} className='flex justify-center items-center text-white '/>
                </div>
            </div>
        </div>
      </div>
  </div>

      
    </>
  )
}

export default FAQ
