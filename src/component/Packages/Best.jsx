import React from 'react';
import { FaHardHat, FaPaintRoller, FaToilet, FaDoorOpen, FaWrench, FaInfoCircle, FaDollarSign } from 'react-icons/fa';
import { GiSteelClaws, GiCementShoes, GiWoodBeam, GiStoneWall } from 'react-icons/gi';
import { MdElectricalServices, MdPlumbing } from 'react-icons/md';

const Best = () => {
  const sections = [
    { icon: <FaHardHat />, title: "Designs & Drawings", items: [
      "2D Floor plan with furniture layout",
      "3D Basic External View (2 Options)",
      "Structural drawings",
      "Working Drawings"
    ]},
    { icon: <GiSteelClaws />, title: "Structure", items: [
      "Structural Steel - SK, TURBO, KAMADHENU",
      "Cement – 53 grade (Footing & Slab only) - ACC, ULTRATECH, RAMCO SUPER GRADE",
      "Cement – 43 grade & ppc - ACC, RAMCO SUPER GRADE",
      "M-SAND (2 wash) For concreting & Block work - Standard Material",
      "M-SAND For Plastering (2 wash) - Standard Material",
      "RMC Concrete (M20 only) - ACC",
      "Solid Blocks – 6″ & 4″",
      "Red Bricks (Optional)",
      "Water Proofing",
      "Underground Sump - 9000 Lts (Red Bricks)",
      "Ceiling Height - 10′ Floor to Top"
    ]},
    { icon: <GiCementShoes />, title: "Flooring", items: [
      "Living & Dining - Granite / Vitrified Tiles @ Rs. 100 / Sft",
      "Bedrooms - Vitrified Tiles @ Rs. 90 / Sft",
      "Master Bedroom - Vitrified Tiles @ Rs. 90 / Sft",
      "Kitchen - Vitrified Tiles @ Rs. 90 / Sft",
      "Balcony & Parking - Anti-skid Tiles @ Rs.55 / Sft",
      "Terrace - Anti-skid tiles @ Rs. 50/Sqft",
      "Staircase - Granite @ Rs.100/ Sft"
    ]},
    { icon: <FaPaintRoller />, title: "Kitchen", items: [
      "Kitchen tiles for 2′ – ht - Rs.50 / Sft",
      "Kitchen Sink - Rs.6000",
      "Kitchen Top Granite (40 mm) - Rs.100 / Sft"
    ]},
    { icon: <FaToilet />, title: "Bathroom", items: [
      "Wall Dadoing (Ceramic tiles) - Rs. 45 / Sft",
      "Flooring - Rs.50/Sft"
    ]},
    { icon: <FaDoorOpen />, title: "Doors and Windows", items: [
      "Main Door - Teakwood frame & shutter @ Rs. 40,000",
      "Puja room - Teakwood frame & shutter @ Rs.20000",
      "Internal Door Frame - Red Saal @ Rs.1,250/cft",
      "Internal Door Shutter - Flush Shutter @ Rs.5500/ Excluding Hardwares",
      "Toilet Doors - WPC Shutter @ Rs.4000 / Excluding Hardwares",
      "Window Frames - UPVC @ Rs.425/ Sft /Red Sal @ Rs.1,250/Cft",
      "Window Shutters - UPVC @ Rs. 425/Sft /Red Sal @ Rs.1,250/Cft"
    ]},
    { icon: <FaWrench />, title: "MS Work", items: [
      "Staircase Railing - SS Railing (304) Balusters only",
      "Balcony Railing - SS Railing (304) Balusters only",
      "Window Grills – MS Grills @ Rs.175/Sft",
      "Main Gate – MS Openable Gate @Rs.175/Sft",
      "Wicket Gate – MS Openable Gate @Rs.175/Sft"
    ]},
    { icon: <FaPaintRoller />, title: "Painting Work", items: [
      "Wall Care - BIRLA wall care",
      "Internal Primer & Paint (1 + 2 Coats) - ASIAN (emulsion)",
      "External Primer & Paint (1+2 Coats) - ASIAN (Apex)"
    ]},
    { icon: <MdElectricalServices />, title: "Electrical", items: [
      "Conduiting pipes - VIP Make",
      "Wires – POLYCAB, V-GUARD",
      "Switches – GM",
      "MCB - STANDARD"
    ]},
    { icon: <MdPlumbing />, title: "Plumbing", items: [
      "CPVC pipes – ASHIRVAD",
      "PVC Pipes - ASHIRVAD",
      "Over Head Tank - Cauvery (1000 Lts)"
    ]},
    { icon: <FaToilet />, title: "CP Fittings", items: [
      "WC Wall mount, WC Flush System, Wash Basin, Wall Mixer, Spout, Health Faucet, Pillarcock, Showerhead – Rs.30,000/Toilet"
    ]},
    { icon: <GiStoneWall />, title: "Elevation Treatment", items: [
      "Elev. Stone cladding work - 120 Sft @ Rs.75/sft"
    ]},
    { icon: <FaDollarSign />, title: "Basic Prices", items: [
      "Steel - Rs.70,000",
      "Cement (43 Grade) – Rs.360/bag",
      "Cement (53 Grade) – Rs.370/bag",
      "RMC - Rs.4000/CUM",
      "M-sand - Rs.24/cft",
      "P-sand - Rs.35/cft"
    ]},
  ];

  return (
    <div className="bg-white min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-8 text-center">
          Best Package - ₹2,200/Sqft
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
                <tr key={index} className={index % 2 === 0 ? 'bg-white text-black' : 'bg-zinc-950 text-white'}>
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

export default Best;