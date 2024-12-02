import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  HomeIcon,
  OfficeBuildingIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline";
import s1 from "./../assets/images/260x10001.jpg";
import s2 from "./../assets/images/260x10002.jpg";
import s3 from "./../assets/images/260x10003.jpg";
import g1 from "../assets/projects/gal1.jpeg";
import g3 from "../assets/projects/gal3.jpeg";
import g2 from "../assets/projects/gal2.jpeg";
import g4 from "../assets/projects/gal4.jpeg";
import g5 from "../assets/projects/gal5.jpeg";
import g6 from "../assets/projects/gal6.jpeg";
import g7 from "../assets/projects/gal7.jpeg";
import g8 from "../assets/projects/gal8.jpeg";
import g9 from "../assets/projects/gal9.jpeg";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const services = [
    {
      name: "Residential",
      icon: <HomeIcon className="w-5 h-5" />,
      image: s1,
      description:
        "Residential House architecture is a style through its contemporary exterior architecture design and neutral color palette, this distinctive style of residential design blends gracefully into the surroundings. This simple residential house with a repetitive element maximizes space. Use of maximum windows, the space receives more natural light. A simple sunscreen-styled pergola provides filtered shade. Vertical slats in this concrete contemporary structure open up the space and give it a sleek modern look.",
    },
    {
      name: "Commercial",
      icon: <OfficeBuildingIcon className="w-5 h-5" />,
      image: s2,
      description:
        "We have always extended a hand to our customers, wherever required, even after the transactions were completed. We are a team which believes in working together, and growing together. By stepping into the customer's shoes, we have delivered commercial home for business with high-quality construction, to not just meet our customers' expectations, but exceed them.",
    },
    {
      name: "Interiors",
      icon: <ColorSwatchIcon className="w-5 h-5" />,
      image: s3,
      description:
        "We have always extended a hand to our customers, wherever required, even after the transactions were completed. We are a team which believes in working together, and growing together. By stepping into the customer's shoes, we have delivered commercial home for business with high-quality construction, to not just meet our customers' expectations, but exceed them.",
    },
  ];

  return (
    <motion.section className="py-12 bg-zinc-950 text-gray-100" {...fadeIn}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Ongoing Projects Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h5 className="text-2xl font-semibold mb-4 text-red-500">
              Ongoing Projects
            </h5>
            <hr className="mb-4 border-red-500" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[g1, g2, g3, g4, g5, g6, g7, g8, g9].map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-40 object-cover rounded shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/2 ">
            <h6 className="text-xl font-semibold mb-4 text-red-500">
              Our Services
            </h6>
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
              <Tab.List className="flex space-x-1 rounded-xl bg-zinc-900 p-1">
                {services.map((service, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-950 focus:outline-none focus:ring-2
                      ${
                        selected
                          ? "bg-red-500 text-gray-100 shadow"
                          : "text-gray-400 hover:bg-zinc-800 hover:text-gray-100"
                      }`
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
                    className="rounded-xl bg-zinc-900 p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-950 focus:outline-none focus:ring-2"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <p className="text-gray-300 text-justify">
                      {service.description}
                    </p>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
