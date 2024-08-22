import React from 'react';
import { FaHardHat, FaPaintRoller, FaToilet, FaDoorOpen, FaWrench, FaInfoCircle, FaDollarSign } from 'react-icons/fa';
import { GiSteelClaws, GiCementShoes, GiWoodBeam, GiStoneWall } from 'react-icons/gi';
import { MdElectricalServices, MdPlumbing } from 'react-icons/md';
const Premium = () => {
    const sections = [
        { icon: <FaHardHat />, title: "Designs & Drawings", items: ["2D Floor Plan", "3D Basic View", "Structural Drawings", "Working Drawings"] },
        { icon: <GiSteelClaws />, title: "Structure", items: [
          "Structural Steel - PRIME GOLD",
          "Cement – 53 grade (Footing & Slab only) - ACC, RAMCO SUPER GRADE, Zuari",
          "Cement – 43 grade & ppc - ACC, RAMCO SUPER GRADE, PENNA",
          "M-SAND (1 wash) For concreting & Block work - Standard Material",
          "M-SAND For Plastering (2 wash)",
          "RMC Concrete (M20 only) or According to Design",
          "Solid Blocks – 6″ & 4″ - Cement Block",
          "Water Proofing",
          "Underground Sump - 8000 Lts",
          "Ceiling Height - 10′ Floor to Top"
        ]},
        { icon: <GiCementShoes />, title: "Flooring", items: [
          "Living & Dining - Vitrified Tiles @ Rs. 80 / Sft",
          "Bedrooms - Vitrified Tiles @ Rs. 80 / Sft",
          "Master Bedroom - Vitrified Tiles @ Rs. 80 / Sft",
          "Kitchen - Vitrified Tiles @ Rs. 80 / Sft",
          "Balcony & Parking - Anti-Skid Tiles @ Rs. 50/ Sft",
          "Terrace - Screed Concreting",
          "Staircase - Granite @ Rs. 90/ Sft"
        ]},
        { icon: <FaPaintRoller />, title: "Kitchen", items: [
          "Kitchen tiles for 2′ – ht - Rs.45 / Sft",
          "Kitchen Sink - Rs.5000",
          "Kitchen Top Granite (40 mm) - Rs.90 / Sft"
        ]},
        { icon: <FaToilet />, title: "Bathroom", items: [
          "Wall Dadoing (Ceramic tiles) - Rs. 40 / Sft",
          "Flooring - Rs.45/Sft"
        ]},
        { icon: <FaDoorOpen />, title: "Doors and Windows", items: [
          "Main Door - Teakwood frame & shutter @ Rs.30,000",
          "Puja room - Teakwood frame & shutter @ Rs.20,000",
          "Internal Door Frame - Red Saal @ Rs.1,250/cft",
          "Internal Door Shutter - Flush Shutter @ Rs.3,500/ Pc",
          "Toilet Doors - WPC Doors and Shutter @ Rs.8,000 / Pc",
          "Window Frames - UPVC @ Rs.400/ Sft/Red Sal @ Rs.1250/Cft",
          "Window Shutters - UPVC (2 track) – Clear Glass/Red Sal @ Rs.1250/Cft"
        ]},
        { icon: <FaWrench />, title: "MS Work", items: [
          "Staircase Railing - MS Railings @ Rs. 250 / Sft",
          "Balcony Railing - SS Railings (202) With regular design only",
          "Window Grills - MS Grills @ Rs.150/Sft",
          "Main Gate - MS Openable Gate @Rs.150/Sft",
          "Wicket Gate - MS Openable Gate @Rs.150/Sft"
        ]},
        { icon: <FaPaintRoller />, title: "Painting Work", items: [
          "Wall Care - ASIAN wall care",
          "Internal Primer & Paint (1 + 2 Coats)",
          "External Primer & Paint (1+2 Coats) - (ACE emulsion)"
        ]},
        { icon: <MdElectricalServices />, title: "Electrical", items: [
          "Conduiting Pipes - VIP Make",
          "Wires – V-GUARD, ANCHOR",
          "Switches - ANCHOR ROMA",
          "MCB - STANDARD"
        ]},
        { icon: <MdPlumbing />, title: "Plumbing", items: [
          "CPVC Pipes - ASHIRVAD",
          "PVC Pipes – SUPREME",
          "Over Head Tank - Cauvery (1000 Lts)"
        ]},{ icon: <FaToilet />, title: "CP Fittings", items: ["WC Wall mount, WC Flush System, Wash Basin, Wall Mixer, Spout, Health Faucet, Pillarcock, Showerhead - Rs.20,000/Toilet"] },
        { icon: <GiStoneWall />, title: "Elevation Treatment", items: ["Stone cladding work - 100 Sft @ Rs.75/sft"] },
        { icon: <FaDollarSign />, title: "Basic Prices", items: [
          "Steel - Rs. 60,000",
          "Cement (43 Grade) – Rs.360/bag",
          "Cement (53 Grade) – Rs.370/bag",
          "RMC - Rs.4000/CUM",
          "M-sand - Rs.24/cft",
          "P-sand - Rs.35/cft"
        ]},
      ];

  return (
    <div className="bg-white min-h-screen p-4 md:p-8 lg:p-12 px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-8 text-center">
          Premium Package - ₹2400/Sqft
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, index) => (
                <tr key={index} className={index % 2 === 0 ?'bg-white text-black'  :'bg-zinc-950 text-white' }>
                  <td className="p-3 border-t border-gray-300">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">{section.icon}</span>
                      <span className="font-semibold">{section.title}</span>
                    </div>
                  </td>
                  <td className="p-3 border-t border-gray-300">
                    <ul className="list-disc list-inside text-left">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="mt-8 text-sm text-gray-600">
          <p>
            T & C: The items which are not mentioned here are treated as extra items, those items will be charged
            separately as per the prevailing market rates to bear by the Owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;