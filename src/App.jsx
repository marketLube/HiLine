import React, { Suspense, useState, useEffect } from "react";

import {
  constructionImg,
  consultingImg,
  interiorImg,
  propertyImg,
} from "./assets/images";
import ExperienceShowcase from "./components/ExperienceShowcase";

import Projects from "./components/Projects";
import ClientStories from "./components/ClientStories";
import InnovatingSpaces from "./components/InnovatingSpaces";
import Footer from "./components/Footer";
import Services from "./components/Services";
import HeadBanner from "./components/HeadBanner";
import Contact from "./components/Contact";

function App() {
  const [activeHash, setActiveHash] = useState(window.location.hash);

  // Initialize AOS animation on component mount
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <div
        id="home"
        className={`${
          activeHash === "/" ? "text-gray-800 bg-[#282525] p-4" : ""
        }`}
      >
        <HeadBanner />
      </div>

      <div className="bg-[#282525] px-2 md:px-5 lg:px-4 pt-3 md:pt-5 lg:pt-1 ">
        <div
          id="about"
          className={`${
            activeHash === "#about" ? "text-gray-800 bg-white" : ""
          }`}
        >
          <ExperienceShowcase />
        </div>

        <div
          id="projects"
          className={`${
            activeHash === "#projects" ? "text-gray-800 bg-white" : ""
          }`}
        >
          <Projects />
        </div>
        <div
          id="testimonial"
          className={`${
            activeHash === "#testimonial" ? "text-gray-800 bg-white" : ""
          }`}
        >
          <ClientStories />
        </div>
        <InnovatingSpaces />
        <div className="relative">
          <div
            id="contact"
            className={`sticky bottom-0 flex flex-col items-center justify-center z-10 rounded-b-[6rem] contactdetail contact-body  ${
              activeHash === "#contact" ? "text-gray-800 bg-white" : ""
            }`}
          >
            <Contact />
          </div>

          {/* <div className="h-screen bg-transparent"></div> */}
          <div className="sticky bottom-0 h-[48rem] flex flex-col items-center justify-center foot">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
