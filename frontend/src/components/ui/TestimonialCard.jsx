import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialCard = ({ message, img, name }) => {
  return (
    <div
      className="md:h-[285px] bg-white flex flex-col gap-2.5 py-5 px-6 rounded shadow"
    >
      <div className="text-3xl text-background">
        <ImQuotesLeft />
      </div>
      <div>
        <p className="text-[#5D6473] md:text-lg">{message}</p>
      </div>
      <div className="flex items-center gap-2 mt-1.5">
        <img src={img} alt="" className="w-14 h-14 rounded-full object-cover" />
        <p className="text-xl font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
