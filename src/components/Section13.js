import React from "react";
import Header from "./Header";

const Section13 = () => {
  return (
    <section
      className="w-screen h-fit px-6  pb-24 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white"
      id="section13"
    >
      <div className="flex flex-col lg:flex-row items-start pt-32">
        <Header theme="dark" subtext="journal" text="publication" />
        <div className="flex-1 "></div>
        <div className="text-black lg:max-w-[60%] pt-16 font-poppins text-justify">
          <p>
            High calibre papers selected through a peer review process, will be
            taken into consideration for publication in one of the journals
            listed below that are indexed in Web of Science/UGC CARE list with a
            nominal publication fee.
          </p>

          <div className="font-ubuntu text-lg text-dark-green flex space-x-2 items-center mt-2 px-4">
            <ul className="pt-4 space-y-4 font-semibold">
              <li>
                1. Advances and Applications in Mathematical Sciences, Mili
                Publications, ISSN: 0974-6803
              </li>
              <li>
                2. Communications Faculty of Sciences University of Ankara
                Series A1: Mathematics and Statistics, ISSN: 1303-5991
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section13;
