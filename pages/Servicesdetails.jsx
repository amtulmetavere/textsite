import { useParams } from 'react-router-dom';
import Footer from '../assets/webdevelopment.jpg';
import { motion } from "framer-motion";
import Projects, { allCategories } from '../components/Projects'; 
import wavelines from '../assets/wavelinesbg.png';
const servicesData = {
    
        webdevelopment: {
            img: Footer,
          title: "Web Development",
          description: "We craft responsive websites with modern technologies like React, Next.js, and Tailwind CSS.",
        },
        socialmedia: {
            img: Footer,
          title: "Social Media",
          description: "We build strong brand presence through strategic social media campaigns and content creation.",
        },
        searchengineoptimization: {
            img: Footer,
          title: "Search Engine Optimization",
          description: "Boost your search engine rankings with our expert SEO strategies and technical audits.",
        },
        payperclick: {
            img: Footer,
          title: "Pay-Per-Click",
          description: "Maximize your ROI with targeted PPC advertising on Google Ads, Facebook, and more.",
        },
        videoanddigitalcontent: {
            img: Footer,
          title: "Video and Digital Content",
          description: "We produce engaging video and digital content to capture your audience’s attention.",
        },
        possystem: {
            img: Footer,
          title: "POS System",
          description: "We provide custom POS solutions tailored to streamline your business operations.",
        }
      
      
};

const ServicesDetails = () => {
  const { serviceSlug } = useParams(); 
  const service = servicesData[serviceSlug];

  if (!service) {
    return <div className="text-center text-white mt-10">Service not found.</div>;
  }


  const projects = allCategories[serviceSlug] || []; 

  return (
    <div className="min-h-screen p-10 bg-black text-white text-center">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto flex flex-wrap gap-5 justify-center">
            <img
loading="lazy"
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg border-[#e3b843] border-2"
              src={service.img}
            />
            <div className="lg:w-[30%] w-full block lg:flex lg:flex-col lg:justify-between xl:pl-10 lg:py-6 mt-6 lg:mt-3">
           
              <h2 className="text-lg title-font text-start text-[#e3b843] tracking-widest">
                {service.title}
              </h2>
              <div>
              <h1 className="text-white text-3xl text-start title-font font-medium mb-1">
                {service.description}
              </h1>
              <div className="flex mt-6">
                <div className="w-[50%] h-1 rounded-full bg-[#e3b843] inline-flex mb-4"></div>
              </div></div>
              <p className="leading-relaxed w-[90%] text-start">
                At Web Octane, we understand that your website is the face of your business. Our Web Development services are designed to give you a strong online presence that works for you. Whether you’re just starting out or looking to improve your existing site, we’re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">
            {service.title} Projects
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">
            Featured Projects in {service.title}
          </h1>
          <div className="flex m-7 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
          </div>

         
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 h-100">
                <div className="flex relative h-full">
                  <img
loading="lazy"
                    alt="gallery"
                   
                    className="absolute inset-0
                    h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-500">
                    <h2 className="tracking-widest text-sm title-font font-medium text-[#e3b843] mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-gray-300 body-font relative bg-black"
      style={{
        backgroundImage: `url(${wavelines})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      >
     
  <div className="container px-5 py-10 mx-auto z-10">
    <div className="flex flex-col text-center w-full mb-12">
     
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#e3b843]">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Reach out to us with any inquiries or project ideas — we’re here to help you succeed.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        
        <div className="p-2 w-1/2">
          <div className="relative  text-start">
            <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-600 focus:border-[#e3b843] focus:bg-gray-900 focus:ring-2 focus:ring-[#e3b843] text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      
        <div className="p-2 w-1/2">
          <div className="relative text-start">
            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-600 focus:border-[#e3b843] focus:bg-gray-900 focus:ring-2 focus:ring-[#e3b843] text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      
        <div className="p-2 w-1/2">
          <div className="relative text-start">
            <label for="service" className="leading-7 text-sm text-gray-400">Choose service</label>
            <select id="service" name="service" className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-600 focus:border-[#e3b843] focus:bg-gray-900 focus:ring-2 focus:ring-[#e3b843] text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="" disabled selected className="text-gray-500">Select a service</option>
              <option value="webdevelopment">Web Development</option>
              <option value="socialmedia">Social Media Management</option>
              <option value="searchengineoptimization">Search Engine Optimization</option>
              <option value="payperclick">Pay-Per-Click Advertising</option>
              <option value="videoanddigitalcontent">Video & Digital Content</option>
              <option value="possystem">POS System Development</option>
            </select>
          </div>
        </div>
        <div className="p-2 w-1/2">
  <div className="relative text-start">
    <label for="number" className="leading-7 text-sm text-gray-400">Contact no</label>
    <input
      type="tel"
      id="number"
      name="number"
      className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-600 focus:border-[#e3b843] focus:bg-gray-900 focus:ring-2 focus:ring-[#e3b843] text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
</div>

        <div className="p-2 w-full">
          <div className="relative  text-start">
            <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-600 focus:border-[#e3b843] focus:bg-gray-900 focus:ring-2 focus:ring-[#e3b843] h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
       
        <div className="p-2 w-full">
            <motion.button
                       aria-label="Submit"
                       className="btn-8 relative font-bold px-6 py-2 transition duration-300 cursor-pointer"
                       whileHover={{ scale: 1.05 }}
                     
                       >
                      Submit
                     </ motion.button>
        </div>
      
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-700 text-center">
          <a href="mailto:example@email.com" className="text-[#e3b843] hover:underline">hello@weboctane.tech</a>
          <p className="leading-normal my-5 text-gray-400">
          D.H.A. Phase 2 Commercial Area Defence Housing Authority, <br />
           Karachi, Pakistan
          </p>
      
          <span className="inline-flex">
  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#e3b843] transition">
    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  </a>
  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-500 hover:text-[#e3b843] transition">
    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
  </a>
  <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-500 hover:text-[#e3b843] transition">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
  </a>
  <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-500 hover:text-[#e3b843] transition">
    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    </svg>
  </a>
</span>

        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default ServicesDetails;