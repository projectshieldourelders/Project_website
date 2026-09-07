"use client";
import { useContext } from "react";
import { Test } from "./Test";
import DonationFormContext from "@/app/context/donationContext";
import { HerosectionData } from "./data";
import Slider from "react-slick";

const Hero = () => {
  const donationInfo = useContext(DonationFormContext);
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section>
        <Slider {...settings}>
          {HerosectionData.map((value, index) => {
            return (
              <div
                key={index}
                className="relative h-[700px] bg-cover text-white md:pt-40 md:pb-28 py-20 bg-no-repeat lg:mt-40 sm:mt-44 mt-20"
                style={{ backgroundImage: `url(${value.image})` }}
              >
                <div className="container mx-auto flex px-4 lg:max-w-(--breakpoint-xl)">
                  <div
                    className="w-full max-w-xl rounded-md bg-white p-5 shadow-2xl ring-1 ring-black/10 dark:bg-dark dark:ring-white/10"
                    data-aos="fade-right"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className="px-4 py-2 bg-midnight_text rounded-full">
                        <p className=" text-white text-sm font-semibold">
                          {value?.tag_name}
                        </p>
                      </div>
                      <p className="text-midnight_text dark:text-white/85 text-base font-medium">
                        {value?.left_days} step system
                      </p>
                    </div>
                    <h3 className="text-black dark:text-white text-4xl font-bold mb-6">
                      {value?.title}
                    </h3>
                    <p className="text-dustGray dark:text-white/85 text-base leading-7 font-normal mb-5">
                      {value?.descp}
                    </p>
                    <div className="mb-5 flex rounded-md border border-border dark:border-dark_border [&>*]:flex-1">
                      <div className="border-r border-border px-3 py-3 dark:border-dark_border">
                        <p className="text-base font-medium text-black dark:text-white/85 ">
                          Covers
                        </p>
                        <h4 className="text-2xl text-secondary">
                          {value?.raised}
                        </h4>
                      </div>
                      <div className="px-3 py-3">
                        <p className="text-base font-medium text-black dark:text-white/85">
                          Goal
                        </p>
                        <h4 className="text-2xl text-midnight_text dark:text-white">
                          {value?.goal}
                        </h4>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => donationInfo?.setIsDonationOpen(true)}
                        className="text-white text-base bg-error px-7 py-4 border font-semibold border-error hover:border-error hover:bg-transparent hover:text-error rounded-md cursor-pointer"
                      >
                        Request visit
                      </button>
                      <Test />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Hero;
