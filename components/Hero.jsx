import { useLocation } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';  
import defaultGradient from "../assets/bg.jpg";
import herobg from '../assets/herobg.jpg'; 


const Hero = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const pageType = segments[segments.length - 1] || 'home';

 
  if (pageType === 'home') {
    return null;
  }
 
  const heroData = {
    aboutus: {
      title: "About Us",
      subtitle: "Who We Are",
      description: "We are a team of experts dedicated to delivering exceptional results",
      buttonText: "Learn More",
      image: herobg,
    },
    blogs: {
      title: "Our Blogs",
      subtitle: "Insights & Articles",
      description: "Explore our latest articles, tips, and insights to stay up-to-date with industry trends and best practices.",
      buttonText: "Read More",
      image: herobg, 
    },    
    ourclients: {
      title: "Our Clients",
      subtitle: "Our Partners in Success",
      description: "We are proud to work with a diverse range of clients across various industries",
      buttonText: "Learn More",
      image: herobg,
    },
    ourprojects: {
      title: "Our Projects",
      subtitle: "Showcasing Our Work",
      description: "Explore our portfolio of successful projects and case studies",
      buttonText: "View Projects",
      image: herobg,
    },
    services: {
      title: "Our Services",
      subtitle: "What We Offer",
      description: "Discover the range of services we provide to help you succeed",
      buttonText: "Explore Services",
      image: herobg,
    },
    webdevelopment: {
      title: "Web Development",
      subtitle: "Modern & Responsive",
      description: "We build fast, secure, and scalable websites using the latest technologies like React, Next.js, and Tailwind CSS to ensure a seamless user experience across all devices.",
      buttonText: "Explore Services",
      image: herobg,
    },
    socialmedia: {
      title: "Social Media Management",
      subtitle: "Build Your Online Presence",
      description: "We manage and grow your social media profiles with engaging content, consistent branding, and targeted strategies to connect with your audience and increase engagement.",
      buttonText: "Explore Services",
      image: herobg,
    },
    searchengineoptimization: {
      title: "Search Engine Optimization",
      subtitle: "Rank Higher on Google",
      description: "Improve your website's visibility on search engines with our expert SEO strategies, keyword research, on-page and off-page optimization, and detailed performance audits.",
      buttonText: "Explore Services",
      image: herobg,
    },
    payperclick: {
      title: "Pay-Per-Click Advertising",
      subtitle: "Targeted Campaigns that Convert",
      description: "Maximize your ROI with data-driven PPC campaigns on Google, Facebook, and other platforms. We design and manage ads that reach the right audience at the right time.",
      buttonText: "Explore Services",
      image: herobg,
    },
    videoanddigitalcontent: {
      title: "Video & Digital Content",
      subtitle: "Engage with Impact",
      description: "From promotional videos to digital storytelling, we create compelling content that captivates your audience and drives engagement across social and digital platforms.",
      buttonText: "Explore Services",
      image: herobg,
    },
    possystem: {
      title: "POS System Development",
      subtitle: "Smart Business Solutions",
      description: "We develop customized POS (Point of Sale) systems that simplify transactions, manage inventory, and improve customer service for retail, restaurants, and service businesses.",
      buttonText: "Explore Services",
      image: herobg,
    },
    contactus: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      description: "Start the conversation to establish a good relationship and business.",
      buttonText: "Send Message",
      image: herobg,
    },
  };

  const currentHero = heroData[pageType] || {
    title: "Default Title",
    subtitle: "Default Subtitle",
    description: "Default Description",
    buttonText: "Default Button",
    image: defaultGradient,
  };

  return (
    <motion.section
      className="relative text-center w-full h-[600px] flex justify-center items-center"
      style={{
        backgroundImage: `url(${currentHero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <motion.div
        className="relative text-white flex flex-col items-center gap-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h4
          className="lg:text-xl text-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {currentHero.title}
        </motion.h4>
        <motion.h2
          className="lg:text-7xl text-5xl font-bold text-[#af8a26] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {currentHero.subtitle}
        </motion.h2>
        <motion.p
          className="text-lightText lg:w-200 sm:w-80 md-w-150 text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {currentHero.description}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;