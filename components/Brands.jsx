import React from "react";
import abiha from "../assets/brands/abiha-logo.png";
import adil from "../assets/brands/Adil-Electronics.png";
import cluster from "../assets/brands/Clusters-logo.png";
import diesel from "../assets/brands/dieselship.png";
import digitalstation from "../assets/brands/digitalstation.png";
import fiza from "../assets/brands/fiza.png";
import octaconsultant from "../assets/brands/octaconsultant.png";
import shan from "../assets/brands/shanimpex.png";
import shoe from "../assets/brands/shoesrepublic.png";
import silkamin from "../assets/brands/silkamin-logo.png";
import footerbg from "../assets/footer-bg-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";





const images = [
  { src: abiha, alt: "Abiha" },
  { src: adil, alt: "Adil Electronics" },
  { src: cluster, alt: "Cluster" },
  { src: diesel, alt: "Diesel Ship" },
  { src: digitalstation, alt: "Digital Station" },
  { src: fiza, alt: "Fiza" },
  { src: octaconsultant, alt: "Octa Consultant" },
  { src: shan, alt: "Shan Impex" },
  { src: shoe, alt: "Shoes Republic" },
  { src: silkamin, alt: "Silkamin" },
];


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  arrows: false,
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

const Brands = () => {
  return (
    <section className="py-14 w-[90%] rounded-xl justify-self-center bg-[#f8f8f8]"
    style={{
      backgroundImage: `url(${footerbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="container  mx-auto px-4"
      >
   
        <div className="flex flex-col text-center mb-10">
        <motion.h1 initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} 
        className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">What Brands We deal
            </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}  
            className="sm:text-3xl text-2xl font-medium title-font text-gray-800 mb-4 capitalize">We proudly collaborate with industry-leading brands who trust us to bring their vision to life</motion.h1>
                 
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
        </div>
        
     

        
        <Slider {...settings}>
          {images.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-3"
            >
              <div className="w-full max-w-xs mx-auto bg-white rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition duration-500 grayscale hover:grayscale-0 transform hover:scale-105">
                <img
loading="lazy"
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-28 sm:h-32 object-contain object-center"
                />
                <p className="mt-3 text-center text-gray-600 text-sm sm:text-base font-medium">{brand.alt}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brands;