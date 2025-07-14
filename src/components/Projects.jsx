import LazyLoad from "react-lazy-load";
import {
  project1Img,
  project2Img,
  project3Img,
  project4Img,
} from "../assets/images";

const testimonials = [
  {
    name: "Hafnas",
    details: "3BHK - 4800Sq.ft",
    location: "Vadakara",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-07_p32vml.png",
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Sachin",
    details: "3BHK - 1904Sq.ft",
    location: "Kakkodi",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-06_cfmx7w.png",
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Dr Balakrishnan",
    details: "3BHK - 2700Sq.ft",
    location: "Calicut ULCCS One Anthum",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-10_crf7pw.png",
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Vyshakh",
    details: "5BHK - 2981Sq.ft",
    location: "Kottayam",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/vyshak_dimtsk.jpg",
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Cisel Binoy",
    details: "4BHK - 2250Sq.ft",
    location: "Vellimadukunnu, Calicut",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-05_mudutl.png",
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Ashik",
    details: "5BHK - 4800Sq.ft",
    location: "Kunnamkulam",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-03_hzoxql.png",
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },

  {
    name: "Mubjina",
    details: "3BHK - 2,049Sq.ft",
    location: "Kannur",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-01_r1ug6e.png",
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Satheesh",
    details: "4BHK - 2250Sq.ft",
    location: "Thrissur",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-08_gwccir.png",
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Arjun Mayanad",
    details: "3BHK - 2,049Sq.ft",
    location: "Calicut",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-09_atkbww.png",
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Ashraf",
    details: "3BHK - 6250Sq.ft",
    location: "Chaliyam",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-11_wviwwt.png",
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Rahman",
    details: "3BHK - 6000Sq.ft",
    location: "Pattambi, Commercial space",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-02_xl1fqv.png",
    className:
      "h-60 lg:h-96 xl:h-[470px] object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
  {
    name: "Soma Sundaran",
    details: "3BHK - 1330Sq.ft",
    location: "Karaparamb",
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/project/2-12_xzehmk.png",
    className:
      "h-60 lg:h-80 xl:h-96 object-cover w-full md:rounded-3xl lg:rounded-[2.6rem]",
  },
];

const arr = [4, 6, 7, 8, 9, 11];

const Projects = () => {
  return (
    <section
      id="testimonies"
      className="pt-10 md:pt-14 lg:pt-20 pb-11 bg-white projectsection"
    >
      <div className="max-w-full md:px-10 lg:px-16 xl:px-32">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-14 md:mb-16 space-y-5 lg:mb-24 text-center">
            <p className="text-lg md:text-xl text-gray-700 text-center projectHead">
              PROJECTS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6 xl:gap-11 projectSec">
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
              <div className="relative rounded-3xl">
                <LazyLoad>
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className={`transition-transform duration-300   ${
                      testimonial.className || ""
                    } group-hover:scale-105 object-cover rounded-3xl`}
                  />
                </LazyLoad>

                <p className="absolute inset-0 flex items-center bg-black bg-opacity-45 justify-center text-white opacity-0 duration-300 group-hover:opacity-100 transition-transform project-bg group-hover:scale-105">
                  {testimonial.name}
                </p>

                <div className="absolute top-0 left-0 h-full w-1/2  bg-black bg-opacity-0 text-white p-4 opacity-0 group-hover:opacity-100  duration-300 transition-transform group-hover:scale-105 projectheight rounded-full">
                  <h3 className="text-lg font-semibold projectsdetails">
                    {testimonial.details}
                  </h3>
                  <p className="mt-2 text-sm projectheight">
                    {testimonial.location}
                  </p>
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
