import React from "react";
import Header from "./Header";

const Section2 = () => {
  return (
    <section
      id="section2"
      className="w-screen h-fit px-6 py-24 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col "
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <Header
          subtext="important"
          text="dates"
          className="lg:-translate-y-16"
        />
        <div className="lg:block lg:flex-1 hidden"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 lg:gap-x-10 mt-16">
          <DateContext
            className=""
            monthyear="November 2022"
            date="15"
            text="Paper Submission"
          />
          <DateContext
            className=""
            monthyear="November 2022"
            date="30"
            text="Notification of Acceptance"
          />
          <DateContext
            className=""
            monthyear="December 2022"
            date="15"
            text="Camera Ready Paper"
          />
          <DateContext
            className=""
            monthyear="December 2022"
            date="15"
            text="Author Registration"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;

const DateContext = ({ monthyear, date, text, className = "" }) => {
  return (
    <div className={`flex items-center flex-col ${className}`}>
      <p className="font-poppins">{monthyear}</p>
      <p className="font-ubuntu text-7xl font-bold text-dark-green">{date}</p>
      <p className="font-poppins text-center w-[15ch]">{text}</p>
    </div>
  );
};
