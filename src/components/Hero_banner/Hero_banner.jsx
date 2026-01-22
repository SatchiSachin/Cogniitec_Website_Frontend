import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BannerGrid from "../../assets/Images/home/banner_grid.png";
import ContactModal from "../../components/Model/ContactModal";

const Hero_banner = () => {
  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);

  const [open, setOpen] = useState(false);
  const textVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-40 overflow-hidden min-h-[80vh]"
        style={{
          backgroundImage: `url(${BannerGrid})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight"
          >
            Shaping the Future of Through
            <br className="hidden md:block" />
            Technology and Innovation
          </motion.h1>

          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base"
          >
            At Cogniitec, we combine the strength of collaboration and the power
            of innovation to help businesses grow through technology.
          </motion.p>

          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={3}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            {/* BUTTON 1 */}
            <motion.button
              onHoverStart={() => setHoverBtn1(true)}
              onHoverEnd={() => setHoverBtn1(false)}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className="text-sm cursor-pointer flex items-center justify-center 
               border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium 
               px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]"
            >
              Explore Capabilities
              <motion.span
                className="ml-2 flex"
                animate={
                  hoverBtn1 ? { x: [0, 6, 0], y: [0, -6, 0] } : { x: 0, y: 0 }
                }
                transition={
                  hoverBtn1
                    ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.1 }
                }
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </motion.button>

            {/* BUTTON 2 */}
            <motion.button
              onHoverStart={() => setHoverBtn2(true)}
              onHoverEnd={() => setHoverBtn2(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => (window.location.href = "/contact-us")}
              className="text-sm cursor-pointer flex items-center justify-center 
               border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] 
               font-medium px-6 py-3 rounded-lg transition-all duration-300 
               hover:bg-[#ec372d] hover:text-white"
            >
              Request a Proposal Meeting
              <motion.span
                className="ml-2 flex"
                animate={
                  hoverBtn2 ? { x: [0, 6, 0], y: [0, -6, 0] } : { x: 0, y: 0 }
                }
                transition={
                  hoverBtn2
                    ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.1 }
                }
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero_banner;
