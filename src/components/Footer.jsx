import React from "react";
import LogoHiline from "./LogoHiline";
import { Parallax } from "react-scroll-parallax";

const Footer = () => {
  const instagram =
    "https://www.instagram.com/hiline.developers/?igsh=eXI4dDZkMHV4N21p";
  const facebook = "https://www.facebook.com/share/1MHGRSuTjZ/?mibextid=LQQJ4d";
  return (
    <div className="absolute bottom-0 -z-0 w-full foot-content">
      <footer className="bg-[#1A1A1A] xl:h-3/4 text-gray-200 flex justify-between p-5 md:p-8 lg:p-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-raw md:flex-row  pb-0 md:pb-12 lg:pb-0 footerdetails">
            <div className="w-full md:w-1/2 flex justify-center md:justify-between items-center lg:py-16 lg:px-5 xl:py-28 xl:px-24">
              <div className="w-24 md:w-64 xl:w-96">
                <div className="flex justify-center items-center pb-5 sm:w-40 sm:h-12 md:w-52 md:h-14 font-thin text-sm">
                  <LogoHiline />
                </div>
              </div>

              <div className="hidden md:block lg:text-xl xl:text-2xl lg:space-y-4 xl:space-y-7">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#service", label: "Services" },
                  { href: "#projects", label: "Projects" },
                  { href: "#testimonial", label: "Testimonial" },
                  { href: "#contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <div key={href} className="mb-2 lg:mb-4">
                    <a
                      href={href}
                      className={`w-full block  px-4 py-1 font-medium text-lg ${
                        window.location.hash === href
                          ? "text-gray-800 bg-white rounded-lg"
                          : "hover:text-gray-400"
                      }`}
                    >
                      {label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center flex-col pb-8 md:pb-0 lg:py-16 xl:py-28 px-10">
              <div className="lg:space-y-8 xl:space-y-12 text-sm md:text-lg font-thin">
                <div className="mb-4 flex justify-center md:justify-start ">
                  <div>
                    <p className="w-52 md:w-72 font-thin ">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut{" "}
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-start">
                  <a href="mailto:hello@hiline.com font-thin ">
                    hello@hiline.com
                  </a>
                </div>

                <div className="mb-4 flex items-center justify-start font-thin ">
                  +91 9526457322
                </div>

                <div className="flex items-center justify-start ">
                  <div className="flex justify-center">
                    {/* facebook */}
                    <a
                      href={facebook}
                      className="me-3 [&>svg]:h-4 [&>svg]:w-4 text-black bg-white rounded-full p-2"
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
                      className="me-3 [&>svg]:h-4 [&>svg]:w-4 text-black bg-white rounded-full p-2"
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
                      className="[&>svg]:h-4 [&>svg]:w-4 text-black bg-white rounded-full p-2"
                      onclick="if (!window.open('whatsapp://send?phone=+9633747727', '_blank')) window.location.href='https://wa.me/9633747727';"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
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
          </div>
          <div className="bg-black/5 font-thin text-base md:text-xl pb-6 text-center">
            <span>made by </span>
            <a className=" underline" href="#">
              Marketlube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
