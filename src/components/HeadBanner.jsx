import React from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { image1 } from "../assets/images";
import { GrFormNextLink } from "react-icons/gr";
import LogoHiline from "./LogoHiline";

const HeadBanner = () => {
  const instagram =
    "https://www.instagram.com/hiline.developers/?igsh=eXI4dDZkMHV4N21p";
  const facebook = "https://www.facebook.com/share/1MHGRSuTjZ/?mibextid=LQQJ4d";

  return (
    <div className="relative">
      <section
        className="relative w-full rounded-t-[3.5rem] bg-cover bg-center xl:bg-top"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-5 rounded-t-[3.5rem]"></div>

        <div className="relative md:py-32 lg:py-40 z-10 text-center ">
          <div className="flex flex-col md:mb-8 lg:mb-12 xl:mb-14">
            {/* <div className="flex flex-col pb-14"> */}

            <span className="text-white font-sans md:text-6xl font-normal lg:text-[4.5rem] xl:text-[6.5rem]">
              YOUR
            </span>

            <span className="text-white font-normal md:text-6xl lg:text-[4.5rem] xl:text-[7rem] font-serif tracking-tighter leading-loose">
              DREAM
            </span>
            <span className="text-white font-sans md:text-6xl font-normal lg:text-[4.5rem] xl:text-[6.5rem]">
              PLACE
            </span>
          </div>
          <div className="md:pb-36 lg:pb-52 xl:pb-60 -space-y-8">
            <h1 className="text-white text-lg font-light mb-7 lg:text-xl xl:text-2xl leading-snug">
              Bringing your vision to life with quality,
            </h1>
            <h1 className="text-white text-lg font-light lg:text-xl xl:text-2xl leading-snug">
              expertise, integrity, and precision.
            </h1>
          </div>
        </div>

        <div className="relative md:mt-16 xl:mt-36 md:pb-24 lg:pb-32 xl:pb-44 z-10 flex justify-between md:px-8 lf:px-10 xl:px-28">
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              We love & live
            </span>

            <span className="text-white font-semibold text-lg md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              craftsmanship
            </span>

            <span className="text-white text-base md:mt-2 lg:mt-5 font-thin lg:text-lg xl:text-xl leading-tight flex items-center space-x-2">
              Our Story
              <GrFormNextLink className="md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 md:ml-4 lg:ml-5 xl:ml-7 rounded-full border md:p-2 xl:p-3 border-white" />
            </span>
          </div>
          <div className="w-1/2 lg:px-12 xl:px-20 flex flex-col ">
            <span className="text-white text-lg font-light mb-7 lg:text-xl xl:text-[28px] leading-snug">
              Hiline Construction has been a trusted name in the construction
              industry for <br className="hidden xl:block" /> over 10 years.
            </span>
            <span className="text-white text-lg font-light mb-7 lg:text-xl xl:text-[28px] leading-snug">
              We have successfully completed 250+{" "}
              <br className="hidden xl:block" /> projects, focusing on
              residential and <br className="hidden xl:block" /> commercial
              spaces with precision and <br className="hidden xl:block" />
              quality.
            </span>
            <span className="text-white text-lg font-light mb-7 lg:text-xl xl:text-[28px] leading-snug">
              Our dedicated team ensures every{" "}
              <br className="hidden xl:block" /> project is completed to the
              highest <br className="hidden xl:block" /> standards, delivering
              lasting results.
            </span>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <div className="absolute top-6 left-0 right-0 flex justify-between items-center md:mt-0 px-5 md:px-14">
        {/* Mobile Menu Toggle */}
        <div className="flex justify-between items-center lg:hidden mt-2 w-7/12">
          <IoMdMenu className="text-white w-8 h-8" />
          <div className="w-24 h-12 cursor-pointer">
            <LogoHiline
              className="h-full w-full rounded-lg object-contain"
              onClick={() => window.scrollTo(0, 0)}
            />
          </div>
        </div>

        {/* Logo */}
        <div className="w-42 cursor-pointer h-auto lg:w-36 rounded-lg">
          <LogoHiline
            className="w-full h-full rounded-lg object-contain mt-2"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>

        <section className="relative w-96 xl:w-1/3 hidden lg:flex justify-center lg:text-sm xl:text-lg items-center h-16 bg-[#1A1A1A] text-white rounded-full">
          <div className="absolute z-10 lg:space-x-2 xl:space-x-4 font-sans flex">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#service", label: "Service" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`relative flex items-center justify-center cursor-pointer px-3 py-0.5 text-center ${
                  window.location.hash === href
                    ? "text-gray-800 font-semibold bg-white rounded-full"
                    : "hover:text-gray-400 font-thin"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* media links */}
        <div className="relative md:w-9 lg:w-32 xl:w-32 hidden md:flex justify-center items-center h-16">
          <div className="absolute z-10 flex justify-center">
            {/* facebook */}
            <a
              href={facebook}
              className="me-3 [&>svg]:h-3.5 [&>svg]:w-3.5 hover:text-gray-500 bg-white rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>

            {/* insta  */}
            <a
              href={instagram}
              className="me-3 [&>svg]:h-3.5 [&>svg]:w-3.5 hover:text-gray-500 bg-white rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>

            {/* whatsapp */}
            <a
              href="whatsapp://send?phone=+9633747727"
              target="_blank"
              className="[&>svg]:h-3.5 [&>svg]:w-3.5 hover:text-gray-500 bg-white rounded-full p-2"
              onclick="if (!window.open('whatsapp://send?phone=+9633747727', '_blank')) window.location.href='https://wa.me/9633747727';"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 2.116.55 4.105 1.507 5.85L.057 24l6.337-1.621A11.91 11.91 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.057 21.614c-1.912 0-3.782-.501-5.414-1.449l-.384-.226-3.76.96.998-3.666-.251-.392a9.615 9.615 0 01-1.394-5.039c0-5.307 4.31-9.616 9.617-9.616s9.616 4.31 9.616 9.616c0 5.307-4.31 9.615-9.616 9.615zm5.507-6.878c-.307-.153-1.824-.903-2.106-1.003-.28-.105-.484-.153-.686.153-.203.308-.785 1.003-.96 1.207-.178.204-.355.229-.662.076-.307-.153-1.296-.473-2.47-1.507-.912-.812-1.528-1.816-1.705-2.124-.178-.307-.018-.472.134-.625.137-.138.307-.356.46-.534.152-.178.203-.306.306-.51.102-.203.051-.38-.025-.533-.077-.153-.686-1.66-.94-2.276-.248-.595-.5-.515-.686-.515-.178 0-.381-.025-.585-.025-.203 0-.533.076-.81.38-.28.305-1.066 1.04-1.066 2.537s1.092 2.944 1.243 3.15c.152.204 2.149 3.28 5.211 4.6.727.314 1.296.501 1.74.64.73.232 1.394.2 1.918.122.586-.086 1.824-.748 2.085-1.47.255-.713.255-1.323.178-1.47-.077-.152-.28-.229-.586-.381z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBanner;
