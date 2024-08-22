import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import h1 from "../assets/images/web1.jpg";
import h2 from "../assets/images/web2.jpg"
import h3 from "../assets/images/web3.jpg";
import Hero2 from './Hero2';
import Inquiry from './Inquiry';
import Services from './Services'
import About from './About';
import Premium from './Packages/Premium';
import Basic from './Packages/Basic';
import Best from './Packages/Best';

const Hero = () => {
  return (
    <>  
     <div className="relative w-auto md:w-full h-[100px] md:h-[300px] lg:h-[400px] ">
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
          <img src={h1} alt="Slide 1" className="object-contain object-top w-full h-[300px] md:h-[300px] lg:h-[400px]" />
          
        </div> 
        <div className="relative">
          <img src={h2} alt="Slide 2" className="object-contain object-top w-full h-[300px] md:h-[300px] lg:h-[400px]" />
          
        </div>
        <div className="relative">
          <img src={h3} alt="Slide 3" className="object-contain object-top w-full h-[300px] md:h-[300px] lg:h-[400px]" />
          
        </div>
        {/* <div className="relative">
          <img src={h5} alt="Slide 5" className="object-contain object-center w-full h-[300px] md:h-[300px] lg:h-[400px]" />
          
        </div> */}
      </Carousel>
    </div>
    
    <Hero2/>
    <About/>
    <Inquiry/>
    <Basic/>
    <Best/>
    <Premium/>
    <Services/>
    </>

  );
};

export default Hero;
