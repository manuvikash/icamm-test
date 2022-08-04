import React, { useState, useEffect } from "react";

const NavItem = ({ name, link }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href={link}
      className="md:visible invisible flex flex-col items-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p
        className={`${
          isHover ? "text-whitesmoke" : "text-white"
        } mx-4 my-2 duration-300 font-ubuntu md:text-lg`}
      >
        {name}
      </p>
      {/* <div
        className={`${
          !isHover ? "w-1/2" : "w-1/5"
        } transition-all bg-white h-0.5 rounded-full`}
      ></div> */}
    </a>
  );
};

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });

  return (
    <nav className="fixed z-10 h-auto w-full">
      <div
        className={`${
          !color ? "bg-transparent" : "bg-green shadow-xl"
        } w-full flex items-center justify-center  text-white py-2 pb-4 ease-in-out transition-colors`}
      >
        <div className="flex items-center justify-center w-fit">
          <a href="#section1">
            <p
              className={`font-ubuntu font-bold text-2xl color ml-5 transition-all ${
                !color ? "opacity-0" : "opacity-100"
              }`}
            >
              icamm 2023
            </p>
          </a>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-3 text-lg pr-10">
            <NavItem name="Important Dates" link="#section2" />
            <NavItem name="About" link="#section3" />
            <NavItem name="Theme" link="#section5" />
            <NavItem name="Speakers" link="#section7" />
            <NavItem name="Submission" link="#section8" />
            <NavItem name="Registration" link="#section9" />
            {/* <NavItem name="Journal Publications" link="#section13" /> */}
            <NavItem
              name="Brochure"
              link="https://drive.google.com/file/d/1A5VMjIReOJII-XctR6UVAGESS9v_q2oi/view?usp=sharing"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
