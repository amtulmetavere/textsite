import React from 'react';
import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';  
import newsletter from "../assets/newsletterbox.jpg";
import parse from 'html-react-parser';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';

const Blogsdetails = () => {
  const location = useLocation();
  const blog = location.state; 

  if (!blog?.content) return null;

 
  const contentWords = blog.content.split(' ');
  const middleIndex = Math.floor(contentWords.length / 2);

  const part1 = contentWords.slice(0, middleIndex).join(' ');
  const part2 = contentWords.slice(middleIndex).join(' ');

 
  const imageHtml = `
    <div style="float: left; margin-right: 20px; margin-bottom: 20px; width: 300px;">
      <img
loading="lazy" src="${blog.imageUrl2}" alt="${blog.img2desc}" style="width: 100%; border-radius: 12px;" />
      <p style="font-size: 14px; color: #9ca3af; font-style: italic; text-align: center; margin-top: 8px;">
        ${blog.img2desc}
      </p>
    </div>
  `;


  const fullContent = `${part1} ${imageHtml} ${part2}`;

  if (!blog) {
    return (
      <div className="text-white text-center py-20 text-2xl">
        Blog not found
      </div>
    );
  }
  const  currentHero = {
   
      title: blog.title,
      subtitle: blog.category,
      description: blog.date,
      image: blog.imageUrl,
    
    
}
  return (
    <>
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
    
    <div className="bg-black text-gray-200 px-4 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
     
      <div className="lg:col-span-3 space-y-8">
        <div>
          <h2 className="text-[#e3b843] uppercase text-sm tracking-widest mb-2">{blog.category}</h2>
          <h1 className="text-4xl font-bold text-white mb-3">{blog.title}</h1>
          <p className="text-sm text-gray-400">
            {blog.date} &bull; {blog.comments} Comments
          </p>
        </div>

        <img
loading="lazy"
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full object-cover object-center rounded-2xl shadow-lg"
        />


    <div className="text-lg leading-relaxed space-y-6 relative">
      {parse(fullContent)}
    </div>
    <div className="mt-12">
  <h3 className="text-xl font-semibold mb-4 text-white">Share this post:</h3>
  <div className="flex gap-4">
   
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
    >
      <FaFacebookF />
    </a>
    
   
    <a
      href={`https://instagram.com/weboctane?u=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full"
    >
      <FaInstagram />
    </a>

    
    <a
      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + " " + window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
    >
      <FaWhatsapp />
    </a>

  
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>


      
        <div className="bg-gray-900 p-6 rounded-xl text-gray-300 shadow-md">
          <h4 className="text-[#e3b843] text-lg font-semibold">{blog.author}</h4>
          <p className="text-sm mt-1">
         { blog.authordescription}
          </p>
        </div>
      </div>

    
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-white text-xl font-semibold mb-4">Recent Posts</h3>
          <ul className="space-y-3 text-sm">
            <li className="text-[#e3b843] hover:underline cursor-pointer">How to scale your brand</li>
            <li className="text-[#e3b843] hover:underline cursor-pointer">Top 5 design trends</li>
            <li className="text-[#e3b843] hover:underline cursor-pointer">Startup survival tips</li>
          </ul>
        </div>

                <div 
                    className="bg-black text-[#101010] shadow-lg rounded-lg p-6 space-y-4"
                    style={{
                        backgroundImage: `url(${newsletter})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h5 className="font-semibold text-xl font-semibold text-gray-900">Comment</h5>
                    <p className="text-sm">
                        Leave A Comment For Us?
                    </p>
                    <motion.input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full px-4 py-2 font-semibold border bg-gray-200 rounded-md focus:ring-2 focus:ring-black outline-none" 
                        whileFocus={{ scale: 1.05 }} 
                    />
                    <motion.input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-2 font-semibold border bg-gray-200 rounded-md focus:ring-2 focus:ring-black outline-none" 
                        whileFocus={{ scale: 1.05 }} 
                    />
        <motion.textarea
  placeholder="Comment"
  className="w-full px-4 py-2 font-semibold border bg-gray-200 rounded-md focus:ring-2 focus:ring-black outline-none resize-none overflow-hidden"
  whileFocus={{ scale: 1.05 }}
  rows={1} 
  onInput={(e) => {
    e.target.style.height = "auto"; 
    e.target.style.height = `${e.target.scrollHeight}px`; 
  }}
/>
                    <motion.button 
                        className="w-full bg-[#af8a26] text-center text-gray-900 rounded-[22px] border-0 px-3 focus:outline-none hover:bg-[#5a4713] font-semibold py-2 rounded-lg flex items-center justify-center hover:opacity-90 transition hover:text-white hover:cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
                        whileHover={{ scale: 1.05 }} 
                        aria-label="Submit"
                    >
                        Submit
                    </motion.button>
                </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-white text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#e3b843] cursor-pointer">Marketing</li>
            <li className="hover:text-[#e3b843] cursor-pointer">Design</li>
            <li className="hover:text-[#e3b843] cursor-pointer">Technology</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blogsdetails;
