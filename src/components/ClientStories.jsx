import React from "react";
import { image1 } from "../assets/images";

const ClientStories = () => {
  const images = [
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image1, alt: "Image 2" },
    { id: 3, src: image1, alt: "Image 3" },
    // { id: 4, src: image1, alt: "Image 4" },
  ];

  return (
    <section
      id="testimonies"
      className="md:pt-14 lg:pt-20 md:pb-20 lg:pb-28 xl:pb-36 bg-gray-100"
    >
      <div className="max-w-full md:px-10 lg:px-16 xl:px-32">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-16 space-y-5 lg:mb-20 md:text-center">
            <p className="text-xl text-gray-700 md:text-center">
              CLIENT STORIES
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 md:gap-5 lg:gap-10">
          {images.map((image) => (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full md:h-72 lg:h-96 xl:h-[500px] rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
