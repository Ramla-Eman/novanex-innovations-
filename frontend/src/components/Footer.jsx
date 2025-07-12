import React from "react";
import { assests } from "../assets/assests";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-background mt-3 text-white relative">
      <div className="trasnparent-bg-banner"></div>
      <div 
        className="max-w-7xl mx-auto px-4 py-10 flex lg:flex-row flex-col items-center justify-between text-lg relative z-50">
        <div className="flex sm:flex-row flex-col gap-5 justify-center items-center">
          <img src={assests.logo} alt="" className="w-[100px]" />
          <hr className="sm:h-7 h-0.5 sm:w-0.5 w-full bg-[#75788C] border-0" />
          <p className="sm:text-start text-center">
            © 2025 NovaNex Innovations. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <p>Get in Touch</p>
          <div className="bg-white p-2 rounded-full text-background">
            <FaLinkedinIn />
          </div>
          <div className="bg-white p-2 rounded-full text-background">
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
