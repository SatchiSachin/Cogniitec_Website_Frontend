import React from "react";
import { motion } from "framer-motion";

/* ✅ Auto import all client logos (L1.png → L70.png) */
const logosRow1 = Object.values(
  import.meta.glob("../../assets/Images/clients/*.png", {
    eager: true,
    import: "default",
  })
);

const ClientsMarquee = () => {
  return (
    <section className="py-16 w-full bg-white overflow-hidden">
      <motion.h2
        className="text-center text-2xl md:text-4xl font-semibold text-[#00000073] mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trusted by <span className="font-bold text-[#000]">25,000+</span>{" "}
        companies from <br />
        startups to enterprise
      </motion.h2>

      {/* ROW 1 → Right */}
      <motion.div
        className="marquee mt-8 pt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="marquee-track marquee-track--right">
          {[...logosRow1, ...logosRow1].map((logo, i) => (
            <div key={i} className="logo-box">
              <motion.img
                src={logo}
                alt="client logo"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ROW 2 → Left */}
      <motion.div
        className="marquee mt-8 pt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="marquee-track marquee-track--left">
          {[...logosRow1, ...logosRow1].map((logo, i) => (
            <div key={i} className="logo-box">
              <motion.img
                src={logo}
                alt="client logo"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClientsMarquee;
