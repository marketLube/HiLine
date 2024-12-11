import React from "react";

const Services = ({
  backgroundImage,
  title,
  description,
  parentClassName = "",
  curveClassName = "",
  render = true,
}) => {
  return (
    <section
      id="hero"
      className={`relative w-full bg-cover h-[80vh] md:h-[32rem] lg:h-[40rem] xl:h-[58rem]  servicesection xl:rounded-[8rem] serviceImage`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        overflow: "hidden",
        backgroundSize: "cover",
        borderRadius: "8rem",
      }}
    >
      <div
        style={{ borderRadius: "8rem" }}
        className={`absolute inset-0 bg-black bg-opacity-5 xl:rounded-[8rem]  ${curveClassName} proj-bg`}
      ></div>

      <div className="relative z-10 p-7 md:p-16 lg:p-24 xl:p-36">
        <span className="text-white text-2xl font-medium md:text-4xl lg:text-6xl xl:text-7xl leading-tight">
          {title}
        </span>
        <p className="w-1/2 sm:text-base pt-3 md:text-base lg:text-xl xl:text-2xl leading-tight mt-2 md:mt-3 lg:mt-5 xl:mt-7 text-white serviceDes">
          {description}
        </p>
        {render && (
          <button className="absolute top-56 md:top-[27rem] lg:top-[46rem] right-6 md:right-16 lg:right-28 xl:right-32  text-black text-xs md:text-sm lg:text-xl xl:text-2xl flex items-center bg-white rounded-3xl px-3 xl:px-7 py-1 xl:py-4 z-150 whatwedobtn">
            <span className="uppercase font-semibold">WHAT WE DO</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Services;
