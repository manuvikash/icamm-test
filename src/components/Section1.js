import React from "react";
import PSGCollegeLanding from "../assets/psg_landing.jpg";
import PSGLogo from "../assets/PSG_logo.png";
import DRDOLogo from "../assets/DRDO_logo.png";
import SpringerLogo from "../assets/Springer_logo.png";
import Marquee from "react-fast-marquee";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";

const Section1 = () => {
  return (
    <section
      className="w-screen h-fit lg:h-[calc(100vh-2.5rem)] px-6 py-36 md:py-24 lg:px-[calc(100vw/12)] space-y-4 md:space-y-2 lg:flex lg:flex-col lg:"
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
      <div className="flex flex-row my-10">
        <p className="text-xl font-ubuntu flex space-x-2 items-center mt-6 bg-dark-green text-white px-4 lg:py-2 md:py-0 rounded-lg shadow-lg w-fit">
          <FiCalendar size={24} />
          <p>4th - 6th January 2023</p>
        </p>
      </div>
      <div className="flex-1 min-h-[2rem]"></div>
      <div className="flex flex-col lg:flex-row">
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
        <div className="flex-1 min-h-[2rem]"></div>
        <div className="flex items-center space-x-4">
          <img src={DRDOLogo} alt="" className=" h-28" />
          <div className="font-poppins text-white text-base lg:text-lg">
            <p className="">Sponsored By</p>
            <p className="font-semibold">
              Defence Research and Development Organisation,
              <br />
              Ministry of defence, Government of India
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-[2rem]"></div>
      <div className="md:flex-1 md:min-h-[2rem] lg:flex-1 lg:min-h-[2rem]"></div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-4">
        <div>
          <img src={SpringerLogo} alt="" className=" h-28" />
        </div>
        <div className="font-poppins text-white text-xl">
          <span className="font-bold text-navy">
            <a href="https://www.springer.com/journal/12597/" target="_blank">
              Opsearch
            </a>
          </span>
          <span>&nbsp;-&nbsp;Published by Springer</span>
          <br />
          <span>
            Has accepted to publish the high caliber papers in a special
            edition.
          </span>
          <br />
          <br />
          <span>Guest Editors -</span>
          <span className="font-bold text-navy">
            <a href="#section7">&nbsp;Prof. Dharmaraja & Prof. Rein Nobel</a>
          </span>
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
    </section>
  );
};

export default Section1;
