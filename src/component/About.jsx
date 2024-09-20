import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaPaintBrush, FaHandshake, FaChartLine } from 'react-icons/fa';
import aboutImg from "../assets/images/260x10002.jpg"
const About = () => {
  const services = [
    { icon: <FaBuilding />, title: 'Infrastructure & Construction' },
    { icon: <FaPaintBrush />, title: 'Interior Designing' },
    { icon: <FaHandshake />, title: 'Property Development' },
    { icon: <FaChartLine />, title: 'Business Projects' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-zinc-950 text-gray-100 py-16 
    px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto md:my-[70px] lg:my-[70px]">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-500"
          {...fadeIn}
        >
          About Adhya Builders
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div {...fadeIn}>
            <img 
              src={aboutImg} 
              alt="Adhya's projects" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div {...fadeIn}>
          <div className='text-justify'>
            <p className="text-lg mb-6">
              Adhya builderss is a leading provider of Infrastructure Services, Construction, Interior Designing and Property developments. We are committed to delivering for communities and leaving lasting legacies through our work.
            </p>
            <p className="text-lg mb-6">
              We offer our customers everything they need to effortlessly plan and carry out building projects more quickly than ever before, including 3D drawings, floor plans, engineering support, and site inspection.
            </p>
            </div>
          </motion.div>
        </motion.div>

        {/* <motion.div 
          className="mt-16"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h3 
            className="text-2xl font-semibold mb-8 text-center text-red-500"
            {...fadeIn}
          >
            Our Comprehensive Services
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-zinc-900 p-6 rounded-lg shadow-lg text-center"
                {...fadeIn}
              >
                <div className="text-red-500 text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 bg-zinc-900 p-8 rounded-lg shadow-xl"
          {...fadeIn}
        >
          <h3 className="text-2xl font-semibold mb-6 text-red-500">Additional Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Loans and financing</li>
            <li>Architecture and design</li>
            <li>Precise cost estimates</li>
            <li>Supply of building materials at wholesale prices</li>
            <li>Professional consultation</li>
            <li>Labour contractors</li>
            <li>Identification of investors for commercial projects</li>
          </ul>
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;