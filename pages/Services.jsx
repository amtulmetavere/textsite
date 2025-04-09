import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Help from '../components/Help';
import Footer from '../assets/footer-bg-1.png';
import Testimonial from '../components/Testimonial';
import Cta2 from '../components/Cta2';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checklistItems = [
    { title: "Brand Strategy" },
    { title: "Logo Design & Identity" },
    { title: "Digital Marketing" },
    { title: "Brand Activation" },
    { title: "Brand Consulting" },
    { title: "Creative Design Services" },
    { title: "Content Creation" },
    { title: "Brand Monitoring" },
  ];

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
        prev.map((p, i) =>
          p < progressItems[i].percent ? p + 1 : p
        )
      );
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-black text-white">
 

      {/* Help Section */}
      <Help />

      {/* What We Do Section */}
      <section
        style={{
          position: 'relative',
          padding: '40px 20px',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${Footer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        ></div>

        {/* Black Overlay */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: '#FCD535',
              textTransform: 'uppercase',
              fontSize: '30px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              marginBottom: '8px',
            }}
          >
            What We Do
          </h2>
          <h2 style={{ fontSize: '22px', marginBottom: '30px' }}>
            Delivering Impact with Strategy
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              padding: '10px',
            }}
          >
            {progressItems.map((item, index) => (
              <div
                key={index}
                style={{
                  minWidth: '200px',
                  textAlign: 'center',
                  flex: '0 0 auto',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 10px',
                  }}
                >
                  <svg width="120" height="120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#222"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke={item.color}
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={314.16}
                      strokeDashoffset={
                        314.16 - (progress[index] / 100) * 314.16
                      }
                      transform="rotate(-90 60 60)"
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                    />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    {Math.round(progress[index])}%
                  </div>
                </div>

                <h4
                  style={{
                    color: item.color,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    color: '#ccc',
                    fontSize: '13px',
                    marginTop: '4px',
                  }}
                >
                  Empowering your brand
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
      <Cta2 />
    </div>
  );
};

export default Services;