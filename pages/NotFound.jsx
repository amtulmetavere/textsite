import React from 'react';
import { Link } from 'react-router-dom';
import pagenotfound from '../assets/pagenotfound.jpg';
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
<div className="m-6">
      <img
loading="lazy" src={pagenotfound} alt="Page Not Found" className="w-1/2 mx-auto" />
      </div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>
      <Link to="/home" className="text-[#e3b843] hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;