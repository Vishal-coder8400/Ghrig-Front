// app/home/carousel_section.jsx
"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function CarouselSection() {
  const slides = [
    {
      id: 1,
      image: "/assets/images/netflix.png",
    },
    {
      id: 2,
      image: "/assets/images/buffer.png",
    },
    {
      id: 3,
      image: "/assets/images/stripe.png",
    },
    {
      id: 4,
      image: "/assets/images/framer.png",
    },
    {
      id: 5,
      image: "/assets/images/hubspot.png",
    },
    {
      id: 6,
      image: "/assets/images/dropbox.png",
    },
    {
      id: 7,
      image: "/assets/images/netflix.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true, // Add this for centering
    centerPadding: "0px", // Remove extra padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <div className="w-full mt-4 max-w-6xl mx-auto py-8 px-4">
      <p className="font_family_display text-center text-[20px] text-[#7F7F7F] font-normal mb-8">
        Top companies trust our platform to find the right talent.
        <br className="hidden lg:block" />
        Join the network of industry leaders hiring through us.
      </p>
      
      <div className="relative">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="px-2">
              <div className="flex justify-center items-center">
                {/* Fixed Image Container */}
                <div className="relative w-32 h-20 md:w-40 md:h-24"> {/* Fixed dimensions */}
                  <Image
                    src={slide.image}
                    alt="Company logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 180px"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}