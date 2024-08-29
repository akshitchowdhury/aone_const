import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import h1 from "../assets/images/homeBg.jpg";
import h2 from "../assets/images/homeBg.jpg"
import h3 from "../assets/images/homeBg.jpg";
import Hero2 from './Hero2';
import Inquiry from './Inquiry';
import Services from './Services'
import About from './About';
import { motion } from 'framer-motion';
const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  return (
    <>  
     <motion.div {...fadeIn}
     
      className="relative w-auto md:w-full h-[100px] md:h-[500px] lg:h-[500px] ">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="h-full"
      >
        <div className="relative">
          <img src={h1} alt="Slide 1" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          
        </div> 
        <div className="relative">
          <img src={h2} alt="Slide 2" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          
        </div>
        <div className="relative">
          <img src={h3} alt="Slide 3" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          
        </div>
        {/* <div className="relative">
          <img src={h5} alt="Slide 5" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          
        </div> */}
      </Carousel>
    </motion.div>
    
    <Hero2/>
    <About/>
    <Inquiry/>
    <Services/>
    </>

  );
};

export default Hero;
