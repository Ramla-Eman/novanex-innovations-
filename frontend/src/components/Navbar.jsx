import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const ListMenu = [
  { name: "Services", path: "/" },
  { name: "About Us", path: "/" },
  { name: "Blog", path: "/" },
  { name: "Contact Us", path: "/" },
];

const Navbar = () => {
  const [menu, setMenu] = useState("Services");
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" className="sm:w-[180px] w-[150px]"/>
        </Link>
        <div className="flex items-center lg:gap-[60px] gap-[40px]">
          <ul className="md:flex hidden items-center lg:gap-[45px] gap-[25px] text-white">
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
            <button className="button text-white">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
