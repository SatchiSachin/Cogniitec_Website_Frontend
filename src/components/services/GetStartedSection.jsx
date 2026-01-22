import React from "react";
import { motion } from "framer-motion";
import stepImg from "../../assets/Images/services/getstared.png";

const GetStartedSection = ({
  heading,
  steps = [],
    image,
  alt = "service",
  tags = [],
  bgColor = "#EDE8FF",

 
}) => {
  const hexagonClip =
    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 104%, 25% 104%, 0% 50%)";
  return (
    <section className="w-full py-20 md:px-12 lg:px-20">

      {heading && (
        <motion.h2
          className="text-center text-3xl md:text-4xl font-semibold leading-snug mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} >
          {heading}
        </motion.h2>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

<div className="bg-gray-50 md:p-20 p-5 py-10 rounded-lg">
       <motion.div
      className="relative mx-auto md:w-full w-70 md:h-[440px] h-[300px] overflow-hidden"
      style={{ }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    
      <div
        className="absolute inset-0 z-0 rotate-6"
        style={{
          backgroundColor: bgColor,
          clipPath: hexagonClip,
          transform: "scale(1.08)",
        }}
      />

      <div
        className="relative z-10 overflow-hidden w-full h-full"
        style={{ clipPath: hexagonClip }}
      >
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
        />
     
       
      </div>
       {tags.map((tag, index) => (
          <motion.div
            key={index}
            className={`absolute ${tag.position} px-4 py-2 z-30 rounded-lg text-sm font-medium shadow-lg`}
            style={{
              backgroundColor: tag.bgColor,
              color: tag.textColor || "#fff",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {tag.text}
          </motion.div>
        ))}
    </motion.div>
    </div>
        <div className="space-y-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F5F5F5] p-7 rounded-2xl shadow-sm flex gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="w-10 h-10 bg-[#EC372D] shrink-0 text-white flex justify-center items-center rounded-full font-semibold">
                {item.number}
              </div>
              <div>
                {item.title && (
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                )}
                {item.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.buttonText && (
                  <motion.button
                    className="mt-4 border border-black px-5 py-1.5 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.buttonText} →
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
