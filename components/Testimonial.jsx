import React from "react";
import Slider from "react-slick";
import avatar from "../assets/avatar.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center w-8 h-8 bg-[#e3b843] text-white text-3xl rounded-full hover:bg-[#af8a26] hover:scale-110 transition-transform duration-300 shadow-lg absolute -left-5 top-1/2 cursor-pointer -translate-y-1/2 z-10"
   aria-label="Previous Slide"
  >
   < ArrowLeft className="w-4 h-4" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center w-8 h-8 bg-[#e3b843] text-white text-3xl rounded-full hover:bg-[#af8a26] hover:scale-110 transition-transform duration-300 shadow-lg absolute -right-5 top-1/2 cursor-pointer -translate-y-1/2 z-10"
    aria-label="Next Slide"
  >
    <ArrowRight className="w-4 h-4" />
  </button>
);
const slides = [
  {
    id: 1,
    name: "Alper Kamu",
    role: "Designer",
    image: avatar,
    text: "AT LSW, YOU GET Legal Insight. Business Instinct.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Attorney",
    image: avatar,
    text: "Trustworthy support when it matters the most.",
  },
  {
    id: 3,
    name: "Alper Kamu",
    role: "Designer",
    image: avatar,
    text: "AT LSW, YOU GET Legal Insight. Business Instinct.",
  },
  {
    id: 4,
    name: "Jane Doe",
    role: "Attorney",
    image: avatar,
    text: "Trustworthy support when it matters the most.",
  },
  {
    id: 5,
    name: "Alper Kamu",
    role: "Designer",
    image: avatar,
    text: "AT LSW, YOU GET Legal Insight. Business Instinct.",
  },
  {
    id: 6,
    name: "Jane Doe",
    role: "Attorney",
    image: avatar,
    text: "Trustworthy support when it matters the most.",
  },
  {
    id: 7,
    name: "Alper Kamu",
    role: "Designer",
    image: avatar,
    text: "AT LSW, YOU GET Legal Insight. Business Instinct.",
  },
  {
    id: 8,
    name: "Jane Doe",
    role: "Attorney",
    image: avatar,
    text: "Trustworthy support when it matters the most.",
  },
];

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3, 
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        centerMode: true, 
        centerPadding: "0px",
        customPaging: () => (
          <div className="text-[#e3b843] text-4xl font-black">.</div>
        ),
        appendDots: dots => (
          <div className="mt-6">
            <ul className="flex justify-center gap-1">{dots}</ul>
          </div>
        ),
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      
        
      };
    
    
      
  return (
    <section className="w-full px-4 pt-14">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
      <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">What Our Clients Say</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We take pride in delivering exceptional experiences for our clients</h1>
      
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
        </div>
  
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="px-4" 
            >
        <div className="h-full bg-gray-100 p-8 rounded mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
                <p className="text-lg text-gray-600 mb-4">{slide.text}</p>
                <div className="flex items-center gap-4 mt-4">
                  <img
loading="lazy"
                    src={slide.image}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{slide.name}</p>
                    <p className="text-sm text-gray-500">{slide.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
