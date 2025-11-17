import React from "react";
import { cardItems } from "../constant/data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
//import swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Projectcom = () => {
  return (
    <>
      {/* <div className="mt-10 container mx-auto py-5 pt-20 w-full " id="project"> */}
        <div className="container text-center px-2 py-24  mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1136px] 2xl:max-w-[1360px] overflow-hidden" id="project">
          <h1 className="text-3xl sm:text-4xl">
            <span className="font-bold">Projects</span>
            <span className="underline decoration">Completed</span>
          </h1>
          <p className="text-gray-600">Crafting Spaces, Building Legacies-Explore </p>
          <p className="text-gray-600">Our Portfolio</p>

          {/* Navigation btn */}
          <div className="flex items-center justify-end  mt-18 gap-3 mr-7">
            <button className="bg-gray-200 w-12 h-10 flex items-center justify-center rounded  hover:bg-neutral-200 active:bg-neutral-200 transition-colors cursor-pointer prev-btn">
              <RiArrowLeftSLine />
            </button>
            <button className=" bg-gray-200 w-12 h-10 flex items-center justify-center rounded hover:bg-neutral-200 active:bg-neutral-200 transition-colors cursor-pointer next-btn">
              <RiArrowRightSLine />
            </button>
          </div>

          {/* Card wrapper */}
          <Swiper
            className="mt-5"
            modules={[Navigation]}
            breakpoints={{
              640: {         //Use sm
                slidesPerView: 1,
              },
              768: {      //Use md
                slidesPerView: 2,
              },
              1280: {         //Use lg
                // slidesPerView: 2.5,
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            // spaceBetween={1}
            // ClassName=""
          >
            {cardItems.map((item) => (
              <SwiperSlide className="" key={item.id}>
                {/* img */}
                <div className="max-w-max mx-auto relative ">
                  <img
                    src={item.img}
                    width={300}
                    height={300}
                    className="rounded aspect-square"
                  />
                  <div className="absolute bg-white left-12 right-0 bottom-0 shadow-md w-40">
                    <h1 className="font-medium text-2xl">{item.name}</h1>
                    <p className="text-gray-500">{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      {/* </div> */}
    </>
  );
};

export default Projectcom;
