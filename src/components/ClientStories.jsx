import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Video5 from "../assets/demovdo.mp4";

import { image1, project1Img } from "../assets/images";
import Demo from "../assets/demo.jpeg";
import LazyLoad from "react-lazy-load";

const ClientStories = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const images = [
    {
      id: 1,
      src: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/stories/VID1_x2t0np.mp4",
      alt: "Image 1",
      img: "./first.jpeg",
    },
    {
      id: 2,
      src: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/stories/VID-2_bucklu.mp4",
      alt: "Image 2",
      img: "./second.jpeg",
    },
    {
      id: 3,
      src: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/stories/VID-3_oxalvb.mp4",
      alt: "Image 3",
      img: "./third.jpeg",
    },
    {
      id: 4,
      src: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/stories/VID-4_jhsjqw.mp4",
      alt: "Image 4",
      img: "./fourth.jpeg",
    },
    {
      id: 5,
      src: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/stories/VID-5_rzsxqy.mp4",
      alt: "Image 5",
      img: "./fift.jpeg",
    },
    {
      id: 6,
      src: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Hiline/stories/VID-6_tivkxa.mp4",
      alt: "Image 6",
      img: "sixth.jpeg",
    },
  ];

  const handleVideoPlay = () => {
    setVideoPlaying(true);
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleVideoPause = () => {
    setVideoPlaying(false);
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  const handleVideoEnd = () => {
    setVideoPlaying(false);
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };
  return (
    <section
      id="testimonies"
      className="pt-8 md:pt-14 lg:pt-20 pb-8 md:pb-20 lg:pb-28 xl:pb-36 bg-gray-100"
    >
      <div className="max-w-full md:px-10 lg:px-16 xl:px-32">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 cshead">
          <div className="mb-14 md:mb-16 space-y-5 lg:mb-24 text-center">
            <p className="text-lg md:text-xl text-gray-700 text-center clientHead">
              CLIENT STORIES
            </p>
          </div>
        </div>
        <Swiper
          onInit={(swiper) => setSwiperInstance(swiper)}
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
              {/* <LazyLoad height={600} className="lazy"> */}
              {/* <video
                src={image.src}
                alt={image.alt}
                type="video/mp4"
                preload="auto"
                controls
                playsInline
                loop
                muted
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnd}
                className="w-full h-64 md:h-72 lg:h-96 xl:h-[500px] rounded-2xl object-cover lazyimg"
              /> */}
              {/* </LazyLoad> */}

              <video
                controls
                muted
                poster={image.img}
                autoPlay={false}
                onEnded={handleVideoEnd}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                className="lazyimg w-full h-64 md:h-72 lg:h-96 xl:h-[500px] rounded-2xl object-cover"
              >
                <source src={image.src} type="video/mp4" />
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientStories;
