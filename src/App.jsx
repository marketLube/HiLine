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
    <div>
      <Suspense
        fallback={
          <section className="w-full rounded-xl h-screen bg-white flex flex-col justify-center items-center">
            <div
              className="animate-spin inline-block size-16 border-[3px] border-current border-t-transparent text-blue-800 rounded-full"
              role="status"
              aria-label="loading"
            ></div>
            <span className="text-gray-500 mt-4">Loading...</span>
          </section>
        }
      >
        <div className="bg-[#1A1A1A] p-3 md:p-5 lg:p-4">
          <div
            id="/"
            className={`${activeHash === "/" ? "text-gray-800 bg-white" : ""}`}
          >
            <HeadBanner />
          </div>
          <div
            id="about"
            className={`${
              activeHash === "#about" ? "text-gray-800 bg-white" : ""
            }`}
          >
            <ExperienceShowcase />
          </div>

          <div className="relative">
            <div
              id="service"
              className={`sticky top-0 h-screen flex flex-col items-center justify-center  ${
                activeHash === "#service" ? "text-gray-800 bg-white" : ""
              }`}
            >
              <Services
                backgroundImage={constructionImg}
                title="CONSULTING"
                description="Our consulting services provide expert guidance at every project stage, ensuring efficient planning, smart solutions, and successful outcomes."
                parentClassName="mt-0"
                curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem]"
              />
            </div>

            <div className="sticky top-0 h-screen flex flex-col items-center justify-center ">
              <Services
                backgroundImage={consultingImg}
                title="CONSULTING"
                description="Our consulting services provide expert guidance at every project stage, ensuring efficient planning, smart solutions, and successful outcomes."
                parentClassName="mt-0"
                curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem]"
              />
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center ">
              <Services
                backgroundImage={interiorImg}
                title="INTERIOR DESIGN"
                description="We create inspiring, functional interiors tailored to reflect your style and optimize every space with elegance and purpose."
                parentClassName="mt-0"
                curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem]"
              />
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center  rounded-t-[1.5rem] md:rounded-t-[4.5rem] lg:rounded-t-[6.5rem] xl:rounded-t-[8rem] z-[4]">
              <Services
                backgroundImage={propertyImg}
                title="PROPERTY MANAGEMENT"
                description="Our property management services ensure your assets are well-maintained, efficiently managed, and consistently add value, giving you peace of mind."
                parentClassName="mt-0"
                curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem]"
              />
            </div>
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
          <div
            id="contact"
            className={`${
              activeHash === "#contact" ? "text-gray-800 bg-white" : ""
            }`}
          >
            <Contact />
          </div>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
