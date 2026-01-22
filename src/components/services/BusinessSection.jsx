import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/services/busi1 (1).png";
import img2 from "../../assets/Images/services/busi2.png";


const BusinessSection = ({
  leftImg, rightImg,
  topHeading,
  sec1Title,
  sec1Description,
  sec1ButtonText,
  sec2Title,
  sec2Description,
  sec2ButtonText,
  image,
  alt = "service",
  tags = [], 
  wrapperClass = "bg-[#EDE8FF]",
}) => {
  return (
    <section className="w-full bg-[#F5F6F7] py-20 px-6 md:px-12 lg:px-20">

      {topHeading && (
        <motion.h2
          className="text-center text-3xl md:text-4xl font-semibold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {topHeading}
        </motion.h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {sec1Title && <h3 className="text-[38px] font-semibold">{sec1Title}</h3>}

          {sec1Description && (
            <p className="text-gray-600 mt-3 text-[18px] leading-relaxed">
              {sec1Description}
            </p>
          )}

          {sec1ButtonText && (
            <motion.button
              className="mt-6 border bg-white cursor-pointer transition duration-300 border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {sec1ButtonText} →
            </motion.button>
          )}
        </motion.div>

        <div className="w-full flex justify-center items-center">
      <div className="bg-[#f7f1ea] rounded-[30px] p-10 w-full max-w-6xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
         
          <motion.div
            className="relative flex justify-center"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#bcdcff] rounded-2xl"></div>

            <motion.img
              src={leftImg}
              alt="Left Layout"
              className="relative z-10 w-[90%] rounded-2xl object-cover rotate-[-3deg]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>

      
          <motion.div
            className="relative flex justify-center"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -bottom-3 right-6 w-[90%] h-6 bg-[#bcdcff] rounded-xl"></div>

            <motion.img
              src={rightImg}
              alt="Right Layout"
              className="relative z-10 w-[90%] rounded-2xl object-cover"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>

        </div>
      </div>
    </div>
      </div>

      <div className="mt-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <motion.div
      className="relative w-full max-w-[520px]"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* BACKGROUND SHAPE */}
      <div className="absolute inset-0 bg-[#EDE8FF] rounded-[40px] translate-x-[-10px] translate-y-[-10px] z-0"></div>

      {/* IMAGE CONTAINER */}
      <div className="relative z-10 rounded-[40px] overflow-hidden">
        <motion.img
          src={image}
          alt="service"
          className="w-full h-120 object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
        />

        {/* TAGS */}
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`absolute ${tag.position} px-6 py-3 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2`}
            style={{
              backgroundColor: tag.bgColor,
              color: "#fff",
            }}
          >
            {tag.icon && <span>{tag.icon}</span>}
            {tag.text}
          </div>
        ))}
      </div>
    </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {sec2Title && <h3 className="text-[38px] font-semibold">{sec2Title}</h3>}

          {sec2Description && (
            <p className="text-gray-600 mt-3 text-[18px] leading-relaxed">
              {sec2Description}
            </p>
          )}

          {sec2ButtonText && (
            <motion.button
              className="mt-6 border bg-white cursor-pointer transition duration-300 border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {sec2ButtonText} →
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;
