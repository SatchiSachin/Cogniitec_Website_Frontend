import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import serviceimg from "../../assets/Images/services/servicesection.png";

const useCounter = (end, duration = 2000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16.67);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(counter);
      } else {
        setValue(Math.floor(start));
      }
    }, 16.67);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value;
};

const ServiceSection = ({
  heading,

  card1Title,
  card1Description,
  card1ButtonText,

  card2Title,
  card2Description,
  card2ButtonText,

  card3Title,
  card3Description,
  card3ButtonText,

  counter1Value,
  counter1Label,
  counter2Value,
  counter2Label,
  counter3Value,
  counter3Label
}) => {
  const count1 = useCounter(counter1Value || 0);
  const count2 = useCounter(counter2Value || 0);
  const count3 = useCounter(counter3Value || 0);

  return (
    <section className="w-full bg-[#323232] text-white py-20 px-6 md:px-12 lg:px-20 md:rounded-[5%] rounded-[0%]">

      {heading && (
        <motion.h2
          className="text-center text-3xl md:text-[45px] font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          {heading}
        </motion.h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-[1080px] m-auto">

        <motion.div
          className="bg-[#3A3A3A] p-5 md:p-8 rounded-3xl shadow-lg h-full flex flex-col"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {card1Title && <h3 className="text-2xl font-semibold">{card1Title}</h3>}
          {card1Description && (
            <p className="text-gray-300 mt-3 text-sm leading-relaxed py-2">
              {card1Description}
            </p>
          )}

          {card1ButtonText && (
            <motion.button
              className="mt-5 bg-white text-black px-5 py-2 w-[100%] md:w-[30%] cursor-pointer rounded-full text-sm hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}>
              {card1ButtonText} →
            </motion.button>
          )}

          <motion.img
            src={serviceimg}
            alt="service"
            className="rounded-2xl mt-6 w-full h-87 object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <div className="flex flex-col gap-8 h-full">

          <motion.div
            className="bg-[#356C48] p-5 md:p-8 rounded-3xl shadow-lg flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {card2Title && <h3 className="text-2xl font-semibold">{card2Title}</h3>}
            {card2Description && (
              <p className="text-gray-100 mt-3 text-sm leading-relaxed">
                {card2Description}
              </p>
            )}
            {card2ButtonText && (
              <motion.button
                className="mt-5 bg-white text-black px-5 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {card2ButtonText} →
              </motion.button>
            )}
          </motion.div>

          <motion.div
            className="bg-[#A1C9F8] text-black p-5 md:p-8 rounded-3xl shadow-lg flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}>
            {card3Title && <h3 className="text-2xl font-semibold">{card3Title}</h3>}
            {card3Description && (
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {card3Description}
              </p>
            )}
            {card3ButtonText && (
              <motion.button
                className="mt-5 bg-black text-white px-5 cursor-pointer py-2 rounded-full text-sm hover:bg-gray-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {card3ButtonText} →
              </motion.button>
            )}
          </motion.div>

        </div>
      </div>

      <motion.div
        className="border-t border-gray-600 mt-16 pt-12 grid grid-cols-1 md:grid-cols-3 text-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {(counter1Value !== undefined || counter1Label) && (
          <div>
            <p className="text-5xl font-semibold text-[#B0D9FF]">{count1.toLocaleString()}+</p>
            <p className="text-gray-200 mt-1">{counter1Label}</p>
          </div>
        )}

        {(counter2Value !== undefined || counter2Label) && (
          <div>
            <p className="text-5xl font-semibold text-[#B0D9FF]">{count2.toLocaleString()}%</p>
            <p className="text-gray-200 mt-1">{counter2Label}</p>
          </div>
        )}

        {(counter3Value !== undefined || counter3Label) && (
          <div>
            <p className="text-5xl font-semibold text-[#B0D9FF]">{count3}%</p>
            <p className="text-gray-200 mt-1">{counter3Label}</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ServiceSection;
