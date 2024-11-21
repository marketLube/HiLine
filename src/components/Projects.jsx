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
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project2Img,
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project1Img,
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project3Img,
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project4Img,
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project3Img,
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },

  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project1Img,
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project2Img,
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project1Img,
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project3Img,
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project4Img,
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahul & Sreya’s",
    details: "3BHK - 2,049 Sq. ft",
    location: "Moovattupuzha",
    img: project3Img,
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
];

const Projects = () => {
  return (
    <section
      id="testimonies"
      className="pt-10 md:pt-14 lg:pt-20 pb-11 bg-white"
    >
      <div className="max-w-full md:px-10 lg:px-16 xl:px-32">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-14 md:mb-16 space-y-5 lg:mb-24 text-center">
            <p className="text-lg md:text-xl text-gray-700 text-center">
              PROJECTS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6 xl:gap-11">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`text-sm leading-6 relative group ${
                index === 10
                  ? "lg:-top-40 xl:-top-23"
                  : [4, 6, 7, 8, 9, 11].includes(index)
                  ? "lg:-top-16 xl:-top-20"
                  : ""
              }`}
            >
              <div className="relative">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className={`transition-transform duration-300 ${
                    testimonial.className || ""
                  } group-hover:scale-105`}
                />

                <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {testimonial.name}
                </p>

                <div className="absolute top-0 left-0 h-full w-1/3 bg-black bg-opacity-0 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">
                    {testimonial.details}
                  </h3>
                  <p className="mt-2 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
