import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AboutVideo from "../../assets/video/about/VideoProject1.mp4";
const WORDS = ["simplify the complex", "build what matters"];

const AboutUsVideoSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white mt-20 md:mt-20 flex flex-col items-center justify-center  px-4 md:px-0">
      <div className="">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-center justify-end xl:translate-15 xl:-translate-x-5">
        Moving beyond the status quo <br />
        to{" "}
        <span className="relative inline-block text-[#ec372d] min-h-[1.2em]">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="block">
              {WORDS[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>    
</div>
  
      <div className="w-full max-w-6xl">
        <video
          src={AboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className=" w-full
                        h-[200px] sm:h-[300px] md:h-[420px] lg:h-[630px]
                        object-cover
                        rounded-xl "/>
      </div>
    </div>
  );
};

export default AboutUsVideoSection;
