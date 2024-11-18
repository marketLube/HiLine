import React, { useState } from "react";
import { innovatingSpace1Img, innovatingSpace2Img } from "../assets/images";

const InnovatingSpaces = () => {
  const [sliderPosition, setSliderPosition] = useState(62);

  const handleSliderMove = (e) => {
    const sliderContainer = e.currentTarget.getBoundingClientRect();
    const newSliderPosition =
      ((e.clientX - sliderContainer.left) / sliderContainer.width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
  };

  return (
    <div
      className="flex w-full md:h-[28rem] lg:h-[33rem] xl:h-screen overflow-hidden relative"
      onMouseMove={handleSliderMove}
      onTouchMove={(e) =>
        handleSliderMove({
          clientX: e.touches[0].clientX,
          currentTarget: e.currentTarget,
        })
      }
    >
      {/* First Image */}
      <div
        className="absolute top-0 left-0 h-full bg-cover bg-center transition-[width] duration-75 ease-linear"
        style={{
          backgroundImage: `url(${innovatingSpace1Img})`,
          width: `${sliderPosition}%`,
        }}
      ></div>

      {/* Second Image */}
      <div
        className="absolute top-0 right-0 h-full bg-cover bg-center transition-[width] duration-75 ease-linear"
        style={{
          backgroundImage: `url(${innovatingSpace2Img})`,
          width: `${100 - sliderPosition}%`,
        }}
      ></div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-end justify-start md:p-16 xl:p-28 pointer-events-none">
        <h1 className="md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white ">
          INNOVATING SPACES
        </h1>
      </div>

      {/* Slider Pointer */}
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
        <div
          className="absolute top-0 bottom-0 bg-white w-[3px] -translate-x-1/2 pointer-events-auto transition-transform duration-75 ease-linear"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center bg-white justify-center h-24 w-3.5"></div>
        </div>
      </div>
    </div>
  );
};

export default InnovatingSpaces;
