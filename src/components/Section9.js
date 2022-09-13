import Header from "./Header";

const Row = ({ category = "cat", price = "price", className = "" }) => {
  return (
    <div className={`bg-whitesmoke py-2  font-poppins flex ${className}`}>
      <p className="text-left ml-2 md:ml-5 w-3/5">{category}</p>
      <div className="flex-1"></div>
      <p className=" bg-light-green relative right-2 rounded-lg px-5 py-0.5 text-center items-center flex">
        {price}
      </p>
    </div>
  );
};

const Section9 = () => {
  return (
    <section
      id="section9"
      className="w-screen h-fit px-6 py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-green"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header theme="light" subtext="about the" text="registration" />
        <div className="flex-1 "></div>
        <div className="text-white lg:max-w-[60%] pt-16 font-poppins text-justify">
          <p className="">
            It is mandatory that atleast one author of each accepted paper
            register and present the paper in the technical sessions. All
            accepted papers will be considered for presentation only after the
            payment of registration fee.
          </p>
        </div>
      </div>
      <div className="">
        <div className="rounded-md grid grid-rows-5 bg-whitesmoke w-full h-fit mt-20 ">
          <div
            style={{
              borderTopLeftRadius: "0.375rem",
              borderTopRightRadius: "0.375rem",
            }}
            className=" bg-dark-green font-ubuntu flex items-center justify-center py-2 text-white "
          >
            Indian Delegates
          </div>
          <Row category="Academicians" price="₹1500" />
          <Row
            category="Industry / R&D Institutuion Participants"
            price="₹2500"
          />
          <Row
            category="Full Time Research Scholars / Students"
            price="₹1000"
          />
          <Row
            category="Accompanying guests / Spouse"
            price="₹1000"
            className="rounded-md"
          />
        </div>

        <div className=" rounded-md grid grid-rows-3 bg-whitesmoke w-full h-fit mt-20">
          <div
            style={{
              borderTopLeftRadius: "0.375rem",
              borderTopRightRadius: "0.375rem",
            }}
            className="bg-dark-green font-ubuntu flex items-center justify-center py-2 text-white"
          >
            Foreign Delegates
          </div>
          <Row category="Academicians" price="200 USD" />
          <Row
            category="Accompanying guests / Spouse"
            price="100 USD"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="text-lg font-poppins text-white">
        <div className="text-xl font-bold mt-4">Payment Details</div>
        <div className="mt-6">
          Account Holder - PSG Center for Non Formal and Continuing Education
        </div>
        <div className="">Account Number - 1481267367</div>
        <div className="">IFSC Code - CBIN0280913</div>
        <div className="">Bank Name - Central Bank of India</div>
        <div className="">MICR Code - 641016006</div>
      </div>

      <div className=" items-start my-6 pt-8 lg:space-y-0">
        <p className="text-white text-2xl font-ubuntu font-semibold">
          Accomodation & Visa
        </p>
        <p className="text-white font-poppins pt-6">
          Limited accommodation for registered delegates is available at the
          guest house / student hostels of the college, on a chargable basis
          subject to availability. Requests for the same must in advance. All
          overseas citizens travelling to India require a visa. A general portal
          with information about consulates and visa services for India is at
          <a href="https://www.visatoindia.com" className="">
            &nbsp; https://www.visatoindia.com
          </a>
        </p>
      </div>
    </section>
  );
};
export default Section9;
