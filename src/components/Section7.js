import React from "react";
import Header from "./Header";
import ReinNobel from "../assets/Nobel.png";
import Krishnamoorthy from "../assets/krishnamoorthy2.png";
import Dharmaraja from "../assets/dharmar@SFO.png";
import Satyananda from "../assets/satyananda.jpg";
import HugoLeiva from "../assets/Hugo_Leiva_1.jpg";
import SivaguruSritharan from "../assets/RUAS_VC1.jpg";
import Jitendra from "../assets/jitendra-kumar.jpg";
import Radhakrishnan from "../assets/Radhakrishnan-Balu.jpg";
import Swaminathan from "../assets/Swaminathan-Anbhu.jpg";
import Arun from "../assets/Viswanathan-Arunachalam.jpg";
import Vidyotama from "../assets/Vidyottama-Jain.png";

const SpeakersList = [
  {
    name: "Prof. Rein Nobel",
    desc: "Vrije University, Amsterdam, Netherlands",
    image: ReinNobel,
  },
  {
    name: "Prof.A.Krishnamoorthy",
    desc: "Director, Center for Research in Mathematics,\n CMS College Kottayam, Kerala, India",
    image: Krishnamoorthy,
  },
  {
    name: "Prof.S.Dharmaraja",
    desc: "IIT Delhi, India",
    image: Dharmaraja,
  },
  {
    name: "Prof. Satyananda Panda",
    desc: "NIT Calicut, India",
    image: Satyananda,
  },
  {
    name: "Prof. Hugo Leiva",
    desc: "Yachay Tech, University of Andes, Venezuela",
    image: HugoLeiva,
  },
  {
    name: "Dr. Sivaguru S. Sritharan",
    desc: "Chief Technologist, Go.AI Inc., Dayton, Ohio, USA",
    image: SivaguruSritharan,
  },
  {
    name: "Prof. rer. nat. Jitendra Kumar",
    desc: "IIT Kharagpur, India",
    image: Jitendra,
  },
  {
    name: "Prof.A.Swaminathan",
    desc: "IIT Roorkee, India",
    image: Swaminathan,
  },
  {
    name: "Prof. Balu Radhakrishnan",
    desc: "Research scientist, US Army research Lab, Adelphi, MD, USA",
    image: Radhakrishnan,
  },
  {
    name: "Prof. Viswanathan Arunachalam",
    desc: "National University of Colombia, Colombia",
    image: Arun,
  },
  {
    name: "Prof. Vidyottama Jain",
    desc: "Central University of Rajasthan, India",
    image: Vidyotama,
  },
];

const Section7 = () => {
  return (
    <section
      id="section7"
      className="w-screen px-5 h-fit py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white"
    >
      <div className="flex flex-col lg:flex-row items-start w-full">
        <Header theme="dark" subtext="this year" text="speakers" />
        <div className="grid grid-cols-1 px-6 space-y-4 md:space-y-0 md:px-0 md:grid-cols-3 lg:grid-cols-3 gap-8 text-black w-screen pt-24 md:pt-48 -mt-8 items-start justify-start">
          {SpeakersList.map((speaker, index) => (
            <div className="flex flex-col items-start lg:justify-start w-screen lg:w-fit space-y-1">
              <div
                className="aspect-square w-56 filter grayscale"
                style={{
                  backgroundImage: `url(${speaker.image})`,
                  backgroundPosition: "50% 20%",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="font-semibold font-poppins">{speaker.name}</p>
              <p className="text-sm text-start font-poppins text-green w-[30ch] lg:w-auto">
                {speaker.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
