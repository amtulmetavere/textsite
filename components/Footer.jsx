import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import fb_icon from "../assets/facebook.png";
import linkin_icon from "../assets/linkedin.png";
import twitter_icon from "../assets/x-twitter-icon-1.png";
import insta_icon from "../assets/yelp.png";
import Logo from "../assets/logo.png";
import footerbg from "../assets/footer-bg-1.png";
import newsletter from "../assets/newsletterbox.jpg";

const socialIcons = [
    { src: fb_icon, alt: "Facebook", href: "https://facebook.com/yourpage" },
    { src: linkin_icon, alt: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { src: insta_icon, alt: "Instagram", href: "https://instagram.com/yourhandle" },
    { src: twitter_icon, alt: "Twitter", href: "https://twitter.com/yourprofile" },
];

const Footer = () => {
    const location = useLocation(); 

  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-[#101010] mt-5 text-black px-8 md:px-[10%] pt-12 pb-6"
            style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-[#5d5d5d]">
             
                <div className="space-y-4">
                    <motion.img 
                        src={Logo} 
                        alt="Logo" 
                        className="w-28" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }} 
                    />
                    <p className="text-sm leading-6">
                        Web Octane is an end-to-end provider of digital marketing services. If you're looking for something to boost your business, our tools and services might be the key to your success.
                    </p>
                    <ul className="flex items-center gap-3">
                        {socialIcons.map((icon, index) => (
                            <motion.li 
                                key={index} 
                                className="p-2 bg-black rounded-full hover:scale-110 transition"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Link to={icon.href} target="_blank" rel="noopener noreferrer">
                                    <img
loading="lazy" src={icon.src} alt={icon.alt} className="w-6 h-6" />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>

               
                <div className='lg:pl-15'>
                    <h5 className="font-semibold text-lg mb-4 text-white">Quick Links</h5>
                    <ul className="space-y-2">
                        {["Home", "About Us", "Services", "Contact Us", "Our Clients", "Our Projects"].map((item) => (
                            <motion.li 
                                key={item} 
                                className="text-sm hover:text-gray-500 cursor-pointer"
                                whileHover={{ x: 10 }} 
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link to={`/${item.toLowerCase().replace(" ", "")}`}>{item}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>

        
                <div>
                    <h5 className="font-semibold text-lg mb-4 text-white">Services</h5>
                    <ul className="space-y-2">
                        {[ 
                            { name: "Web Development", slug: "webdevelopment" },
                            { name: "Social Media", slug: "socialmedia" },
                            { name: "Search Engine Optimization", slug: "searchengineoptimization" },
                            { name: "PAY-PER-CLICK", slug: "payperclick" },
                            { name: "VIDEO AND DIGITAL CONTENT", slug: "videoanddigitalcontent" },
                            { name: "POS SYSTEM", slug: "possystem" }
                        ].map((service, index) => (
                            <motion.li
                                key={index}
                                className="text-sm hover:text-gray-500 cursor-pointer"
                                whileHover={{ x: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link to={`/services/${service.slug}`} className="hover:underline">
                                    {service.name}
                                </Link>
                            </motion.li>
                        ))}
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
                    <h5 className="font-semibold text-xl font-semibold text-gray-900">Contact Us</h5>
                    <p className="text-sm">
                        Would you like to start a project with us?
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
                    <motion.input 
                        type="text" 
                        placeholder="Message" 
                        className="w-full px-4 py-2 font-semibold border bg-gray-200 rounded-md focus:ring-2 focus:ring-black outline-none" 
                        whileFocus={{ scale: 1.05 }} 
                    />
                    <motion.button 
                        className="w-full bg-[#af8a26] text-center text-gray-900 rounded-[22px] border-0 px-3 focus:outline-none hover:bg-[#5a4713] font-semibold py-2 rounded-lg flex items-center justify-center hover:opacity-90 transition hover:text-white hover:cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
                        whileHover={{ scale: 1.05 }} 
                        aria-label="Submit" 
                    >
                       Submit
                    </motion.button>
                </div>
            </div>

          
            <div className="border-t border-gray-300 text-center text-white py-4 mt-6 text-sm">
                <p>© 2025 - Web Octane</p>
                <div className="flex justify-center space-x-4 mt-2 text-gray-600">
                <Link to="/termsandconditions" className="hover:underline">Terms of Service</Link>
<Link to="/privacypolicy" className="hover:underline">Privacy Policy</Link>
<Link to="/cookiepolicy" className="hover:underline">Cookie Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
