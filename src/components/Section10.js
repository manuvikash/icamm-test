import Header from "./Header";

const Section10 = () => {
  return (
    <section
      id="section9"
      className="w-screen h-fit px-6 py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-whitesmoke"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header subtext="organizing" text="commitee" />
        <div className="flex-1 "></div>
      </div>
      <div className="my-4 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-x-8 gap-y-8">
        <div className="w-full">
          <p className="text-green text-xl font-ubuntu">Chief Patron</p>
          <p className="text-slate mt-4 font-bold text-2xl whitespace-nowrap font-poppins ">
            Thiru. L.&nbsp;Gopalakrishnan
          </p>
          <p className="text-dark-green mt-1 font-poppins w-full">
            Managing trustee
            <br />
            PSG & Sons' Managing Trust
          </p>
        </div>
        <div className="w-full">
          <p className="text-green text-xl font-ubuntu">Patron</p>
          <p className="text-slate mt-4 font-bold text-2xl font-poppins">
            Dr. K. Prakasan
          </p>
          <p className="text-dark-green mt-1 font-poppins w-full">
            Principal
            <br />
            PSG College of Technology
          </p>
        </div>
        <div className="w-full">
          <p className="text-green text-xl font-ubuntu">Convener</p>
          <p className="text-slate mt-4 font-bold text-2xl font-poppins">
            Dr. C. Porkodi
          </p>
          <p className="text-dark-green mt-1 font-poppins w-full">
            Professor & Head
            <br />
            Department of Mathematics, <br /> PSG College of Technology
          </p>
        </div>
        <div className="w-full">
          <p className="text-green text-xl font-ubuntu">Organizing Secretary</p>
          <p className="text-slate mt-4 font-bold text-2xl font-poppins">
            Dr. T. Vasanthi
          </p>
          <p className="text-dark-green mt-1 font-poppins w-full">
            Professor
            <br />
            Department of Mathematics, <br /> PSG College of Technology
          </p>
        </div>
      </div>
    </section>
  );
};
export default Section10;
