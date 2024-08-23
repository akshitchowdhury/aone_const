import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import inq1 from "../assets/images/400X20001.jpg";
import inq2 from "../assets/images/400X20002.jpg";
import inq3 from "../assets/images/400X20003.jpg";
import inq4 from "../assets/images/400X20004.jpg";

import Premium from './Packages/Premium';
import Basic from './Packages/Basic';
import Best from './Packages/Best';
import { Link } from 'react-router-dom';
const Inquiry = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Select Service');

  const images = [inq1, inq2, inq3];
  const descriptions = [
    "Designing an affordable dream home involves making thoughtful choices to optimize costs without compromising on comfort and functionality.",
    "Construct your Dream Home with Tech Enabled Construction. Build your dream home and get assured quality, great prices and absolute transparency.",
    "Beautify your Home with our design experts, to find the right balance between you and your space."
  ];

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setDropdownOpen(false);
  };

  return (
<>
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {['BASIC', 'BEST', 'PREMIUM'].map((title, index) => (
              <div key={index} className="bg-white rounded-none shadow-md overflow-hidden">
                <img 
                  className="w-full h-48 object-cover" 
                  src={images[index]} 
                  alt={`${title} home`} 
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2">{title}</h5>
                  <p className="text-gray-600 text-left mb-4">
                    {descriptions[index]}
                  </p>
                  <button className="bg-zinc-950 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300">
                   <Link to="/packages">
                   More
                   </Link>
                   
                    
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0">
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-semibold text-center mb-8 text-zinc-950">SEND US A MESSAGE</h2>
            <form id="contact-form" action="https://whizthemes.com/nazmul/php/mail.php" method="post">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-zinc-950">Your Name*</label>
                  <input type="text" name="name" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-zinc-950">Your Email*</label>
                  <input type="email" name="email" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="relative flex flex-col">
                  <label className="mb-2 font-medium text-zinc-950">Services*</label>
                  <button 
                    type="button" 
                    className="border border-gray-300 p-2 rounded flex items-center justify-between w-full" 
                    onClick={handleDropdownToggle}
                  >
                    <span>{selectedSubject}</span>
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
                      <ul className="py-1">
                        {['Residential', 'Commercial', 'Interiors'].map((option, index) => (
                          <li 
                            key={index} 
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSubjectSelect(option)}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-zinc-950">Message*</label>
                  <textarea name="message" className="border border-gray-300 p-2 rounded" rows="6"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">SEND NOW</button>
                </div>
              </div>
            </form>
            <div className="form-output mt-4 text-center">
              <p className="form-message text-zinc-950"></p>
            </div>
          </div>
          
          <div className="mt-6">
            <h5 className="text-xl font-semibold text-center mb-4">For More Information</h5>
            <hr className="mb-4" />
            <div className="flex items-start">
              <img src="images/64X6401.jpg" alt="Contact" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-gray-600 mr-2" />
                  <span>+91-81479 29991</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-gray-600 mr-2" />
                  <span>+91-73490 59991</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-gray-600 mr-2" />
                  <span>+91-91640 23687</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-600 mr-2" />
                  <a href="mailto:enquiry@a-onebuilders.com" className="text-blue-500 hover:underline">
                    enquiry@a-onebuilders.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <Basic/>
    <Best/>
    <Premium/> */}
    </>
  );
};

export default Inquiry;
