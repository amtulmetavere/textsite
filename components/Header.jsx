import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom"; 
import Logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

// Lock scroll when menu is open
useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    document.body.style.overflow = ''; // Reset to default
  }

  // Cleanup on unmount
  return () => {
    document.body.style.overflow = '';
  };
}, [open]);


  const [openDropdown, setOpenDropdown] = useState(false);
  const hideTimeoutRef = React.useRef(null);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };
  return (
    <motion.nav>
      <header className="text-gray-600 body-font flex justify-center">
        <div className="w-full mx-auto flex px-5  md:flex-row items-center absolute z-100">
          <div className="flex mt-2 md:mb-0 items-center justify-center p-4 "
          style={{  position: "relative" }}>
            <img
loading="lazy" src={Logo} alt="Logo" className="w-24 md:w-45  w-40 lg:w-45 xl:w-50 h-auto" />
          </div>

          <nav className="hidden md:ml-auto md:mr-auto xl:flex my-3 flex-wrap items-center text-xs lg:text-base bg-white p-1 gap-1 rounded-[30px]">


            {["Home", "About Us" , "Blogs"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "")}`}  
                className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
                  before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
                  before:transition-all before:duration-300 before:scale-x-0 before:origin-left 
                  hover:before:scale-x-100 hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">{item}</span>
              </Link>
            ))}

         
            <li
  className="relative list-none"
  onMouseEnter={() => {
    clearTimeout(hideTimeoutRef.current);
    setOpenDropdown(true);
  }}
  onMouseLeave={() => {
    hideTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 200); 
  }}
>
<div
  onClick={() => setOpenDropdown((prev) => !prev)}
  className="relative flex items-center gap-2 px-5 py-2 hover:text-white rounded-[25px] cursor-pointer overflow-hidden transition-colors duration-100 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] before:transition-all before:duration-300 before:scale-x-0 before:origin-left hover:before:scale-x-100"
>
  <Link
    to="/services"
    className="relative z-10 font-semibold transition-colors duration-300"
  >
    Services
  </Link>
  <span className="relative z-10">
    {openDropdown ? (
      <ChevronUp size={16}  />
    ) : (
      <ChevronDown size={16} />
    )}
  </span>
</div>
              {openDropdown && (
                <ul className="absolute left-0 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-300 ease-in-out z-50">
                  {[
               
                { name: "Web Development", slug: "webdevelopment" },
                { name: "Social Media", slug: "socialmedia" },
                { name: "Search Engine Optimization", slug: "searchengineoptimization" },
                { name: "PAY-PER-CLICK", slug: "payperclick" },
                { name: "VIDEO AND DIGITAL CONTENT", slug: "videoanddigitalcontent" },
                { name: "POS SYSTEM", slug: "possystem" }
              
              
                  ].map((service, index) => (
                    <li key={index}>
                      <Link
                        to={`/services/${service.slug}`}
                        aria-label={`Read more about our ${service.name} service`}
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white rounded-md"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>




            {["Our Clients", "Our Projects", "Contact Us"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "")}`}  
                className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
                  before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
                  before:transition-all before:duration-300 before:scale-x-0 before:origin-left
                  hover:before:scale-x-100 hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">{item}</span>
              </Link>
            ))}
          </nav>
          <Link
    to="/account"
    className="relative z-10 font-semibold transition-colors duration-300"
  >
           <button  className="hidden xl:inline-flex items-center px-7 text-center font-semibold py-3 mt-4 md:mt-0 hover:cursor-pointer duration-300 btn-8" aria-label="Join Us">
          Join Us


          </button>
          </Link>
        </div>
      </header>

      
      <div className=" xl:hidden z-100 cursor-pointer transition-colors duration-300 text-white rounded-2xl p-2 absolute top-6 right-6 backdrop-blur-sm bg-white/40" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>

    
      <motion.ul
        initial={{ x: "-100%" }}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={`fixed top-0 right-0 w-full backdrop-blur-sm bg-white/40 shadow-lg flex flex-col h-full flex flex-col lg:justify-between justify-center space-y-6 text-lg p-8 xl:hidden z-50 ${open ? "block" : "hidden"}`}
      >
        {["Home", "About Us" , "Blogs"].map((item) => (
        
            <Link  key={item} to={`/${item.toLowerCase().replace(" ", "")}`} className="text-white e p-2 border-b-2 border-white hover:text-black transition"
            onClick={() => setOpen(false)} 
            >
              {item}
            </Link>
      
        ))}

<li
      className="relative list-none e p-2 border-b-2 border-white"
      onMouseEnter={() => {
        clearTimeout(hideTimeoutRef.current);
        setOpenDropdown(true);
      }}
      onMouseLeave={() => {
        hideTimeoutRef.current = setTimeout(() => {
          setOpenDropdown(false);
        }, 200);
      }}
    >
    
      <div
        onClick={() => {
          setOpenDropdown((prev) => !prev);
        }}
        className="relative text-white flex items-center gap-1 rounded-[25px] cursor-pointer overflow-hidden hover:text-black transition-colors duration-300"
      >
        <Link to="/services" className="z-10 " 
        onClick={() => setOpen(false)} 
            >
          Services
        </Link>
        {openDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {openDropdown && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-300 ease-in-out z-50">
          {[
            { name: "Web Development", slug: "webdevelopment" },
            { name: "Social Media", slug: "socialmedia" },
            { name: "Search Engine Optimization", slug: "searchengineoptimization" },
            { name: "PAY-PER-CLICK", slug: "payperclick" },
            { name: "VIDEO AND DIGITAL CONTENT", slug: "videoanddigitalcontent" },
            { name: "POS SYSTEM", slug: "possystem" },
          ].map((service, index) => (
            <li key={index}>
              <Link
                to={`/services/${service.slug}`}
                className="block px-4 py-2 text-gray-900  hover:text-black rounded-md"
                onClick={() => setOpen(false)} 
                >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>

            {["Our Clients", "Our Projects", "Contact Us"].map((item) => (
         
             <Link  key={item} to={`/${item.toLowerCase().replace(" ", "")}`} className="text-white p-2 border-b-2 border-white hover:text-black transition" 
             onClick={() => setOpen(false)} 
             >
              {item}
            </Link>
       
        ))}
   <Link
    to="/account"
    
  >
        <button className="bg-[#e3b843] w-full hover:bg-[#af8a26] cursor-pointer text-white py-2 px-4 rounded-md transition duration-300" onClick={() => setOpen(false)} 
           aria-label="Join Us" 
           >
         Join Us
        </button>
        </Link>
      </motion.ul>
    </motion.nav>
  );
};

export default Header;
