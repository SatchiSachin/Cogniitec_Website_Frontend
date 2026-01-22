import React from "react";
import { bookimg, heroIndustry } from "../../assets/Images/industries";
import { FaCheck } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroIndustries = () => {
  return (
    <div>
      <div className="w-full">
        <img src={heroIndustry} className="w-full" />
      </div>
      <div className="w-full bg-white py-20 px-5 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col justify-center text-[#454545]">
              <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
                Lorem ipsum dolor sit <br /> amet consectetur.
              </h1>

              <p className="leading-relaxed mb-6">
                Puredera ensures spotless results with professional tools,
                eco-friendly products, and a trusted team. We understand that
                your home is your sanctuary, and we treat it with the respect
                and care it deserves.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={bookimg} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="pt-16">
            <ul className="mb-8 grid grid-cols-1 lg:grid-cols-3 justify-between gap-8">
              {[
                "Eco-Friendly Cleaning Products",
                "Flexible Scheduling Options",
                "100% Satisfaction Guarantee",
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center gap-4">
                  <span className="w-4 h-4 flex items-center justify-center text-[#EC3B31]">
                    <FaCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]"
                onClick={() => setOpen(true)}
              >
                View More
                <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIndustries;
