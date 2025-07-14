import React, { useState } from "react";
import { assests, testimonialCard } from "../assets/assests";
import TestimonialCard from "./ui/TestimonialCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonialCard.length;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="h-screen max-w-7xl pt-7 mx-auto md:my-[30px] my-3">
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col gap-2 px-4 sm:px-7">
          <p className="text-xl text-orange uppercase -mb-2">Testimonial</p>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold">
            What Our Customer's Say
          </h2>
        </div>
        <div className="w-full h-[90%] relative">
          <img
            src={assests.testimonialbg}
            alt=""
            className="object-cover md:w-auto w-full md:h-auto h-full"
          />
          <div className="absolute lg:-top-4 top-3 inset-x-0 px-4 md:px-0 md:left-auto md:right-3">
            <div className="w-full md:w-[550px] overflow-hidden mx-auto">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonialCard.map((card, i) => (
                  <div key={i} className="w-full flex-shrink-0 p-2 md:p-12">
                    <TestimonialCard {...card} />
                  </div>
                ))}
              </div>
            </div>
            {/* Slider Buttons */}
            <div className="w-full md:w-[500px] mx-auto mt-5 flex justify-end items-center gap-1.5">
              <div
                onClick={handlePrev}
                className="bg-background p-2 text-2xl rounded-full text-white cursor-pointer"
              >
                <IoChevronBackOutline />
              </div>
              <div
                onClick={handleNext}
                className="bg-background p-2 text-2xl rounded-full text-white cursor-pointer"
              >
                <IoChevronForwardOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
