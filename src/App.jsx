import React, { Suspense, useState, useEffect } from "react";
const HeadBanner = React.lazy(() => import("./components/HeadBanner"));
const ExperienceShowcase = React.lazy(() =>
  import("./components/ExperienceShowcase")
);
const Services = React.lazy(() => import("./components/Services"));
import {
  constructionImg,
  consultingImg,
  interiorImg,
  propertyImg,
} from "./assets/images";
const Projects = React.lazy(() => import("./components/Projects"));
const ClientStories = React.lazy(() => import("./components/ClientStories"));
const InnovatingSpaces = React.lazy(() =>
  import("./components/InnovatingSpaces")
);
const Contact = React.lazy(() => import("./components/contact"));
const Footer = React.lazy(() => import("./components/Footer"));

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
        <div className="bg-[#1A1A1A] p-3 md:p-5 lg:p-7">
          <HeadBanner />
          <div
            id="about"
            className={`${
              activeHash === "#about" ? "text-gray-800 bg-white" : ""
            }`}
          >
            <ExperienceShowcase />
          </div>

          <div
            id="service"
            className={`${
              activeHash === "#about" ? "text-gray-800 bg-white" : ""
            }`}
          >
            <Services
              backgroundImage={constructionImg}
              title="CONSTRUCTION"
              description="We build enduring, high-quality structures with precision, craftsmanship, and a commitment to excellence."
              parentClassName="-mt-5"
              curveClassName="rounded-t-3xl rounded-t-3xl md:rounded-t-[4.5rem] lg:rounded-t-[6.5rem] xl:rounded-t-[8rem]"
            />
          </div>
          <div>
            <Services
              backgroundImage={consultingImg}
              title="CONSULTING"
              description="Our consulting services provide expert guidance at every project stage, ensuring efficient planning, smart solutions, and successful outcomes."
              parentClassName="mt-0"
              curveClassName="rounded-t-3xl md:rounded-t-[4.5rem] lg:rounded-t-[6.5rem] xl:rounded-t-[8rem]"
            />
          </div>
          <div>
            <Services
              backgroundImage={interiorImg}
              title="INTERIOR DESIGN"
              description="We create inspiring, functional interiors tailored to reflect your style and optimize every space with elegance and purpose."
              parentClassName="mt-0"
              curveClassName="rounded-t-3xl md:rounded-t-[4.5rem] lg:rounded-t-[6.5rem] xl:rounded-t-[8rem]"
            />
          </div>
          <div>
            <Services
              backgroundImage={propertyImg}
              title="PROPERTY MANAGEMENT"
              description="Our property management services ensure your assets are well-maintained, efficiently managed, and consistently add value, giving you peace of mind."
              parentClassName="mt-0"
              curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] rounded-[8rem]"
            />
          </div>

          <div
            id="service"
            className={`${
              activeHash === "#service" ? "text-gray-800 bg-white" : ""
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
