import React from "react";
import PSGCollegeLanding from "../assets/psg_landing.jpg";
import PSGLogo from "../assets/PSG_logo.png";
import ShapeDivider from "./ShapeDivider";
import { FiFileText } from "react-icons/fi";

const Section1 = () => {
  return (
    <section
      className="w-screen h-fit lg:h-[calc(100vh-2.5rem-5px)] px-6 py-36 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col lg:"
      style={{
        background: `linear-gradient(to right, rgba(33,104,105,0.7) 10%, rgba(73,160,120,0.7) 90%), url(${PSGCollegeLanding})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="section1"
    >
      <h1 className="font-bold font-ubuntu text-white text-5xl lg:text-7xl">
        icamm 2023
      </h1>
      <h2 className="text-white font-poppins text-lg lg:text-xl">
        Fifth International Conference <br />
        on Applied Mathematical Models
      </h2>
      <div className="flex-1 min-h-[2rem]"></div>
      <div className="flex items-center space-x-4">
        <img src={PSGLogo} alt="" className="invert h-28" />
        <div className="font-poppins text-white text-base lg:text-lg">
          <p className="">Conducted By</p>
          <p className="font-semibold">
            Department of Mathematics,
            <br />
            PSG College of technology
          </p>
        </div>
      </div>
      <br />
      <button className="text-xl font-ubuntu flex space-x-2 items-center mt-8 bg-white text-dark-green px-4 py-2 rounded-lg shadow-lg w-fit hover:scale-[99%] transition-all ease-in-out">
        <FiFileText size={24} />
        <a
          href="https://drive.google.com/file/d/1A5VMjIReOJII-XctR6UVAGESS9v_q2oi/view?usp=sharing"
          className=""
        >
          Download Brochure
        </a>
      </button>
    </section>
  );
};

export default Section1;
