import React, { useState } from "react";
import { innovatingSpace1Img, innovatingSpace2Img } from "../assets/images";

const InnovatingSpaces = () => {
  const [sliderPosition, setSliderPosition] = useState(65);
  const [pointerPosition, setPointerPosition] = useState(50);

  const handleSliderMove = (e) => {
    const sliderContainer = e.currentTarget.getBoundingClientRect();
    const newSliderPosition =
      ((e.clientX - sliderContainer.left) / sliderContainer.width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
  };

  const handlePointerMove = (e) => {
    const sliderContainer = e.currentTarget.getBoundingClientRect();
    const newPointerPosition =
      ((e.clientY - sliderContainer.top) / sliderContainer.height) * 100;

    setPointerPosition(Math.min(100, Math.max(0, newPointerPosition)));
  };

  return (
    <div
      className="relative flex w-full h-80 md:h-[28rem] lg:h-[33rem] xl:h-screen overflow-hidden"
      onMouseMove={(e) => {
        handleSliderMove(e);
        handlePointerMove(e);
      }}
      onTouchMove={(e) => {
        handleSliderMove({
          clientX: e.touches[0].clientX,
          currentTarget: e.currentTarget,
        });
        handlePointerMove({
          clientY: e.touches[0].clientY,
          currentTarget: e.currentTarget,
        });
      }}
    >
      {/* First Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dpzy6cozb/image/upload/v1733733297/innovatingSpace1_r0nzag.jpg')`,
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)`,
        }}
      ></div>

      {/* Second Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/dpzy6cozb/image/upload/v1733733340/innovatingSpace2_iivmde.jpg"})`,
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      ></div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-end justify-start p-9 md:p-16 xl:p-28 pointer-events-none">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white">
          INNOVATING SPACES
        </h1>
      </div>

      {/* Slider Pointer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 bottom-0 bg-white w-[3px] -translate-x-1/2 pointer-events-auto"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            className="absolute bg-white justify-center w-3.5 h-24 -translate-x-1/2"
            style={{ top: `${pointerPosition}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InnovatingSpaces;
