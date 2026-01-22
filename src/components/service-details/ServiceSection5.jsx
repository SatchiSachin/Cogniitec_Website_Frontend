import React from "react";
import { motion } from "framer-motion";
import card1 from "../../assets/Images/services/card1.jpg";
import card2 from "../../assets/Images/services/card2.jpg";
import card3 from "../../assets/Images/services/card3.jpg";
import card4 from "../../assets/Images/services/card4.jpg";
import card5 from "../../assets/Images/services/card5.jpg";

const ServiceSection5 = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="px-6 md:px-10 lg:px-16 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug">
          See Our Team in Action
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-12">
          Every corner shines when cleaned with care explore how Pureora brings
          freshness and comfort to every space.
        </p>

        <div className="space-y-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={card1}
                alt="Development"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={card2}
                alt="Development"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <img
                src={card3}
                alt="Development"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={card4}
                alt="Development"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={card5}
                alt="Development"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex mt-12 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-poppins text-sm cursor-pointer flex items-center justify-center 
               border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium 
               px-8 py-3 rounded-full transition-all duration-300 
               hover:bg-[#c72a22]"
            onClick={() => setOpen(true)}
          >
            View More Photos
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection5;
