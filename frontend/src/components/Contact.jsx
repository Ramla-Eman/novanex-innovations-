import React from "react";
import { assests } from "../assets/assests";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <div className="h-auto max-w-7xl p-7 sm:px-7 mx-auto px-4 md:my-[30px] my-3">
      <div className="flex flex-row justify-between w-full h-full">
        <img
          src={assests.ContactImg}
          alt=""
          className="lg:block w-[50%] hidden"
        />
        <div className="lg:w-[45%] w-full flex flex-col gap-2.5">
          <p className="text-xl text-orange uppercase -mb-2">Contact Us</p>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold">
            Let's Collaborate Now!
          </h2>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
