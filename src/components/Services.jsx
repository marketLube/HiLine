import React from "react";

const Services = ({
  backgroundImage,
  title,
  description,
  parentClassName = "",
  curveClassName = "",
}) => {
  return (
    <div className={`bg-white ${parentClassName}`}>
      <section
        id="hero"
        className={`relative w-full bg-cover md:h-[32rem] lg:h-[40rem] xl:h-[58rem] ${curveClassName}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className={`absolute inset-0 bg-black bg-opacity-5 ${curveClassName}`}
        ></div>

        <div className="relative z-10 md:p-16 lg:p-24 xl:p-36">
          <span className="text-white text-3xl font-medium md:text-4xl lg:text-6xl xl:text-7xl leading-tight">
            {title}
          </span>
          <p className="w-1/2 md:text-base lg:text-xl xl:text-2xl leading-tight mt-3 text-white">
            {description}
          </p>
          <button className="absolute top-44 md:top-[27rem] lg:top-[32rem] xl:top-[49rem] md:right-16 lg:right-28 xl:right-32 text-black text-sm lg:text-xl xl:text-2xl flex items-center bg-white rounded-3xl px-3 xl:px-7 py-1 xl:py-4">
            <span className="uppercase">WHAT WE DO</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
