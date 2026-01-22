import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../assets/Images/services/servicehero.png";
import { FaRegCheckCircle } from "react-icons/fa";

const HeroSection = ({
  title,
  bullets = [],
  buttonText,
  floatingLabels = [],
}) => {
  return (
    <section className="w-full bg-[#FFF7F5] py-30 px-3 md:px-5 lg:px-20 rounded-b-[8%]">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <motion.div
          className="flex-1"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {title && (
            <h1 className="text-[35px] md:text-[45px] font-semibold text-gray-900 leading-tight">
              {title}
            </h1>
          )}

          {bullets.length > 0 && (
            <div className="mt-6 space-y-2 text-gray-700">
              {bullets.map((item, index) => (
                <p key={index} className="flex items-center gap-2">
                  <span className="text-[#FFEA79] text-xl">
                    <FaRegCheckCircle />
                  </span>
                  {item}
                </p>
              ))}
            </div>
          )}

          {buttonText && (
            <motion.button
      
      className="wavy-btn relative mt-8 inline-block overflow-hidden rounded-full shadow cursor-pointer bg-black text-white px-6 py-3"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      
      <svg
        className="wave-svg"
        viewBox="0 0 960 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="wave-path"
          d="M0,120 C120,200 240,40 360,120 C420,160 480,160 600,120 L600 200 L0 200 Z"
          fill="#ffffff"
        />
      </svg>

      <span className="relative z-10">{buttonText}</span>
    </motion.button>
          )}
        </motion.div>

        <motion.div
          className="flex-1 relative flex justify-center"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={BannerImg}
            alt="hero"
            className="rounded-xl w-full max-w-lg object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {floatingLabels.map((label, index) => (
            <motion.div
              key={index}
              className={`absolute px-4 py-2 text-sm rounded-lg shadow ${label.className}`}
              initial={{ opacity: 0, y: index % 2 === 0 ? -10 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {label.text}
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
