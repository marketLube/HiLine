import React from "react";

const Contact = () => {
  return (
    <div className="bg-white h-screen w-full flex flex-col justify-center items-center rounded-b-[5.2c:\Users\HP\Desktop\Official works\SR-Naturals\userfrontend\src\components\Footer\Footer.jsxrem]">
      <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
        <div className="mb-12 space-y-5 md:mb-14 md:text-center">
          <p className="text-xl text-gray-700 md:text-center">CONTACT</p>
        </div>
      </div>
      <h5 className=" text-8xl font-semibold text-center mb-5 text-black">
        Curious what we can
      </h5>
      <h5 className=" text-8xl font-semibold text-center mb-20 text-black">
        do for you?
      </h5>
      <button
        className="text-white text-sm md:text-xl lg:text-2xl flex items-center bg-black rounded-full py-5 px-8"
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
