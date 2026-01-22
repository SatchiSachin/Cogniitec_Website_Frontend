import React from "react";
import bgImage from "../../assets/Images/services/bottom-bg.png";
import { motion } from "framer-motion";

const ServiceSection7 = () => {
  return (
    /* OUTER PADDING */
    <section className="w-full px-6 md:px-8 lg:px-16 pt-6 pb-20">
      <div
        className="mx-auto bg-cover bg-center bg-no-repeat relative py-20 rounded-3xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Content */}
        <div className="relative z-10 text-center mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug">
            Let's Start your web application project with us
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm md:text-base text-[#FAFAFA] max-w-xl mx-auto mb-12">
            Professional cleaning services you can rely on every single time.
          </p>

          {/* Button */}
          <div className="flex mt-12 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="font-poppins text-sm cursor-pointer flex items-center justify-center 
                border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium 
                px-8 py-3 rounded-full transition-all duration-300 
                hover:bg-[#c72a22]"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection7;
