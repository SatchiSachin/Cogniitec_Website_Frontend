import React from "react";
import { motion } from "framer-motion";

import YearsImg from "../../assets/Images/about/yearsAbout.svg";
import TechImg from "../../assets/Images/about/techAbout.svg";
import ClientsImg from "../../assets/Images/about/ClientsImgAbout.svg";
import PolygonalStyleBackground from "../../assets/Images/about/polygonal-style-background.svg";
import TeamSvgRepo from "../../assets/Images/about/team-svgrepo.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HighlightsAbout = () => {
  const cards = [
    {
      title: "3+ Years of Innovation",
      hoverTitle: "3+ Years of Innovation",
      hoverDesc: "From software roots to leading the charge in AI and digital evolution",
      img: YearsImg,
      height: "h-[540px]",
      textColor: "text-white",
    },
    {
      title: "4 Global Hubs",
      hoverTitle: "4 Global Hubs",
      hoverDesc: "Strategic footprints in India, the UK, USA, and Australia",
      img: TechImg,
      height: "h-[400px]",
      textColor: "text-white",
    },
    {
      title: "50+ Solutions Scaled",
      hoverTitle: "50+ Solutions Scaled",
      hoverDesc: "Turning complex technical challenges into simple, high-growth business tools",
      bgColor: "bg-[#F3E8DD]",
      height: "h-[260px]",
      textColor: "text-[#5B4A3F]",
      icon: true,
    },
    {
      title: "30+ Tech Specialists",
      hoverTitle: "30+ Tech Specialists",
      hoverDesc: "A collaborative team of engineers, creatives, and strategists working for you",
      bgColor: "bg-[#DFF0FF]",
      height: "h-[300px]",
      textColor: "text-[#1381D8]",
      globe: true,
    },
    {
      title: "1 Unified Goal",
      hoverTitle: "1 Unified Goal",
      hoverDesc: 'Handling the "big stuff" so you can focus on reaching your full potential',
      img: ClientsImg,
      height: "h-[540px]",
      textColor: "text-white",
    },
  ];

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerParent}
            className="w-full bg-white py-0 px-6 lg:px-20"
        >
            <motion.h2
                variants={fadeUp}
                className="text-3xl font-semibold text-gray-800 mb-8"
            >
                Highlights
            </motion.h2>

      <motion.div
        variants={staggerParent}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-end"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`relative overflow-hidden group ${card.bgColor || ""} ${
              card.height
            } bg-cover bg-center rounded-3xl p-6 flex flex-col justify-between w-full cursor-pointer shadow-sm`}
            style={card.img ? { backgroundImage: `url(${card.img})` } : {}}
          >
            {card.img && (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.img})` }}
              />
            )}

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-3xl" />

            {/* CONTENT */}
            <div className="relative flex flex-col justify-between h-full">
              {/* Default Content */}
              <div className="group-hover:opacity-0 transition-opacity duration-300">
                {card.icon && (
                  <img src={TeamSvgRepo} alt="" className="w-20 h-20 mb-4" />
                )}

                            <p
                                className={`
                                    whitespace-pre-line text-2xl sm:text-3xl font-semibold leading-tight 
                                    ${card.textColor}
                                `}
                            >
                                {card.title}
                            </p>
                        </div>

              {/* Hover Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg md:text-xl font-semibold font-poppins leading-tight">
                  {card.hoverTitle}
                </p>

                {card.hoverDesc && (
                  <p className="mt-3 text-sm text-white/90 max-w-[240px]">
                    {card.hoverDesc}
                  </p>
                )}
              </div>

              {/* Globe stays visible */}
              {card.globe && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={PolygonalStyleBackground}
                  className="w-[240px] sm:w-[300px] opacity-90 mx-auto relative z-0"
                  alt=""
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HighlightsAbout;
