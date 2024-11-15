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
        className={`relative w-full bg-cover h-[58rem] ${curveClassName}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className={`absolute inset-0 bg-black bg-opacity-5 ${curveClassName}`}
        ></div>

        <div className="relative z-10 p-36">
          <span className="text-white text-3xl font-medium md:text-7xl md:leading-tight">
            {title}
          </span>
          <p className="w-1/2 text-2xl leading-tight mt-3 text-white">
            {description}
          </p>
          <button className="absolute top-44 md:top-[270px] lg:top-[49rem] right-32 text-black text-sm md:text-xl lg:text-2xl flex items-center bg-white rounded-3xl px-3 xl:px-7 py-1 xl:py-4">
            <span className="uppercase">WHAT WE DO</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
