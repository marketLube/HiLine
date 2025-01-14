import React, { useEffect, useState } from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegClock } from "react-icons/fa";

import {
  constructionImg,
  consultingImg,
  interiorImg,
  propertyImg,
} from "../assets/images";
import Services from "./Services";

const ExperienceShowcase = () => {
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
    <div className="relative w-full bg-white rounded-t-3xl md:rounded-t-[4rem] lg:rounded-t-[3rem] -mt-8 md:-mt-16 ">
      <div className="relative container mx-auto text-center z-10">
        <div className="w-full flex items-center justify-center md:px-12 whitesection">
          <div className="hidden w-1/2 md:h-72 lg:h-96 xl:h-[30rem] md:flex justify-center items-center yearoftrans">
            <h1 className="md:text-5xl lg:text-7xl xl:text-8xl font-semibold leading-none ten">
              5+
            </h1>
            <div className="md:ml-2 lg:ml-4 flex flex-col justify-center h-full parentofyear">
              <p className="lg:text-xl xl:text-2xl leading-tight years">
                Years of transforming places and
              </p>
              <p className="lg:text-xl xl:text-2xl leading-tight creating">
                creating plans that improve life
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-4 md:grid-cols-2 grid-rows-2 xl:gap-4 p-4 gridsection">
            <div className="flex flex-col items-center md:mb-5">
              <h1 className="text-lg md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none ten">
                5+
              </h1>
              <span className="text-[9px] text-black md:text-sm lg:text-base numberhead">
                Certified Engineers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none ten">
                100+
              </h1>
              <span className="text-[9px] text-black md:text-sm lg:text-base numberhead">
                Happy Clients
              </span>
            </div>
            <div className="flex flex-col items-center md:mt-5">
              <h1 className="text-lg md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none ten">
                100+
              </h1>
              <span className="text-[9px] text-black md:text-sm lg:text-base numberhead">
                All Kerala
              </span>
            </div>
            <div className="flex flex-col items-center md:mt-5">
              <h1 className="text-lg md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none ten">
                100+
              </h1>
              <span className="text-[9px] text-black md:text-sm lg:text-base numberhead">
                Project Done
              </span>
            </div>
          </div>
        </div>
        <div className="border border-gray-300"></div>
        <div className="w-full px-5 p-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 h-80 md:h-56 lg:h-64 xl:h-80 justify-items-center items-center whiteSecSecond">
          <div className="flex flex-col justify-center items-center">
            <FaRegClock className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border border-black rounded-full p-2 lg:p-3 xl:p-4 " />
            <p className="text-xs font-medium md:text-base lg:text-xl xl:text-2xl leading-tight mt-3">
              On Time Delivery
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <VscWorkspaceTrusted className=" w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border border-black rounded-full p-2 lg:p-3 xl:p-4 " />
            <p className="text-xs font-medium md:text-base lg:text-xl xl:text-2xl leading-tight mt-3">
              Life Long Service
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-auto col-span-2 md:col-span-1">
            <MdOutlineWorkspacePremium className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border border-black rounded-full p-1 lg:p-2 xl:p-3 " />
            <p className="text-xs font-medium md:text-base lg:text-xl xl:text-2xl leading-tight mt-3">
              Premium Material
            </p>
          </div>
        </div>
      </div>

      <div className="relative servicecomp">
        <div
          id="service"
          className={`sticky top-0 h-screen  project-img flex flex-col items-center justify-center  ${
            activeHash === "#service" ? "text-gray-800 bg-white" : ""
          }`}
        >
          <Services
            backgroundImage={
              "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736850663/construction_hpsn0r.png"
            }
            title="CONSTRUCTION"
            description="We build enduring, high-quality structures with
precision, craftsmanship, and a commitment to
excellence."
            parentClassName="mt-0"
            curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem] overflow-hidden"
          />
        </div>

        <div className="sticky top-0 h-screen project-img flex flex-col items-center justify-center ">
          <Services
            backgroundImage={
              "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736850815/consulting_bvn7wy.jpg"
            }
            title="CONSULTING"
            description="Our consulting services provide expert guidance at every project stage, ensuring efficient planning, smart solutions, and successful outcomes."
            parentClassName="mt-0"
            curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem] overflow-hidden"
          />
          {/* <button className="absolute top-56 md:top-[27rem] lg:top-[25rem] right-6 md:right-16 lg:right-28 xl:right-32 text-black text-xs md:text-sm lg:text-xl xl:text-2xl flex items-center bg-black rounded-3xl px-3 xl:px-7 py-1 xl:py-4 z-150">
            <span className="uppercase ">WHAT WE DO</span>
          </button> */}
        </div>
        <div className="sticky top-0 h-screen project-img flex flex-col items-center justify-center ">
          <Services
            backgroundImage={
              "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736851154/interiorDesign_o2qfmz.jpg"
            }
            title="INTERIOR DESIGN"
            description="We create inspiring, functional interiors tailored to reflect your style and optimize every space with elegance and purpose."
            parentClassName="mt-0"
            curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem] overflow-hidden"
          />
        </div>
        <div className="sticky top-0 h-screen project-img flex flex-col items-center justify-center  rounded-t-[1.5rem] md:rounded-t-[4.5rem] lg:rounded-t-[6.5rem] xl:rounded-t-[8rem] z-[4]">
          <Services
            backgroundImage={
              "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736850830/property_ejuvpb.png"
            }
            title="PROPERTY MANAGEMENT"
            description="Our property management services ensure your assets are well-maintained, efficiently managed, and consistently add value, giving you peace of mind."
            parentClassName="mt-0"
            curveClassName="rounded-[1.5rem] md:rounded-[4.5rem] lg:rounded-[6.5rem] xl:rounded-[8rem] overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceShowcase;
