import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { image1 } from "../assets/images";

const ClientStories = () => {
  const images = [
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image1, alt: "Image 2" },
    { id: 3, src: image1, alt: "Image 3" },
    { id: 4, src: image1, alt: "Image 4" },
    { id: 5, src: image1, alt: "Image 5" },
    { id: 6, src: image1, alt: "Image 6" },
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
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mb-7"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className="flex justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full md:h-72 lg:h-96 xl:h-[500px] rounded-2xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientStories;
