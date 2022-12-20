import React from "react";
import Header from "./Header";
import { FiMail, FiTrello, FiBookOpen } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";

const Section8 = () => {
  return (
    <section
      id="section8"
      className="w-screen h-fit px-6 py-24 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-whitesmoke"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header theme="dark" subtext="call for" text="papers" />
        <div className="flex-1 "></div>
        <div className="text-black lg:max-w-[60%] pt-16 font-poppins text-justify">
          <p>
            Authors are encouraged to submit an electronic version of their
            original research papers in the prescribed format available in the
            ICAMM 2023 website. Please ensure that the content submitted has not
            been part of any other conference proceedings or journal papers. All
            papers would be subject to rigorous review. All accepted papers,
            after the receipt of author registration will appear in full-length
            in the conference proceedings (CD format only).
          </p>
          <div className="mt-12">
            <a
              className="font-bold text-2xl font-ubuntu flex space-x-2 items-center mt-4 bg-dark-green text-white px-6 py-2 rounded-lg shadow-lg w-fit hover:scale-[99%] transition-all ease-in-out"
              href="https://docs.google.com/forms/d/1Ha1zpTxoUpzalswTOfK5NH9tLqKxyCWEXQLBqdMrMnQ"
              target="_blank"
            >
              <AiOutlineForm size={32} />
              <p>Paper submission</p>
            </a>
          </div>
          <div className="mt-12">
            For all communications use the e-mail address :
          </div>
          <div className="text-xl font-ubuntu flex space-x-2 items-center mt-2 px-4">
            <FiMail size={24} />
            <p className="">icamm2023@psgtech.ac.in</p>
          </div>
          <button className="text-xl font-ubuntu flex space-x-2 items-center mt-8 bg-dark-green text-white px-4 py-2 rounded-lg shadow-lg w-fit hover:scale-[99%] transition-all ease-in-out">
            <FiBookOpen size={24} />
            <a
              href="https://drive.google.com/file/d/13rhceqk-7PpNlIt1g-eJir_1BPvlhxWC/view?usp=sharing"
              target="_blank"
              className=""
            >
              Author Guidelines
            </a>
          </button>

          <button className="text-xl font-ubuntu flex space-x-2 items-center mt-4 bg-dark-green text-white px-5 py-2 rounded-lg shadow-lg w-fit hover:scale-[99%] transition-all ease-in-out">
            <FiTrello size={24} />
            <a
              href="https://drive.google.com/file/d/17Jb0cdcMsqZ53UBCFfDNMngx0FtrBveR/view?usp=share_link"
              target="_blank"
            >
              Template
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
