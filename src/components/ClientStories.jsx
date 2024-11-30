import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { image1, project1Img } from "../assets/images";
import LazyLoad from "react-lazy-load";

const ClientStories = () => {
  const images = [
    { id: 1, src: project1Img, alt: "Image 1" },
    { id: 2, src: project1Img, alt: "Image 2" },
    { id: 3, src: project1Img, alt: "Image 3" },
    { id: 4, src: project1Img, alt: "Image 4" },
    { id: 5, src: project1Img, alt: "Image 5" },
    { id: 6, src: project1Img, alt: "Image 6" },
  ];

  return (
    <section
      id="testimonies"
      className="pt-8 md:pt-14 lg:pt-20 pb-8 md:pb-20 lg:pb-28 xl:pb-36 bg-gray-100"
    >
      <div className="max-w-full md:px-10 lg:px-16 xl:px-32">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-14 md:mb-16 space-y-5 lg:mb-24 text-center">
            <p className="text-lg md:text-xl text-gray-700 text-center">
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
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 26,
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
              <LazyLoad height={600} className="lazy">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-72 lg:h-96 xl:h-[500px] rounded-2xl object-cover lazyimg"
                />
              </LazyLoad>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientStories;
