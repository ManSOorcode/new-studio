"use client";

import { useState } from "react";
import { BurgerIcon, CloseIcon } from "../social-icon";

const Header = () => {
  const [isToggle, setToggle] = useState(false);
  const handlingNavToggle = () => {
    console.log("hello");
    setToggle((prev) => !prev);
  };
  return (
    <header className=" bg-[#2B2F31] absolute top-0 left-0 right-0 py-14 lg:py-20 z-10 px-6">
      <nav className="max-w-7xl font-sans w-full  mx-auto flex items-center justify-between  ">
        <div className="flex items-center"></div>

        <ul className="hidden items-center gap-32   lg:flex text-white text-md font-medium">
          <li className="cursor-pointer hover:opacity-70">. Studio</li>
          <li className="cursor-pointer hover:opacity-70">Services</li>
          <li className="cursor-pointer hover:opacity-70">Works</li>
          <li className="cursor-pointer hover:opacity-70">Contact</li>
        </ul>

        <button onClick={handlingNavToggle} className={`flex lg:hidden`}>
          <BurgerIcon className="w-8 h-8" />
        </button>
        <div
          // className={`bg-[#2B2F31] fixed inset-0 h-full z-50 ${
          className={`bg-[#2B2F31] fixed inset-0 h-full z-40 ${
            isToggle ? "inline-block" : "hidden"
          }`}
        >
          <button
            onClick={handlingNavToggle}
            className="absolute top-16 right-28"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
          <div className="w-full h-full flex justify-center items-center">
            <ul className=" items-center gap-10 flex flex-col text-4xl text-white text-md font-medium">
              <li className="cursor-pointer hover:opacity-70">. Studio</li>
              <li className="cursor-pointer hover:opacity-70">Services</li>
              <li className="cursor-pointer hover:opacity-70">Works</li>
              <li className="cursor-pointer hover:opacity-70">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
