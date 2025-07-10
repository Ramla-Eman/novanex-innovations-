import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListMenu = [
  { name: "Services", path: "/" },
  { name: "About Us", path: "/" },
  { name: "Blog", path: "/" },
  { name: "Contact Us", path: "/" },
];

const Navbar = () => {
  const [menu, setMenu] = useState("Services");
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to={"/"}
          className="flex items-center gap-2 justify-center sm:text-2xl text-[20px] uppercase font-bold"
        >
          <h2 className="text-[#fb3f6c]">
            NovaNex
            <span className="text-black">
              Innovations
            </span>
          </h2>
        </Link>
        <div className="flex items-center lg:gap-[60px] gap-[40px]">
          <ul className="md:flex hidden items-center lg:gap-[45px] gap-[25px]">
            {ListMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={menu === item.name ? "pb-0.5 border-b-2" : ""}
                  onClick={() => setMenu(item.name)}
                >
                  <a href="" className="lg:text-[20px] text-[18px]">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <button className="button border-[#FF698D80] border-[1px] px-4 py-2 font-semibold text-[16px] rounded-full before:bg-[#FF698D80] hover:text-white active:bg-[#FF698D80] active:text-white">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
