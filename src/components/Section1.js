import React from "react";
import PSGCollegeLanding from "../assets/psg_landing.jpg";
import PSGLogo from "../assets/PSG_logo.png";
import Marquee from "react-fast-marquee";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";

const Section1 = () => {
  return (
    <section
      className="w-screen h-fit lg:h-[calc(100vh-2.5rem-5px)] px-6 py-36 md:py-24 lg:px-[calc(100vw/12)] space-y-4 md:space-y-2 lg:flex lg:flex-col lg:"
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
      <span>
        <Marquee
          gradient={false}
          pauseOnHover={true}
          className="md:visible invisible pt-20"
          speed={50}
        >
          <div className=" ml-96 mr-2 font-poppins bg-slate rounded-md  text-green text-base flex text-center justify-center px-4 py-2 lg:text-lg">
            Journal Publications:
          </div>
          <div className="mx-2 font-poppins bg-slate rounded-md  text-white text-base flex text-center justify-center px-4 py-2 lg:text-lg">
            Advances and Applications in Mathematical Sciences, Mili
            Publications, ISSN: 0974-6803
          </div>
          <div className="mx-2 font-poppins bg-slate rounded-md  text-white text-base flex text-center justify-center px-4 py-2 lg:text-lg">
            Communications Faculty of Sciences University of Ankara Series A1:
            Mathematics and Statistics, ISSN: 1303-5991
          </div>
          <div className="mx-2 font-poppins bg-slate rounded-md  text-white text-base flex text-center justify-center px-4 py-2 lg:text-lg">
            Bulletin of the Calcutta Mathematical Society, CMS Publications,
            ISSN: 0008-0659
          </div>
        </Marquee>
      </span>
      <br />
      <div className="flex flex-row">
      <p className="text-xl font-ubuntu flex space-x-2 items-center mt-6 bg-white text-dark-green px-4 lg:py-2 md:py-0 rounded-lg shadow-lg w-fit">
        <FiCalendar size={24} />
        <p>4th - 6th January 2023</p>
      </p>
      
      <a
        className="ml-10 text-xl font-ubuntu flex space-x-2 items-center mt-6 bg-turquoise text-slate font-bold px-4 lg:py-2 md:py-0 rounded-lg shadow-lg w-fit hover:bg-dark-green hover:text-white"
        href="https://docs.google.com/forms/d/1Ha1zpTxoUpzalswTOfK5NH9tLqKxyCWEXQLBqdMrMnQ"
        target="_blank"
      >
        <AiOutlineForm size={24} />
        <p>Paper submission</p>
      </a>
      </div>
    </section>
  );
};

export default Section1;
