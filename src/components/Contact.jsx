import React from "react";

const Contact = () => {
  return (
    <div className="bg-white md:h-[28rem] lg:h-[35rem] xl:h-screen w-full flex flex-col justify-center items-center rounded-b-2xl md:rounded-b-[3rem] lg:rounded-b-[4rem] xl:rounded-b-[6rem]">
      <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
        <div className=" mt-7 md:mt-0 mb-10 md:mb-16 space-y-5 lg:mb-24 text-center">
          <p className="text-lg md:text-xl text-gray-700 text-center">
            CONTACT
          </p>
        </div>
      </div>
      <h5 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold text-center md:mb-3 lg:mb-5 text-black">
        Curious what we can
      </h5>
      <h5 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold text-center md:mb-16 lg:mb-20 text-black">
        do for you?
      </h5>
      <button
        className="text-white text-sm md:text-xl lg:text-2xl flex items-center bg-black rounded-full my-5 md:my-0 py-3 md:py-5 px-8"
        onClick={() => {
          const phone = "9633747727";
          const message = "Hello, I would like to get in touch!";
          const appUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(
            message
          )}`;
          const webUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
            message
          )}`;

          const isAppAvailable =
            window.location.href.indexOf("whatsapp://") === 0;
          if (isAppAvailable) {
            window.location.href = appUrl;
          } else {
            window.open(webUrl, "_blank");
          }
        }}
      >
        <span className="uppercase">GET IN TOUCH</span>
      </button>
    </div>
  );
};

export default Contact;
