import React from "react";
import { image1 } from "../assets/images";

const ClientStories = () => {
  const reelId = "DCZJtpJiBCV";
  const images = [
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image1, alt: "Image 2" },
    { id: 3, src: image1, alt: "Image 3" },
    { id: 4, src: image1, alt: "Image 4" },
  ];

  return (
    // <div className="relative w-1/3" style={{ paddingBottom: "177%" }}>
    //   <iframe
    //     src={`https://www.instagram.com/reel/${reelId}/embed?hidecaption=true`}
    //     className="absolute inset-0 w-full h-full"
    //     frameBorder="0"
    //     scrolling="no"
    //     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    //   ></iframe>
    // </div>
    <section id="testimonies" className="pt-20 pb-36 bg-gray-100">
      <div className="max-w-full px-8 md:px-10 lg:px-36">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-20 md:text-center">
            <p className="text-xl text-gray-700 md:text-center">CLIENT STORIES</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {images.map((image) => (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[500px] rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
