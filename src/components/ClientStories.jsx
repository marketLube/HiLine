import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import { image1 } from "../assets/images";

const ClientStories = () => {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dpzy6cozb/video/upload/v1733734023/hilinereviewvdo_v3uygs.mp4",
      alt: "Video 1 Description",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dpzy6cozb/video/upload/v1733739030/hilinecsvdo2_in0njh.mp4",
      alt: "Video 2 Description",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dpzy6cozb/video/upload/v1733739023/hilinecsvdo3_ou6qjq.mp4",
      alt: "Video 3 Description",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dpzy6cozb/video/upload/v1733739028/hilinecsvdo4_kxfcdh.mp4",
      alt: "Video 4 Description",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dpzy6cozb/video/upload/v1733739030/hilinecsvdo5_cheqsu.mp4",
      alt: "Video 5 Description",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dpzy6cozb/video/upload/v1733739030/hilinecsvdo6_cliuiw.mp4",
      alt: "Video 6 Description",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dpzy6cozb/video/upload/v1733739036/hilinecsvdo7_qeiger.mp4",
      alt: "Video 7 Description",
    },
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
              <video
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-72 lg:h-96 xl:h-[500px] rounded-2xl object-cover"
                controls
                loop
                muted
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientStories;
