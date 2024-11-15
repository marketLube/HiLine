import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegClock } from "react-icons/fa";

const ExperienceShowcase = () => {
  return (
    <div className="relative w-full bg-white rounded-t-[6rem] -mt-16">
      <div className="relative container mx-auto text-center py-20 z-10">
        <div className="w-full flex px-12">
          <div className="w-1/2 h-80 flex justify-center items-center">
            <h1 className="text-8xl font-semibold leading-none">10</h1>
            <div className="ml-4 flex flex-col justify-center h-full">
              <p className="text-2xl leading-tight">
                years of transforming places and
              </p>
              <p className="text-2xl leading-tight">
                creating plans that improve life
              </p>
            </div>
          </div>

          <div className=" w-1/2 grid grid-cols-2 grid-rows-2 gap-4 p-4">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-semibold leading-none">12</h1>
              <span className="text-black">Certified Engineers</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-semibold leading-none">180+</h1>
              <span className="text-black">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-semibold leading-none">8+</h1>
              <span className="text-black">Cities</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-semibold leading-none">250</h1>
              <span className="text-black">Project Done</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-300"></div>
        <div className="w-full px-24 grid grid-cols-3 gap-4 h-80">
          <div className="flex flex-col justify-center items-center">
            <FaRegClock className="w-16 h-16 border border-black rounded-full p-4 " />
            <p className="text-2xl leading-tight mt-3">On Time Delivery</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <VscWorkspaceTrusted className="w-16 h-16 border border-black rounded-full p-4 " />
            <p className="text-2xl leading-tight mt-3">Life Long Service</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <MdOutlineWorkspacePremium className="w-16 h-16 border border-black rounded-full p-3 " />
            <p className="text-2xl leading-tight mt-3">Premium Material</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceShowcase;
