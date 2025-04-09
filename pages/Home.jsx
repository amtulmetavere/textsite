import React from "react";
import gradient from "../assets/bg.jpg";
import About from '../components/About';
import Brands from '../components/brands';
import Help from '../components/Help';
import Cta from '../components/Cta';
import Cta2 from '../components/Cta2';
import Testimonial from '../components/Testimonial';
import Teams from '../components/Teams';
import Projects from "../components/Projects";
import { motion } from "framer-motion"; 
import { useNavigate,Link } from 'react-router-dom';
import Blogscomp from '../components/Blogscomp'

function Home() {
  const navigate = useNavigate();

  const handleShowMore = () => {
  
   
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    navigate('/ourprojects'); 
  };
  const handleShowMoreBlogs = () => {
  
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  navigate('/blogs'); 
};
  return (
    <div>
    
    <motion.section
        className="relative text-center w-full h-[600px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      
      >
       
        <div className="absolute inset-0 bg-black/70"></div>

       <motion.div className="relative text-white flex flex-col items-center gap-4"
       initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
         <motion.h4 className="lg:text-xl text-md" 
         initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >Elevate Your Business</motion.h4>
          <motion.h2 className="lg:text-7xl text-5xl font-bold bg-[#af8a26] bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
            Experience
          </ motion.h2>
          <motion.p className="text-lightText lg:w-200 sm:w-80 md-w-150 text-xl mb-6 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
            Empowering brands with creative and result-driven solutions
          </motion.p>
          <div className="bg-black">
          <Link to="/contactus">
          <motion.button
              aria-label="Get Started"
              className="btn-8 relative font-bold px-6 py-2 transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.05 }}
              whileHover={{ scale: 1.05 }}
              >
              Contact Us
            </ motion.button>
            </Link>
          </div>
        </ motion.div>
      </motion.section>

    
      <About />
      <Help />
      <Cta />
      <Projects limit={6} />
      <motion.button
       onClick={handleShowMore}
       className="btn-8 flex mx-auto mb-10 text-white bg-[#ab8112] rounded-xl border-0 py-2 px-8 focus:outline-none  hover:shadow-inner hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:cursor-pointer hover:bg-[#70550b]"
       whileHover={{ scale: 1.05 }}
       aria-label="Show More">
          Show More
          </motion.button>
      <Brands />
      <Testimonial />
      <Teams />
      <Blogscomp limit={3} />
      <motion.button
       onClick={handleShowMoreBlogs}
       className="btn-8 flex mx-auto mb-10 text-white bg-[#ab8112] rounded-xl border-0 py-2 px-8 focus:outline-none  hover:shadow-inner hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:cursor-pointer hover:bg-[#70550b]"
       whileHover={{ scale: 1.05 }}
       aria-label="Show More">
          Show More
          </motion.button>
      <Cta2 />
    </div>
  );
}

export default Home;