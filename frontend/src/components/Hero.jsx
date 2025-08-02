import React from "react";
import image from "../assets/hero img.png";
import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { heroSec_ratingImg } from "../assets/assests.js";

const Hero = () => {
  return (
    <div className="lg:h-[34vw] md:h-[48vw] bg-background max-w-7xl p-7 sm:px-7 px-4 md:my-[30px] my-3 rounded-2xl text-white xl:mx-auto sm:mx-4 mx-1 relative flex md:flex-row flex-col justify-between">
      <div className="flex flex-col justify-center items-start xl:gap-6 gap-3">
        <p className="xl:text-2xl sm:text-xl -mb-3.5">
          Best Platform for transformation
        </p>
        <h1 className="xl:text-6xl md:text-4xl text-3xl  font-bold font-orbitron">
          Build<span className="text-blue">.</span>
          <br />
          Innovate
          <span className="text-blue">.</span>
          <br />
          Transform
          <span className="text-blue">.</span>
        </h1>
        <p className="xl:text-xl sm:block hidden">
          NovaNex Innovations delivers cutting-edge web, app, and full-stack
          solutions
          <br className="mmd:block hidden" /> with stunning design turning your
          vision into reality through powerful tech.
        </p>
        <button className="button">Get Started</button>
      </div>
      <img src={image} alt="" />
      <div className="bg-[#F4F2FA] absolute lg:bottom-6 bottom-3 lg:right-10 right-4 flex flex-col gap-2 py-2 px-5 rounded-xl rounded-br-none">
        <div className="flex gap-2.5 items-center">
          <p className="font-bold text-black text-xl">3.5</p>
          <div className="flex text-[#E05207] gap-0.5">
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
        <div className="flex">
          {heroSec_ratingImg.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[40.24px] h-[40px] rounded-full -ml-3 border-2 p-0.5 border-white overflow-hidden cursor-pointer"
              >
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-full rounded-full hover:scale-125 transition-all duration-300 ease-in-out"
                />
              </div>
            );
          })}
          <div className="rounded-full bg-blue w-[40.24px] h-[40px] flex justify-center items-center -ml-2.5 border-white border-2">
            2k
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
