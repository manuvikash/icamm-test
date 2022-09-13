import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Navbar from "./components/Navbar";
import ShapeDivider from "./components/ShapeDivider";
import "./styles/tailwind.output.css";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Footer from "./components/Footer";
import Section13 from "./components/Section13";

const App = () => {
  return (
    <main className="w-screen overflow-x-hidden">
      <Navbar />
      <Section1 />
      <div className="translate-y-0 hidden lg:block">
        <ShapeDivider />
      </div>
      {/* Jounrla Publication */}
      <Section13 />
      {/* About the Institution */}
      <Section3 />
      {/* About the Department */}
      <Section4 />
      {/* Theme of Conference */}
      <Section5 />
      {/* Important Topics */}
      <Section6 />
      {/*Speakers List*/}
      <Section7 />
      {/* Call for Papers */}
      <Section8 />
      {/* Important Dates */}
      <Section2 />
      <div id="reg" className="mt-20 translate-y-0 hidden lg:block">
        <ShapeDivider theme="green" />
      </div>
      {/* Register Button */}
      <Section12 />
      {/*About the Registration */}
      <Section9 />
      {/* Organizing Committee */}
      <Section10 />
      {/* Venue and Contact */}
      <Section11 />
      <Footer />
    </main>
  );
};

export default App;
