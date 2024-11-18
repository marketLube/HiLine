import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegClock } from "react-icons/fa";

const ExperienceShowcase = () => {
  return (
    <div className="relative w-full bg-white md:rounded-t-[4rem] lg:rounded-t-[6rem] -mt-16">
      <div className="relative container mx-auto text-center z-10">
        <div className="w-full flex items-center px-12">
          <div className="w-1/2 md:h-72 lg:h-96 xl:h-[30rem] flex justify-center items-center">
            <h1 className="md:text-5xl lg:text-7xl xl:text-8xl font-semibold leading-none">
              10
            </h1>
            <div className="md:ml-2 lg:ml-4 flex flex-col justify-center h-full">
              <p className="lg:text-xl xl:text-2xl leading-tight">
                years of transforming places and
              </p>
              <p className="lg:text-xl xl:text-2xl leading-tight">
                creating plans that improve life
              </p>
            </div>
          </div>

          <div className=" w-1/2 grid grid-cols-2 grid-rows-2 xl:gap-4 p-4">
            <div className="flex flex-col items-center mb-5">
              <h1 className="md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none">
                12
              </h1>
              <span className="text-black md:text-sm lg:text-base">
                Certified Engineers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none">
                180+
              </h1>
              <span className="text-black md:text-sm lg:text-base">
                Happy Clients
              </span>
            </div>
            <div className="flex flex-col items-center mt-5">
              <h1 className="md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none">
                8+
              </h1>
              <span className="text-black md:text-sm lg:text-base">Cities</span>
            </div>
            <div className="flex flex-col items-center mt-5">
              <h1 className="md:text-3xl lg:text-5xl xl:text-7xl font-semibold leading-none">
                250
              </h1>
              <span className="text-black md:text-sm lg:text-base">
                Project Done
              </span>
            </div>
          </div>
        </div>
        <div className="border border-gray-300"></div>
        <div className="w-full md:px-10 lg:px-16 xl:px-24 grid grid-cols-3 gap-4 md:h-56 lg:h-64 xl:h-80">
          <div className="flex flex-col justify-center items-center">
            <FaRegClock className="md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border border-black rounded-full md:p-2 lg:p-3 xl:p-4 " />
            <p className="lg:text-xl xl:text-2xl leading-tight mt-3">
              On Time Delivery
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <VscWorkspaceTrusted className="md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border border-black rounded-full md:p-2 lg:p-3 xl:p-4 " />
            <p className="lg:text-xl xl:text-2xl leading-tight mt-3">
              Life Long Service
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <MdOutlineWorkspacePremium className="md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border border-black rounded-full md:p-1 lg:p-2 xl:p-3 " />
            <p className="lg:text-xl xl:text-2xl leading-tight mt-3">
              Premium Material
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceShowcase;
