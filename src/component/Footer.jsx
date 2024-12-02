import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/original/logoReal.png";
import logoTag from "../assets/original/logoTag.jpeg";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  };

  return (
    <>
      <div className="h-[1px] w-full bg-white"></div>
      <div className="footer bg-zinc-950 py-8">
        <div className="container mx-auto px-4">
          <div className="footer-columns p-10">
            <div className="flex flex-col lg:flex-row md:flex-row ">
              {/* Column */}
              <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-left">
                <div className="-my-12 text-white">
                  <div className="font-bold flex flex-col items-start">
                    <img src={logo} className="w-[60px] h-[60px]" />
                    <img src={logoTag} className="w-[110px] h-[20px]" />
                  </div>
                  <br />
                  <p>
                    Adhya Builders is a leading provider of Infrastructure
                    Services, Construction, Interior Designing and Property
                    developments. We are committed to delivering for communities
                    and leaving lasting legacies through our work.
                  </p>
                  <div className="social-icons mt-4">
                    <ul className="flex space-x-3">
                      <li>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="text-white text-3xl hover:text-red-500 transition ease-in-out duration-300"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-white text-3xl hover:text-red-500 transition ease-in-out duration-300"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@AdhyaBuilders"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-white text-3xl hover:text-red-500 transition ease-in-out duration-300"
                          />
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          className="text-white text-3xl hover:text-red-500 transition ease-in-out duration-300"
                        />
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="address-list mt-2">
                    <ul className="text-left">
                      <li className="flex items-center -my-4 ">
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          className="text-red-500 text-xl p-4"
                        />
                        <a
                          href="mailto:enquiry@adhyabuilders.com"
                          className="text-white"
                        >
                          enquiry@adhyabuilders.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="w-full sm:w-1/3 my-12 lg:my-0 md:my-0mb-12 ">
                <div className="footer-c-widget h-white list-widget text-white">
                  <h3 className="text-lg font-semibold mb-4 mx-14">
                    QUICK LINKS
                  </h3>
                  <ul className="text-left px-20">
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/about"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/packages"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        Packages
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/services"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/contact"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="w-full sm:w-1/3 my-6 lg:my-0 md:my-0mb-12 ">
                <div className="footer-c-widget h-white list-widget text-white">
                  <h3 className="text-lg font-semibold mb-4 mx-14">SERVICES</h3>
                  <ul className="text-left px-12">
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/excavation"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        Residential House architecture
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/demolition"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        Commercial House architecture
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        onClick={handleClick}
                        to={"/siteprep"}
                        className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-red-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        Interior House architecture
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="w-full my-6 md:my-0 sm:w-1/3 mb-8 sm:mb-0">
                <div className="footer-c-widget h-white address-list text-white">
                  <h3 className="text-lg md:text-left text-center font-semibold mb-4">
                    CONTACT US
                  </h3>
                  <ul className="text-left">
                    <li className="flex items-start mb-4">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-red-500 text-xl px-4"
                      />
                      No.4931, 2nd Phase, Vijayangara 4th Stage, Mysore 570032
                    </li>
                    <hr className="border-gray-700 mb-4" />
                    <h5 className="text-md text-center md:text-left font-semibold mb-2">
                      PHONE NO
                    </h5>
                    <li className="flex items-start mb-4">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="text-red-500 text-xl px-4"
                      />
                      +91-73490 59991
                    </li>
                    <li className="flex items-start mb-4">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="text-red-500 text-xl px-4"
                      />
                      +91-81479 29991
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
