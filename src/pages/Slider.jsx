import React from "react";
import { sliderData } from "../config";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Slider__Card() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   // fade: true,
  //   autoplay: true,
  //   swipeToSlide: true,
  //   arrows: true,
  //   centerMode: true,
  //   centerPadding: "120px",
  // };
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    centerMode: true,
    centerPadding: "120px",

    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "90px",
          arrows: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "50px",
          arrows: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "90px",
          arrows: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "10px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "2px",
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className=" h-[600px]">
        <div className=" flex  items-center justify-center mb-32">
          <h1 className="text-2xl  uppercase md:w-[900px] text-center md:text-5xl lg:text-6xl font-bold">
            The review are in!
          </h1>
        </div>

        <div className="   md:mx-10 lg:mx-20 ">
          {/* <button className="rounded-2xl bg-[#fff1e06e] font-bold w-[40px] h-[40px]">
            {"<"}
          </button> */}
          <Slider {...settings}>
            {sliderData.map((it) => {
              return (
                <>
                  <div>
                    <div className="w-[350px]  rounded-[50px] bg-[#fff1e06e] h-[286px] flex flex-col justify-center items-start  gap-y-8">
                      <p className="ml-8 text-lg w-[300px] h-[52px]">
                        {it.message}
                      </p>
                      <div className="ml-8 flex gap-4 ">
                        <div className="border-2 rounded-full w-11 h-11">
                          <img
                            src={it.image}
                            alt="error"
                            className="rounded-full w-10 h-10"
                          />
                        </div>
                        <div className="">
                          <h1 className="font-bold">{it.name}</h1>
                          <p>{it.Specialization}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
