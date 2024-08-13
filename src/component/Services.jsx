// import React, { useState } from 'react';
// import { Tab } from '@headlessui/react';
// import { HomeIcon, OfficeBuildingIcon, ColorSwatchIcon } from '@heroicons/react/outline';
// import s1 from "./../assets/images/260x10001.jpg"
// import s2 from "./../assets/images/260x10002.jpg"
// import s3 from "./../assets/images/260x10003.jpg"
// const Services = () => {
//   const [selectedTab, setSelectedTab] = useState(0);

//   const services = [
//     {
//       name: 'Residential',
//       icon: <HomeIcon className="w-5 h-5" />,
//       image: s1,
//       description: 'Residential House architecture is a style through its contemporary exterior architecture design and neutral color palette, this distinctive style of residential design blends gracefully into the surroundings. This simple residential house with a repetitive element maximizes space. Use of maximum windows, the space receives more natural light. A simple sunscreen-styled pergola provides filtered shade. Vertical slats in this concrete contemporary structure open up the space and give it a sleek modern look.',
//     },
//     {
//       name: 'Commercial',
//       icon: <OfficeBuildingIcon className="w-5 h-5" />,
//       image: s2,
//       description: 'We have always extended a hand to our customers, wherever required, even after the transactions were completed. We are a team which believes in working together, and growing together. By stepping into the customer\'s shoes, we have delivered commercial home for business with high-quality construction, to not just meet our customers\' expectations, but exceed them.',
//     },
//     {
//       name: 'Interiors',
//       icon: <ColorSwatchIcon className="w-5 h-5" />,
//       image: s3,
//       description: 'We have always extended a hand to our customers, wherever required, even after the transactions were completed. We are a team which believes in working together, and growing together. By stepping into the customer\'s shoes, we have delivered commercial home for business with high-quality construction, to not just meet our customers\' expectations, but exceed them.',
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0">
//             <h5 className="text-2xl font-semibold mb-4">Ongoing Projects</h5>
//             <hr className="mb-4" />
//             {[...Array(3)].map((_, rowIndex) => (
//               <div key={rowIndex} className="grid grid-cols-3 gap-4 mb-4">
//                 {[...Array(3)].map((_, colIndex) => (
//                   <div key={colIndex} className="flex justify-center">
//                     <img src="/images/72X72.gif" alt={`Thumbnail Image ${rowIndex * 3 + colIndex + 1}`} className="w-18 h-18" />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div className="w-full md:w-1/2">
//             <h6 className="text-xl font-semibold mb-4">Our Services</h6>
//             <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
//               <Tab.List className="flex space-x-1 rounded-xl bg-red-400 p-1">
//                 {services.map((service, index) => (
//                   <Tab
//                     key={index}
//                     className={({ selected }) =>
//                       `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-red-800
//                       ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-950 focus:outline-none focus:ring-2
//                       ${selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`
//                     }
//                   >
//                     <div className="flex items-center justify-center">
//                       {service.icon}
//                       <span className="ml-2">{service.name}</span>
//                     </div>
//                   </Tab>
//                 ))}
//               </Tab.List>
//               <Tab.Panels className="mt-2">
//                 {services.map((service, index) => (
//                   <Tab.Panel
//                     key={index}
//                     className={`rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2`}
//                   >
//                     <img src={service.image} alt={service.name} className="w-full h-48 object-cover mb-4 rounded" />
//                     <p className="text-gray-700 text-justify">{service.description}</p>
//                   </Tab.Panel>
//                 ))}
//               </Tab.Panels>
//             </Tab.Group>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { HomeIcon, OfficeBuildingIcon, ColorSwatchIcon } from '@heroicons/react/outline';
import s1 from "./../assets/images/260x10001.jpg"
import s2 from "./../assets/images/260x10002.jpg"
import s3 from "./../assets/images/260x10003.jpg"

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const services = [
    {
      name: 'Residential',
      icon: <HomeIcon className="w-5 h-5" />,
      image: s1,
      description: 'Residential House architecture is a style through its contemporary exterior architecture design and neutral color palette, this distinctive style of residential design blends gracefully into the surroundings. This simple residential house with a repetitive element maximizes space. Use of maximum windows, the space receives more natural light. A simple sunscreen-styled pergola provides filtered shade. Vertical slats in this concrete contemporary structure open up the space and give it a sleek modern look.',
    },
    {
      name: 'Commercial',
      icon: <OfficeBuildingIcon className="w-5 h-5" />,
      image: s2,
      description: 'We have always extended a hand to our customers, wherever required, even after the transactions were completed. We are a team which believes in working together, and growing together. By stepping into the customer\'s shoes, we have delivered commercial home for business with high-quality construction, to not just meet our customers\' expectations, but exceed them.',
    },
    {
      name: 'Interiors',
      icon: <ColorSwatchIcon className="w-5 h-5" />,
      image: s3,
      description: 'We have always extended a hand to our customers, wherever required, even after the transactions were completed. We are a team which believes in working together, and growing together. By stepping into the customer\'s shoes, we have delivered commercial home for business with high-quality construction, to not just meet our customers\' expectations, but exceed them.',
    },
  ];

  return (
    <section className="py-12 bg-zinc-950 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h5 className="text-2xl font-semibold mb-4 text-red-500">Ongoing Projects</h5>
            <hr className="mb-4 border-red-500" />
            {[...Array(3)].map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-4 mb-4">
                {[...Array(3)].map((_, colIndex) => (
                  <div key={colIndex} className="flex justify-center">
                    <div className="w-18 h-18 bg-zinc-900 flex items-center justify-center rounded">
                      <span className="text-red-500 text-xs">Project</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <h6 className="text-xl font-semibold mb-4 text-red-500">Our Services</h6>
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
              <Tab.List className="flex space-x-1 rounded-xl bg-zinc-900 p-1">
                {services.map((service, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-950 focus:outline-none focus:ring-2
                      ${selected ? 'bg-red-500 text-gray-100 shadow' : 'text-gray-400 hover:bg-zinc-800 hover:text-gray-100'}`
                    }
                  >
                    <div className="flex items-center justify-center">
                      {service.icon}
                      <span className="ml-2">{service.name}</span>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {services.map((service, index) => (
                  <Tab.Panel
                    key={index}
                    className={`rounded-xl bg-zinc-900 p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-950 focus:outline-none focus:ring-2`}
                  >
                    <img src={service.image} alt={service.name} className="w-full h-48 object-cover mb-4 rounded" />
                    <p className="text-gray-300 text-justify">{service.description}</p>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;