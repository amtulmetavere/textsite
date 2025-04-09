import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion"; 
import cursor from "../assets/cursor.png";
import Monitor from '../assets/monitor.png';
import search from "../assets/search.png";
import web from "../assets/web-design.png";
import video from "../assets/video.png";
import social from "../assets/social.png";

const cardData = [
  {
    title: "Web Development",
    description: "We design and develop modern, responsive websites to elevate your brand and grow your business online. Our team ensures every site is user-friendly, fast, and mobile-ready.",
    iconPath: web,
    link: "/services/webdevelopment" // Add route link here
  },
  {
    title: "Social Media",
    description: "Grow your audience with powerful digital marketing, targeted ads, and engaging content. We help you build brand presence and connect with your customers on every platform.",
    iconPath: social,
    link: "/services/socialmedia" // Add route link here
  },
  {
    title: "Search Engine Optimization",
    description: "Boost your visibility with smart SEO strategies that drive organic traffic and improve search rankings. Stay ahead of competitors and reach the right audience effortlessly.",
    iconPath: search,
    link: "/services/searchengineoptimization" // Add route link here
  },
  {
    title: "PAY-PER-CLICK",
    description: "Get fast results with PPC campaigns where you pay only for clicks. Our optimized ad placements help you reach potential customers and maximize return on investment.",
    iconPath: cursor,
    link: "/services/payperclick" // Add route link here
  },
  {
    title: "VIDEO AND DIGITAL CONTENT",
    description: "We create content that informs, entertains, and inspires. From scripts to production, we handle it all to keep your audience engaged and your brand message clear.",
    iconPath: video,
    link: "/services/videoanddigitalcontent" // Add route link here
  },
  {
    title: "POS SYSTEM",
    description: "Speed up sales and manage transactions with our intuitive cloud-based POS system. Track inventory, monitor performance, and simplify business operations with ease.",
    iconPath: Monitor,
    link: "/services/possystem" // Add route link here
  }
];

const Help = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); 

  return (
    <section className="text-white body-font mt-4" ref={ref}>
      <div className="container px-5 pb-14 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">What We Offer</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We are so proud that we have the greatest services</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="p-4 lg:w-1/3 sm:w-1/2"
              initial={{ opacity: 0}}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col justify-around items-center shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 h-full">
                <div className="w-15 h-15 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4">
                  <img
loading="lazy"
                    className="w-full h-full object-contain object-center"
                    src={card.iconPath}
                    alt={card.title}
                  />
                </div>
                <h2 className="text-xl text-white font-bold title-font mb-2">
                  {card.title}
                </h2>
                <p className="leading-relaxed text-center text-base text-gray-400 m-5">{card.description}</p>
                <Link to={card.link}>
                  <motion.button
                    className="btn-8 hidden lg:inline-flex items-center px-8 bg-[#ab8112] text-center text-white font-semibold rounded-xl border-0 py-2 focus:outline-none text-base mt-4 md:mt-0 hover:shadow-inner hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:cursor-pointer hover:bg-[#70550b]"
                    whileHover={{ scale: 1.05 }}
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Learn more
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;