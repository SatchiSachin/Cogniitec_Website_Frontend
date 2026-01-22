import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Md from "../../assets/Images/about/md.png";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const WhatWeDo = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerParent}
      className="w-full bg-white py-16 px-2 md:px-12 lg:px-20"
    >
      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="text-[30px] font-semibold text-black mb-10"
      >
        What We Do
      </motion.h2>

      {/* Main Container */}
      <motion.div
        variants={fadeUp}
        className="border border-gray-300 rounded-xl p-5 grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {/* LEFT TEXT SECTION */}
        <motion.div
          variants={staggerParent}
          className="space-y-10 text-gray-700 leading-relaxed"
        >
          {/* MOBILE ONLY */}
          <motion.div variants={fadeUp} className="block md:hidden">
            <AnimatePresence mode="sync">
              {!showMore && (
                <motion.p
                  key="short"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="line-clamp-3 text-[#8C8B90]"
                >
                  Cogniitec began as a software and cloud company focused on
                  delivering growth-oriented, high-performance, reliable
                  systems.
                </motion.p>
              )}

              {showMore && (
                <motion.p
                  key="full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[#8C8B90]"
                >
                  Cogniitec began as a software and cloud company focused on
                  delivering growth-oriented, high-performance, reliable
                  systems. As technology developed, so did our strengths and
                  capabilities, ultimately evolving into an integrative provider
                  of technology solutions.
                </motion.p>
              )}
            </AnimatePresence>

            {/* VIEW MORE BUTTON */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowMore(!showMore)}
              className="text-black font-semibold mt-3"
            >
              {showMore ? "View Less" : "View More"}
            </motion.button>
          </motion.div>

          {/* DESKTOP TEXT */}
          <motion.div
            variants={fadeUp}
            className="hidden md:block space-y-10 font-poppins text-[#8C8B90]"
          >
            <p>
              Cogniitec began as a software and cloud company focused on
              delivering growth-oriented, high-performance, reliable systems. As
              technology developed, so did our strengths and capabilities,
              ultimately evolving into an integrative provider of technology
              solutions. Cogniitec continues to leverage its experience and
              develop new AI, game, digital marketing, intelligent automation,
              and enterprise IT products and services today with capabilities
              that are utilized daily by our clients.
            </p>

            <p>
              Our process has been developed through years of practical
              engineering experience and continuous innovation; helping
              businesses improve their performance, develop new processes and
              deliver superior digital experiences to customers. Our engineers,
              developers, creative, strategy teams all work together to create
              dependable, scalable and customized solutions based on each
              business’s unique needs.
            </p>

            <p>
              As technology continues to reshape and redefine all industries,
              Cogniitec’s goal is to simplify and demystify advanced digital
              technologies for our clients by providing solutions such as custom
              software development, intelligent automation, high fidelity
              immersive video game applications, and data analytics driven
              marketing towards their continued success as they embark and
              navigate through the digital transformation process.
            </p>

            <p>
              With its headquarters located in India and offices located in the
              UK, USA and Australia, Cogniitec remains a trusted partner to
              clients worldwide as we continue to grow and evolve; delivering
              innovative solutions while adhering to its core values of
              providing quality, transparency and continuous improvement.
              Delivering on our commitment to help realize our client’s
              potential is what drives us at Cogniitec.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          variants={fadeUp}
          className="relative mb-20 grid place-items-center"
        >
          {/* Large Box */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
                            w-[220px] h-[320px] lg:w-[400px] lg:h-[460px] 
                            md:w-[430px] md:h-[460px] xl:w-[500px] xl:h-[560px] 
                            rounded-xl bg-gradient-to-b from-[#F7C7C7] to-white 
                            flex items-center justify-center text-xl font-semibold text-gray-800
                        "
          >
            <img src={Md} alt="" />
          </motion.div>

          {/* Small Box */}
          {/* <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="
                            w-[180px] h-[140px] lg:w-[200px] lg:h-[160px] 
                            md:w-[200px] md:h-[160px] xl:w-[240px] xl:h-[240px] 
                            rounded-xl bg-gradient-to-b from-[#F7C7C7] to-white 
                            absolute -bottom-14 left-1 shadow-sm
                        "
                    ></motion.div> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhatWeDo;
