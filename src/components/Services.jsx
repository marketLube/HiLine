import React from "react";

const Services = ({
  backgroundImage,
  title,
  description,
  parentClassName = "",
  curveClassName = "",
  render = false,
}) => {
  return (
    <section
      id="hero"
      className={`relative w-full bg-cover h-72 md:h-[32rem] lg:h-[40rem] xl:h-[58rem]  servicesection `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className={`absolute inset-0 bg-black bg-opacity-5 ${curveClassName}`}
      ></div>

      <div className="relative z-10 p-7 md:p-16 lg:p-24 xl:p-36">
        <span className="text-white text-xl font-medium md:text-4xl lg:text-6xl xl:text-7xl leading-tight">
          {title}
        </span>
        <p className="w-1/2 text-xs md:text-base lg:text-xl xl:text-2xl leading-tight mt-2 md:mt-3 lg:mt-5 xl:mt-7 text-white ">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Services;
