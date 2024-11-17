import React from "react";
import {
  project1Img,
  project2Img,
  project3Img,
  project4Img,
} from "../assets/images";

const testimonials = [
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project1Img,
    className: "h-[470px] w-full rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project2Img,
    className: "h-96 w-full rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project1Img,
    className: "h-[470px] w-full rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project3Img,
    className: "h-96 w-full rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project4Img,
    className: "h-[470px] w-full rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project3Img,
    className: "h-96 w-full rounded-[2.6rem]",
  },
];

const Projects = () => {
  return (
    <section id="testimonies" className="pt-20 pb-11 bg-white">
      <div className="max-w-full px-8 md:px-10 lg:px-36">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-24 md:text-center">
            <p className="text-xl text-gray-700 md:text-center">PROJECTS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`text-sm leading-6 relative ${
                index === 4 ? "-top-20" : ""
              }`}
            >
              <div className="relative group">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className={testimonial.className || ""}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
