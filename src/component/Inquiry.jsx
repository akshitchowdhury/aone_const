// import React from 'react';
// import { FaMapMarkerAlt, FaRupeeSign, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import inq1 from "../assets/images/400X20001.jpg";
// import inq2 from "../assets/images/400X20002.jpg";
// import inq3 from "../assets/images/400X20003.jpg";
// import inq4 from "../assets/images/400X20004.jpg";

// const Inquiry = () => {
//   const images = [inq1, inq2, inq3, inq4];
//   const descriptions = [
//     "Designing an affordable dream home involves making thoughtful choices to optimize costs without compromising on comfort and functionality.",
//     "Construct your Dream Home with Tech Enabled Construction. Build your dream home and get assured quality, great prices and absolute transparency.",
//     "Beautify your Home with our design experts, to find the right balance between you and your space.",
//     "Beautify your Home with our design experts, to find the right balance between you and your space."
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full lg:w-2/3 px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {['BASIC', 'BEST', 'PREMIUM', 'ULTIMATE'].map((title, index) => (
//               <div key={index} className="bg-white rounded-none shadow-md overflow-hidden">
//                 <img 
//                   className="w-full h-48 object-cover" 
//                   src={images[index]} 
//                   alt={`${title} home`} 
//                 />
//                 <div className="p-4">
//                   <h5 className="text-xl font-semibold mb-2">{title}</h5>
//                   <p className="text-gray-600 text-left mb-4">
//                     {descriptions[index]}
//                   </p>
//                   <button className="bg-zinc-950 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300">
//                     More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0">
//           <div className="bg-gray-100 rounded-lg shadow-md p-6">
//             <h3 className="text-2xl font-semibold text-center mb-4">Find Your Home</h3>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
//                 <select id="location" className="w-full p-2 border rounded">
//                   <option value="">Any</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="pricefrom" className="block text-gray-700 mb-2">Price From</label>
//                 <div className="flex items-center">
//                   <div className="bg-gray-200 p-2 rounded-l">
//                     <FaRupeeSign className="text-gray-600" />
//                   </div>
//                   <input type="text" id="pricefrom" className="flex-grow p-2 border-t border-b border-r rounded-r" />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="priceto" className="block text-gray-700 mb-2">Price To</label>
//                 <div className="flex items-center">
//                   <div className="bg-gray-200 p-2 rounded-l">
//                     <FaRupeeSign className="text-gray-600" />
//                   </div>
//                   <input type="text" id="priceto" className="flex-grow p-2 border-t border-b border-r rounded-r" />
//                 </div>
//               </div>
//               <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
//                 Submit
//               </button>
//             </form>
//           </div>
          
//           <div className="mt-6">
//             <h5 className="text-xl font-semibold text-center mb-4">For More Information</h5>
//             <hr className="mb-4" />
//             <div className="flex items-start">
//               <img src="images/64X6401.jpg" alt="Contact" className="w-16 h-16 rounded-full mr-4" />
//               <div>
//                 <div className="flex items-center mb-2">
//                   <FaPhoneAlt className="text-gray-600 mr-2" />
//                   <span>8147929991</span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <FaPhoneAlt className="text-gray-600 mr-2" />
//                   <span>7349059991</span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <FaPhoneAlt className="text-gray-600 mr-2" />
//                   <span>9164023687</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaEnvelope className="text-gray-600 mr-2" />
//                   <a href="mailto:enquiry@a-onebuilders.com" className="text-blue-500 hover:underline">
//                     enquiry@a-onebuilders.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Inquiry;

import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import inq1 from "../assets/images/400X20001.jpg";
import inq2 from "../assets/images/400X20002.jpg";
import inq3 from "../assets/images/400X20003.jpg";
import inq4 from "../assets/images/400X20004.jpg";

const Inquiry = () => {
  const images = [inq1, inq2, inq3, inq4];
  const descriptions = [
    "Designing an affordable dream home involves making thoughtful choices to optimize costs without compromising on comfort and functionality.",
    "Construct your Dream Home with Tech Enabled Construction. Build your dream home and get assured quality, great prices and absolute transparency.",
    "Beautify your Home with our design experts, to find the right balance between you and your space.",
    "Beautify your Home with our design experts, to find the right balance between you and your space."
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {['BASIC', 'BEST', 'PREMIUM', 'ULTIMATE'].map((title, index) => (
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
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0">
          <div className="bg-gray-100 rounded-none shadow-md p-6">
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
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-zinc-950">Subject*</label>
                  <input type="text" name="subject" className="border border-gray-300 p-2 rounded" />
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
                  <span>8147929991</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-gray-600 mr-2" />
                  <span>7349059991</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-gray-600 mr-2" />
                  <span>9164023687</span>
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
  );
};

export default Inquiry;