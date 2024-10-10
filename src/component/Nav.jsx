// 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/original/logoReal.png";
import logoTag from "../assets/original/logoTag.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: "0" });
  };

  return (
    <nav className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:h-[250px] flex items-center h-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:h-[80px]">
        <div className="flex items-center justify-center space-x-4 lg:space-x-8"> {/* Added space-x-4 and justify-center */}
          <img
            src={logo}
            alt="Logo"
            className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-auto lg:h-[100px]' // Adjust sizes for mobile
          />
          <img
            src={logoTag}
            alt="Logo Tag"
            className='w-[190px] h-[40px] lg:w-auto lg:h-[70px] md:w-[1037px] md:h-[170px]' // Adjust sizes for mobile
          />
        </div>

        <div className="hidden md:flex md:space-x-20"> {/* Used md:space-x-12 for spacing */}
          <Link 
            to="/" 
            className="text-zinc-950 font-medium relative hover:text-red-600 group"
          >
            HOME
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link 
            to="/about" 
            className="text-zinc-950 font-medium relative hover:text-red-600 group"
          >
            ABOUT
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link 
            to="/packages" 
            className="text-zinc-950 font-medium relative hover:text-red-600 group"
          >
            PACKAGES
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link 
            to="/services" 
            className="text-zinc-950 font-medium relative hover:text-red-600 group"
          >
            SERVICES
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-zinc-950 font-medium relative hover:text-red-600 group"
          >
            CONTACT US
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>

        <div className="md:hidden flex items-center p-12">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <Link onClick={handleClick} to="/" className="block text-black hover:text-red-300 p-2">Home</Link>
          <Link onClick={handleClick} to="/about" className="block text-black hover:text-red-300 p-2">About</Link>
          <Link onClick={handleClick} to="/packages" className="block text-black hover:text-red-300 p-2">Packages</Link>
          <Link onClick={handleClick} to="/services" className="block text-black hover:text-red-300 p-2">Services</Link>
          <Link onClick={handleClick} to="/contact" className="block text-black hover:text-red-300 p-2">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
