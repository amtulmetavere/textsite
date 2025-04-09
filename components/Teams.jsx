import React from 'react'
import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg'
import fb_icon from "../assets/facebook.png";
import linkin_icon from "../assets/linkedin.png";
import twitter_icon from "../assets/x-twitter-icon-1.png";
import insta_icon from "../assets/yelp.png";
const socialIcons = [
  { src: fb_icon, alt: "Facebook" },
  { src: linkin_icon, alt: "LinkedIn" },
  { src: insta_icon, alt: "Instagram" },
  { src: twitter_icon, alt: "Twitter" },
];
const galleryItems = [
    {
      id: 1,
      subtitle: " Lead Frontend Developer",
      title: "Muhammad Ali",
      description: "Ali brings over 6 years of experience in creating elegant and responsive web applications...",
      imageUrl: Team1,
      socials: [
        { icon: fb_icon, alt: "Facebook", link: "https://facebook.com/muhammad.ali" },
        { icon: linkin_icon, alt: "LinkedIn", link: "https://linkedin.com/in/muhammad-ali" },
        { icon: insta_icon, alt: "Instagram", link: "https://instagram.com/muhammad.ali" },
        { icon: twitter_icon, alt: "Twitter", link: "https://twitter.com/muhammad_ali" },
      ],
    },
    {
      id: 2,
      subtitle: "Backend Architect",
      title: "Faisal Khan",
      description: "Faisal designs robust backend infrastructures using Node.js, Express, and microservices. His focus is on performance, security, and building systems that scale as your business grows",
      imageUrl: Team2,
      socials: [
        { icon: fb_icon, alt: "Facebook", link: "https://facebook.com/muhammad.ali" },
        { icon: linkin_icon, alt: "LinkedIn", link: "https://linkedin.com/in/muhammad-ali" },
        { icon: insta_icon, alt: "Instagram", link: "https://instagram.com/muhammad.ali" },
        { icon: twitter_icon, alt: "Twitter", link: "https://twitter.com/muhammad_ali" },
      ],
    },
    {
      id: 3,
      subtitle: "Product Manager",
      title: "Elon Musk",
      description: "coordinates cross-functional teams to turn ideas into successful products. With a keen eye for detail and strong communication skills, she ensures every project meets business goals and user needs.",
      imageUrl: Team1,
      socials: [
        { icon: fb_icon, alt: "Facebook", link: "https://facebook.com/faisal.khan" },
        { icon: linkin_icon, alt: "LinkedIn", link: "https://linkedin.com/in/faisal-khan" },
        { icon: insta_icon, alt: "Instagram", link: "https://instagram.com/faisal.khan" },
        { icon: twitter_icon, alt: "Twitter", link: "https://twitter.com/faisal_khan" },
      ],
    },
    {
      id: 4,
      subtitle: " QA & Automation Engineer",
      title: "Abdul Rahman",
      description: "specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
      imageUrl: Team2,
      socials: [
        { icon: fb_icon, alt: "Facebook", link: "https://facebook.com/muhammad.ali" },
        { icon: linkin_icon, alt: "LinkedIn", link: "https://linkedin.com/in/muhammad-ali" },
        { icon: insta_icon, alt: "Instagram", link: "https://instagram.com/muhammad.ali" },
        { icon: twitter_icon, alt: "Twitter", link: "https://twitter.com/muhammad_ali" },
      ],
    },
    
  ];
const Teams = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-14 mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">Meet our team</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We talk a lot about hope helping and teamwork</h1>
      
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
      {galleryItems.map(item => (
        <div key={item.id} className="lg:w-1/4  md:w-1/2 sm:w-1/3 p-4">
          <div className="flex relative group overflow-hidden h-120  rounded-[40px]">
            <img
loading="lazy"
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center "
              src={item.imageUrl}
            />

 <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />


<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          
            <div className="px-8 py-2  relative z-10 w-full opacity-100 rounded-t-[40px] group-hover:bg-black group-hover:opacity-100 transform translate-y-90 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
            
              <h1 className="bottom-0 relative title-font text-4xl font-bold text-white mb-3">
                {item.title}
              </h1>
              <h2 className="bottom-0 relative tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                {item.subtitle}
              </h2>

              <div className=" py-10 relative z-10 w-full opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-4 transition-all duration-500 ease-in-out"> 
              <p className="leading-relaxed">
                {item.description}
              </p>
              <ul className="flex items-center pt-3 gap-3">
              {item.socials.map((social, index) => (
  <li key={index} className="p-2 bg-black rounded-full hover:scale-110 transition">
    <a href={social.link} target="_blank" rel="noopener noreferrer">
      <img
loading="lazy" src={social.icon} alt={social.alt} className="w-6 h-6" />
    </a>
  </li>
))}

                    </ul>
            </div>
            </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  </section>
  )
}

export default Teams
