import React, { useState } from "react";
import leftlogo from "./../assets/images/leftlogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = ({ isOpen, toggleMenu }) => {
  console.log(" this is navbar ", isOpen, toggleMenu);

  return (
    <>
      <div className="flex  justify-between max-w-[1920px] w-full absolute top-0 items-center z-20">
        <div className="w-[80px] h-[80px] sm:w-[123px] sm:h-[129px] sm:pl-[49px] pt-5 ">
          <img
            src={leftlogo}
            alt=" logo "
            className="h-full w-full hidden sm:block"
          />
          <img
            src={leftlogo}
            alt=" logo "
            className="w-[80px] h-[80px] sm:hidden "
          />
        </div>
        <div className="hidden xl:block xl:flex justify-end w-full max-w-[1001px] pt-[39px] mr-1 ">
          <ul className="flex  pt-[20px]  justify-around w-full gap-[44px] text-white  font-Relay font-bold">
            <li>
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link to="roadmap" smooth={true} duration={500}>
                Roadmap
              </Link>
            </li>
            <li>
              <Link to="squad" smooth={true} duration={500}>
                {" "}
                Squad{" "}
              </Link>
            </li>
            <li>
              <Link to="news" smooth={true} duration={500}>
                {" "}
                News{" "}
              </Link>
            </li>
            <li>
              <Link to="partners" smooth={true} duration={500}>
                {" "}
                Marketplace{" "}
              </Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={500}>
                Comics
              </Link>
            </li>
          </ul>

          <button className="w-[235px] h-[59px] relative text-black text-lg font-GlassAntique font-bold bg-[#FFC810] overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,10%_0%)]">
            Connect wallet
          </button>
        </div>
        <div
          className=" flex items-center pr-5 xl:hidden  "
          onClick={toggleMenu}
        >
          {isOpen ? (
            <RxCross2 size={30} className="text-red cursor-pointer" />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="text-blue-400 cursor-pointer "
            />
          )}
        </div>
        {isOpen && (
          <div className="xl:hidden flex-col  justify-end w-full  fixed top-[100px] sm:top-[129px] mr-1   pb-6 z-10">
            <ul className="flex pl-2 flex-col pt-6  justify-around w-full gap-2 text-blue-500  font-Relay font-bold ">
              <li>
                <Link
                  to="/hero"
                  className={({ isActive }) =>
                    isActive ? "border-b-[4px] border-yellow" : ""
                  }
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="roadmap" smooth={true} duration={500}>
                  {" "}
                  Roadmap
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="squad" smooth={true} duration={500}>
                  {" "}
                  Squad{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="news" smooth={true} duration={500}>
                  {" "}
                  News{" "}
                </Link>{" "}
              </li>
              <li>
                <Link to="partners"> Marketplace </Link>{" "}
              </li>
              <li>
                <Link to="faq" smooth={true} duration={500}>
                  Comics
                </Link>
              </li>
            </ul>

            <button className="w-[235px] h-[59px] mt-[20px] relative text-black text-lg font-GlassAntique font-bold bg-[#FFC810] overflow-hidden [clip-path:polygon(0px_0px,188px_0px,235px_59px,0px_59px)] ">
              Connect wallet
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
