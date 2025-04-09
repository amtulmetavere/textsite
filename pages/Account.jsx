import { useState } from 'react';
import {
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import {
  FiUserPlus,
  FiLogIn,
  FiArrowRightCircle,
  FiArrowLeftCircle
} from 'react-icons/fi';

import currentHero  from "../assets/img1.jpg"; 
const Account = () => {
  const [isRegister, setIsRegister] = useState(false);

  const sharedInputStyle =
    'w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e3b843]';

  const socialIcons = (
    <div className="flex justify-center gap-4 text-xl">
      <FaFacebook />
      <FaGoogle />
      <FaGithub />
      <FaLinkedin />
    </div>
  );

  return (
    <div className="bg-black flex items-center  justify-center px-4 h-screen">
      <div className="relative w-full max-w-6xl  h-[650px] bg-gray-900 shadow-2xl overflow-hidden rounded-xl flex flex-col border-[#e3b843] border-2 md:flex-row">
        {/* Left Panel for Toggle (Desktop only) */}
       
        <div className="hidden relative md:flex w-1/2 h-full  text-white flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${currentHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

          }}>
             <div className="bg-black/90 w-full md:flex h-full flex-col items-center justify-center"> 
          {!isRegister ? (
            <>
              <FiUserPlus size={64} />
              <h2 className="text-2xl font-bold mt-4">Hello, Friend!</h2>
              <p className="mt-2 mb-4 text-center">
                Enter your personal details and start your journey with us
              </p>
              <button
                onClick={() => setIsRegister(true)}
                className="flex items-center gap-2 bg-black text-[#fff] px-4 py-2 rounded hover:bg-gray-800 transition"
                aria-label='arrowright'
              >
                Register <FiArrowRightCircle />
              </button>
            </>
          ) : (
            <>
              <FiLogIn size={64} />
              <h2 className="text-2xl font-bold mt-4">Welcome Back!</h2>
              <p className="mt-2 mb-4 text-center">
                To stay connected, please log in with your info
              </p>
              <button
                onClick={() => setIsRegister(false)}
                className="flex items-center gap-2 bg-black text-[#fff] px-4 py-2 rounded hover:bg-gray-800 transition"
                aria-label='arrowleft'
              >
                <FiArrowLeftCircle /> Log In
              </button>
            </>
          )}
          </div>
          </div>

        {/* Right Forms Section */}
        <div className="relative w-full md:w-1/2 h-full overflow-hidden bg-black/90">
          {/* Login Form */}
          <div
            className={`absolute top-0 left-0 w-full h-full p-10 transition-all duration-700 ease-in-out ${
              isRegister ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            <h1 className="text-4xl font-bold text-[#e3b843] mb-6">Log In</h1>
            <form className="space-y-5 text-white">
              <input type="email" placeholder="Email" className={sharedInputStyle} />
              <input type="password" placeholder="Password" className={sharedInputStyle} />
              <div className="flex justify-between text-sm text-gray-400">
                <label>
                  <input type="checkbox" className="mr-1" />Remember me
                </label>
                <span className="hover:underline cursor-pointer">Forgot password?</span>
              </div>
              <button
                className="w-full bg-[#e3b843] text-black font-semibold p-3 cursor-pointer rounded-md hover:bg-yellow-400 transition"
                onClick={(e) => e.preventDefault()}
                 aria-label='login'
              >
                Log In
              </button>
            </form>
            <div className="mt-6 text-center text-gray-400">
              <p className="text-sm mb-3">Or connect with</p>
              {socialIcons}
            </div>
          </div>

          {/* Register Form */}
          <div
            className={`absolute top-0 left-0 w-full h-full p-10 transition-all duration-700 ease-in-out ${
              isRegister ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <h1 className="text-4xl font-bold text-[#e3b843] mb-6">Sign Up</h1>
            <form className="space-y-5 text-white">
              <input type="text" placeholder="Full Name" className={sharedInputStyle} />
              <input type="email" placeholder="Email" className={sharedInputStyle} />
              <input type="password" placeholder="Password" className={sharedInputStyle} />
              <button
                className="w-full bg-[#e3b843] text-black font-semibold p-3 rounded-md hover:bg-yellow-400 cursor-pointer transition"
                onClick={(e) => e.preventDefault()}
                aria-label='signup'
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center text-gray-400">
              <p className="text-sm mb-3">Or sign up with</p>
              {socialIcons}
            </div>
          </div>
        </div>

        {/* Bottom Panel for Toggle (Mobile only) */}
        <div className="md:hidden mt-4 w-full p-4 bg-[#e3b843] text-black flex flex-col items-center justify-center">
          {!isRegister ? (
            <>
              <FiUserPlus size={40} />
              <h2 className="text-xl font-bold mt-2">Hello, Friend!</h2>
              <button
                onClick={() => setIsRegister(true)}
                className="mt-2 flex items-center gap-2 bg-black text-[#e3b843] px-4 py-2 rounded hover:bg-gray-800 transition"
                aria-label='arrowright'
              >
                Register <FiArrowRightCircle />
              </button>
            </>
          ) : (
            <>
              <FiLogIn size={40} />
              <h2 className="text-xl font-bold mt-2">Welcome Back!</h2>
              <button
                onClick={() => setIsRegister(false)}
                className="mt-2 flex items-center gap-2 bg-black text-[#e3b843] px-4 py-2 rounded hover:bg-gray-800 transition"
                aria-label='arrowleft'
              >
                <FiArrowLeftCircle /> Log In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
