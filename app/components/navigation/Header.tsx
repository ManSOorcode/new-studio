"use client";

import { useRef, useState } from "react";
import { BurgerIcon, CloseIcon } from "../social-icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [isToggle, setToggle] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const handlingNavToggle = () => {
    setToggle((prev) => !prev);
  };

  useGSAP(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".header-nav", {
      y: -40,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".header-menu-item",
        {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.7"
      )
      .from(
        ".burger-button",
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
        },
        "-=0.6"
      );
  }, []);

  const headerMenu = [". Studio", "Services", "Works", "Contact"];

  return (
    <header
      ref={headerRef}
      className=" bg-[#2B2F31] absolute top-0 left-0 right-0 py-14 lg:py-20 z-10 px-6"
    >
      <nav className="header-nav max-w-7xl font-sans w-full  mx-auto flex items-center justify-between  ">
        <div className="flex items-center"></div>

        <ul className="hidden items-center gap-32   lg:flex text-white text-md font-medium">
          {headerMenu.map((menu, i) => (
            <li key={i} className="headerMenu cursor-pointer hover:opacity-70">
              {menu}
            </li>
          ))}
        </ul>

        <button onClick={handlingNavToggle} className={`flex lg:hidden`}>
          <BurgerIcon className="w-8 h-8" />
        </button>
        <div
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
              {headerMenu.map((menu, i) => (
                <li
                  key={i}
                  className="headerMenu cursor-pointer hover:opacity-70"
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
