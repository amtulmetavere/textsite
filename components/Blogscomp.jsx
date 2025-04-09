import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import blogimg from "../assets/projectsprofile.jpg" ;
import blogimg2 from "../assets/webdevelopment.jpg" ;
const blogData = [
  {
    id: 1,
    category: "Technology",
    title: "The Catalyzer",
    description: "Exploring the cutting-edge technology that is transforming the software industry.",
    content: "In this post, we dive deep into the latest advancements in software technology, from AI to cloud computing, and how they are reshaping businesses around the world.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 5, 2025",
    views: "1.2K",
    comments: 6,
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "The Future of Work",
    description: "Embrace the digital nomad lifestyle and discover the opportunities remote work can bring.",
    content: "14 Trends That Are Currently Impacting the Future of Work\nEven though we didn’t expect the future of work to come so quickly, the shift to remote work and the emergence of virtual workplaces is forcing us to adapt to these changes.\n \nFor employers that decide to keep their centralized workspaces, the office of tomorrow will be designed to keep people connected while they are physically apart. We are expecting to see the rise of virtual work spaces in order to enable employees for success and keep their productivity levels high.\n \nLet’s now take a look into some emerging trends that have brought what we used to call the future of work faster than expected.\n\n1. Remote work as the new normal way of working\nYou may remember the saying: “The future of work is remote!” It is just unbelievable to see how fast the future of work actually became the new normal, isn’t it?\n\nAt the beginning of this crisis, many organizations thought that remote work was impossible for them to handle as Talent Management practices have been completely disrupted. However, this is not the case as many of them are considering keeping remote work options even after this pandemic.\n\n68% of CFOs say crisis-driven transitions to remote work will make their company better in the long run. Currently, 40% of companies say they’re planning to accelerate the adoption of new ways of working.\n\nAlso, many organizations understand that, with the return to the workplaces, the way we work will still be significantly different than it was a few months ago.\n\nIt is crucial for employers to adapt to new employee behaviors and new ways of working that make the most sense for their workplaces.\n\n2. Accelerated digital transformations\nMany organizations will remember 2020 as the year of digital transformation. Digitalizing both internal and external processes today is essential for businesses to keep running as smoothly as possible.\n\nTools and software solutions for employee communication are at the top of the list when it comes to implementing new digital solutions within the workplaces. Such solutions are essential to keep employees connected and informed about the important and, now more than ever before, frequent company updates as well as updates from the local authorities.\n\n📚 Also check our article on Organizational Communication and 9 Steps to Do it Right.\n\nHowever, as digital transformation has never been an easy process to go through, many organizations are struggling to align their workplaces and get employees’ support when it comes to the adoption of the new workplace technologies.\n\nTherefore, proper employee communication plays an extremely important role in this process especially now when social distancing is still recommended.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 10, 2025",
    views: "900",
    comments: 12,
  },
  {
    id: 3,
    category: "Development",
    title: "Building Scalable Systems",
    description: "Why scalability is crucial in modern software development and how to design systems that grow with your business.",
    content: "This post explores strategies for building scalable systems that can handle growth and change without breaking down. Topics include cloud architecture, microservices, and database optimization.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 15, 2025",
    views: "1K",
    comments: 8,
  },
  {
    id: 4,
    category: "Marketing",
    title: "Digital Marketing for Software Companies",
    description: "Maximizing your software business's reach through effective digital marketing strategies.",
    content: "In this blog, we cover various digital marketing strategies, including SEO, PPC, and social media marketing, and how software companies can use these tools to increase their visibility and attract customers.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 18, 2025",
    views: "750",
    comments: 4,
  },
  {
    id: 5,
    category: "UX/UI Design",
    title: "User-Centered Design Principles",
    description: "The importance of user experience (UX) and user interface (UI) design in software development.",
    content: "Good design can make or break a software product. This post delves into the principles of user-centered design, focusing on how understanding your user can lead to better product development.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 20, 2025",
    views: "500",
    comments: 10,
  },
  {
    id: 6,
    category: "Software Engineering",
    title: "Agile Methodologies in Software Development",
    description: "How agile methodologies streamline software development and lead to faster delivery times.",
    content: "This post explains the principles behind agile software development, the importance of iterative processes, and how software teams can apply agile practices to meet business goals more effectively.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 22, 2025",
    views: "1.1K",
    comments: 5,
  },
  {
    id: 7,
    category: "Tech Trends",
    title: "AI in Software Development",
    description: "How artificial intelligence is changing the way software is developed and tested.",
    content: "AI is making waves in the software industry. This post examines how AI is automating repetitive tasks, improving testing and debugging, and even assisting in code generation to accelerate the development process.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 25, 2025",
    views: "1.3K",
    comments: 7,
  },
  {
    id: 8,
    category: "Business",
    title: "How to Start a Software Company",
    description: "The essential steps for launching a successful software startup.",
    content: "Starting a software company involves more than just writing code. This post covers the key steps, from identifying a market need to building a team and acquiring funding, all while creating a product that stands out.",
    imageUrl: blogimg,
    imageUrl2: blogimg2,
    img2desc: "Web Development",
    author: "John Doe",
    authordescription: "Tech Enthusiast",
    date: "April 30, 2025",
    views: "800",
    comments: 9,
  },
];
  

  
const Blogscomp = ({ limit }) => {
    const navigate = useNavigate();
  
    const handleCardClick = (post) => {
      navigate(`/blog/${post.id}`, { state: post }); 
    };
  

    const displayedBlogs = limit ? blogData.slice(0, limit) : blogData;
  
    return (
      <div className="text-gray-300">
        <section className="body-font">
          <div className="text-center mt-10">
            <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">
              WebOctane Blog
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">
              Stay informed with expert insights and creative ideas
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
            </div>
          </div>
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {displayedBlogs.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="p-4 md:w-1/3"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => handleCardClick(post)}
                >
                  <div className="h-full bg-[#1a1a1a] border border-[#2a2a2a] cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-[#e3b84340] transition duration-300">
                    <img
                    loading="lazy"
                      className="lg:h-68 md:h-52 w-full object-cover object-center"
                      src={post.imageUrl}
                      alt={post.title}
                    />
                    <div className="p-6">
                      <h2 className="text-xs font-semibold text-[#e3b843] tracking-widest mb-1">
                        {post.category}
                      </h2>
                      <h1 className="text-lg font-bold text-[#e3b843] mb-2">
                        {post.title}
                      </h1>
                      <p className="text-sm text-gray-400 mb-4">
                        {post.description.substring(0, 100)}...
                      </p>
                      <p className="text-xs text-gray-500 mb-4 italic">
                        {post.date}
                      </p>
                      <div className="flex items-center flex-wrap text-sm">
                        <span className="text-[#e3b843] font-medium inline-flex items-center cursor-pointer hover:underline">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Blogscomp;