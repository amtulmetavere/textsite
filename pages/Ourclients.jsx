import React from "react";
const imageImports = import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg}', { eager: true });
const linksMap = {
  // abiha: "https://abiha.com",
  // adil: "https://adil-electronics.com",
  // cluster: "https://clusters.com",
  // dieselship: "https://dieselship.com",
  // digitalstation: "https://digitalstation.com",
  // fiza: "https://fiza.com",
  // octaconsultant: "https://octaconsultant.com",
  // shanimpex: "https://shanimpex.com",
  // shoesrepublic: "https://shoesrepublic.com",
  // silkamin: "https://silkamin.com",
};


import Testimonial from '../components/Testimonial';

import { motion } from "framer-motion";

const images = Object.entries(imageImports).map(([path, module]) => {
  const fileName = path.split('/').pop().split('.')[0];
  return {
    src: module.default,
    alt: fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    link: linksMap[fileName] || "#", // fallback to "#" if not found
  };
});

const Ourclients = () => {
  return (
    <div>
          <section className="py-16 my-10 rounded-xl  w-[90%] justify-self-center"
   >
      <div className="container  mx-auto px-4 "
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
            className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We proudly collaborate with industry-leading brands who trust us to bring their vision to life</motion.h1>
                 
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
        </div>
        
        <div className="relative text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
          {images.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-3"
            >
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
  <div className="w-full max-w-xs mx-auto  bg-white rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition duration-500 grayscale hover:grayscale-0 transform hover:scale-105">
    <img
loading="lazy"
      src={brand.src}
      alt={brand.alt}
      className="w-full h-28 sm:h-32 object-contain object-center"
    />
    <p className="mt-3 text-center text-gray-600 text-sm sm:text-base font-medium">{brand.alt}</p>
  </div>
</a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Testimonial />
    </div>
  )
}

export default Ourclients
