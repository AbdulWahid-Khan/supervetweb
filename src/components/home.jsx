import React, { useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import bgvideo from "./../assets/video/herobgvideo.mp4";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };
  return (
    <>
      <div
              className="w-full h-full relative max-w-[1920px]  bg-cover bg-norepeat z-10"
              
            >
           
              <video className="videoTag z-0 " autoPlay loop muted>
                <source src={bgvideo} type="video/mp4" />
              </video>
            
            <Navbar isOpen={isOpen} toggleMenu={toggleMenu}/>
            
              
        
               <Hero/>
          
      
      </div>
    </>
  )
}

export default Home
