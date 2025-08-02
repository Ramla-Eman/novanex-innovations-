import React from "react";
import { assests } from "../assets/assests";
import { IoIosCheckmarkCircle } from "react-icons/io";

const BannerPoints = [
  { text: "Tailored web & app solutions built around your goals" },
  { text: "Clean, modern designs that elevate your brand" },
  { text: "Full-stack expertise to handle everything end-to-end" },
];

const HomeBanner = () => {
  return (
    <div className="lg:h-[34vw] md:h-[48vw] bg-background max-w-7xl p-7 sm:px-7 px-4 md:my-[30px] my-3 rounded-2xl text-white xl:mx-auto sm:mx-4 mx-1 relative overflow-hidden">
      <div className="trasnparent-bg-banner"></div>
      <div className="flex md:flex-row flex-col justify-between z-50 relative w-full h-full">
        <img src={assests.BannerImg} alt="" />
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="text-xl text-blue uppercase -mb-2">Why Choose Us</p>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold">
            Ready for Any Digital Challenge
          </h2>
          <ul className="flex flex-col gap-1.5">
            {BannerPoints.map((item, index) => {
              return (
                <li key={index} className="flex gap-0.5">
                  <IoIosCheckmarkCircle className="text-3xl" />
                  <p className="md:text-lg">{item.text}</p>
                </li>
              );
            })}
          </ul>
          <button className="button mt-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
