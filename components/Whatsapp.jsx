import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa6'; 

const Whatsapp = () => {
  const phoneNumber = "+923330209200";
  const message = "Hello! I am interested in WebOctane services. Can you provide more details?";

  return (
    <div className="fixed bottom-6 left-6 z-50 group flex items-center space-x-2 flex-row-reverse">
      
     
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-green-600 border-2 border-green-500 px-4 py-2 rounded-full shadow-md text-sm font-semibold flex items-center space-x-2">
        <FaCommentDots size={14} />
        <span>Chat with us</span>
      </div>

      
      <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
};

export default Whatsapp;
