

import React, { useEffect, useState } from 'react';
import about from "../assets/about.jpg";
import Cta from "../components/Cta";
import About from '../components/About';

import { ArrowUpRight } from 'lucide-react';
import Brands from "../components/brands";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progressItems = [
    { title: 'Digital Marketing', percent: 91, color: '#facc15' },
    { title: 'E-Commerce Marketing', percent: 87, color: '#38bdf8' },
    { title: 'Web Designing', percent: 84, color: '#a78bfa' },
    { title: 'Social Media', percent: 96, color: '#34d399' },
  ];

  const [progress, setProgress] = useState(progressItems.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) =>
        prev.map((p, i) => (p < progressItems[i].percent ? p + 1 : p))
      );
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>


      <About />


      {/* ⭐ Brands Section (Slider) */}
      <Brands />

      {/* What We Do Section */}
      <Cta />

   
   

      {/* Vision/Mission Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE: 2 Rows (Our Value + Our Mission) */}
          <div className="grid grid-rows-2 gap-6 col-span-1">
            {/* OUR VALUE */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
loading="lazy"
                src={about}
                alt="Our Value"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="relative z-10 bg-gradient-to-t from-black/90 to-black/30 p-6 h-full flex flex-col justify-end text-white">
                <p className="uppercase font-semibold text-sm mb-2 text-[#e3b843]">Our Value</p>
                <h2 className="text-2xl font-bold leading-snug">
                  Build Bold Brands <br /> with <span className="text-[#aa82f3]">WebOctane</span>.
                </h2>
                <button aria-label='next' className="mt-4 w-10 h-10 bg-[#e3b843] hover:bg-yellow-500 rounded-full flex items-center justify-center transition duration-300">
                  <ArrowUpRight className="text-black" />
                </button>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="rounded-3xl bg-gradient-to-br from-[#facc15]/20 via-[#ec4899]/20 to-[#8b5cf6]/20 p-6 shadow-lg flex flex-col justify-between border border-[#444]">
              <div>
                <p className="uppercase font-semibold text-sm text-white mb-2">Our Mission</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Crafting Experiences, Shaping Perceptions.
                </h3>
                <p className="text-white/90 text-sm">
                  We build lasting impressions through creativity, consistency, and care.
                </p>
              </div>
              <button aria-label='next' className="mt-4 w-10 h-10 bg-black hover:bg-[#e3b843] hover:text-black text-white rounded-full flex items-center justify-center transition duration-300">
                <ArrowUpRight />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Our Vision */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 lg:col-span-2">
            <img
loading="lazy"
              src={about}
              alt="Our Vision"
              className="w-full h-full object-cover absolute inset-0 z-0"
            />
            <div className="relative z-10 bg-gradient-to-t from-black/90 to-black/30 p-8 h-full flex flex-col justify-between">
              <div>
                <p className="uppercase font-semibold text-sm text-[#e3b843] mb-2">Our Vision</p>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
                  Elevate Your Digital Presence with WebOctane.
                </h3>
                <p className="text-gray-200 text-sm lg:text-base">
                  We aim to be the most impactful digital agency that helps brands grow online through
                  purposeful design, powerful development, and precise marketing strategies.
                </p>
              </div>
              <button aria-label='next' className="mt-6 w-12 h-12 bg-[#e3b843] hover:bg-yellow-500 text-black rounded-full flex items-center justify-center transition duration-300">
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;