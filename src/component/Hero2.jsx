import React from 'react';
import i1 from "../assets/images/100x10001.jpg";
import i2 from "../assets/images/100x10002.jpg";
import i3 from "../assets/images/100x10003.jpg";

const Hero2 = () => {
  return (
    <>
    <div className='w-[300px] md:w-[80%] md:mx-32  h-[1px]
     bg-gray-300'></div>
    {/* <section className="py-8 "> */}
      <div className="container mx-auto md:px-12 p-7  py-[40px] h-auto md:p-4 md:py-0 md:absolute md:top-[550px]">
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col justify-center
             items-center h-full p-6 hover:bg-zinc-950 text-gray-800 hover:text-white duration-300 transition ease-in-out ">
              <img
                className="w-24 h-24 mr-4  rounded-full object-cover"
                src={i1}
                alt="Design the Future Today"
              />
              <div className="p-6 flex flex-col flex-1 text-justify">
                <h6 className="text-lg font-bold  uppercase mb-2">
                  DESIGN THE FUTURE TODAY
                </h6>
                <p className="">
                  a-one’s is a leading provider of Infrastructure Services, Construction, Interior Designing and Property developments. We are committed to delivering for communities and leaving lasting legacies through our work.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-red-600 rounded-lg shadow-md overflow-hidden flex flex-col justify-center
             items-center h-full p-6 hover:bg-zinc-950 text-white hover:text-white duration-300 transition ease-in-out">
              <img
                className="w-24 h-24 mr-4 rounded-full object-cover"
                src={i2}
                alt="We Build Homes with a Personal Touch"
              />
              <div className="p-6 flex flex-col flex-1 text-justify">
                <h6 className="text-lg font-bold 
                 mb-2">
                  WE BUILD HOMES WITH A PERSONAL TOUCH
                </h6>
                <p className="">
                  a-one’s offers its customers everything they need to effortlessly plan and carry out building projects more quickly than ever before, including 3D drawings, floor plans, engineering support, and site inspection.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-1/3 px-4  lg:block">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col justify-center
             items-center h-full p-6 hover:bg-zinc-950 text-gray-800 hover:text-white duration-300 transition ease-in-out ">
              <img
                className="w-24 h-24 mr-4 rounded-full object-cover"
                src={i3}
                alt="Dreams to Blueprints to Reality"
              />
              <div className="p-6 text-justify flex flex-col flex-1">
                <h6 className="text-lg font-bold mb-2">
                  DREAMS TO BLUEPRINTS TO REALITY
                </h6>
                <p className="">
                  Included in its full range of services are loans and financing, architecture / design, precise cost estimates, construction, interior design, labour contractors and even the identification of investors for commercial projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </section> */}
    <div className='w-[300px] md:w-[80%] md:mx-32  h-[1px] bg-gray-300'></div>
    </>
  );
};

export default Hero2;
