import OviewAboutP1 from "../../assets/Images/about/oviewaboutP1.svg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerParent = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const OverviewSectionAbout = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerParent}
      className="w-full bg-white py-10 lg:py-16 px-6 lg:px-20"
    >
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        className="text-[30px] text-black font-semibold mb-4 lg:mb-6"
      >
        Built for lasting partnerships
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT GRID CONTENT */}
        <div className="lg:col-span-2 space-y-14 mt-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold text-[#343434] mb-3">
                Who We Are
              </h3>
              <p className="font-sfpro text-[15.07px] text-[#8C8B90] leading-[135%]">
                Cogniitec is a global technology solutions provider with over
                five years of experience, based in India, and with operations in
                the USA, UK, and Australia. Our primary goal is to provide our
                clients with dependable digital transformation based on
                engineering excellence, innovation, and practical applications
                of technology. .
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold text-[#343434] mb-3">
                What We Do
              </h3>
              <p className="font-sfpro text-[15.07px] text-[#8C8B90] leading-[135%]">
                Cogniitec provides various services, including software
                development, artificial intelligence (AI) solutions, video
                gaming, and digital marketing, which allow businesses to operate
                better, optimize their processes, strengthen their security, and
                grow faster and smarter in the face of competition.
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold text-[#343434] mb-3">
                Mission
              </h3>
              <p className="font-sfpro text-[15.07px] text-[#8C8B90] leading-[135%]">
                To be the most intelligent, scalable, and future-ready provider
                of technology solutions, which fosters business growth, improves
                operational efficiencies, enhances decision-making, and adds
                long-term value through innovative and reliable digital
                capabilities.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold text-[#343434] mb-3">
                Vision
              </h3>
              <p className="font-sfpro text-[15.07px] text-[#8C8B90] leading-[135%]">
                To be the leader in technology innovation, enabling businesses
                worldwide to operate effectively using intelligent systems and
                digital capabilities to facilitate growth and transformation
                across all industries
              </p>
            </motion.div>
          </div>

          {/* Bottom Full Width */}
          {/* <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-semibold text-[#343434] mb-3">
                       How Cogniitec Supports Businesses With Advanced Technology Solutions

                        </h3>
                        <p className="font-sfpro text-[15.07px] text-[#8C8B90] leading-[135%]">
                            Implement advanced software and cloud-based systems that boost efficiency,
                             expand capability, and improve decision-making across your business.

                        </p>
                    </motion.div> */}
        </div>

        {/* RIGHT BROCHURE CARD */}
        <motion.div variants={fadeUp}>
          <div
            className="rounded-2xl text-white h-[520px] flex flex-col justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${OviewAboutP1})` }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-xl font-semibold text-center mb-6"
            >
              BROCHURE
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-center text-sm mb-8 leading-relaxed"
            >
              The brands shaping tomorrow choose partners who innovate today.
              <br />
              We’re here to help you build what’s next.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="font-poppins relative overflow-hidden cursor-pointer border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg text-sm group"
              >
                {/* WIDTH HOLDER */}
                <span className="invisible whitespace-nowrap flex items-center gap-2">
                  START YOUR PROJECT
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>

                {/* DEFAULT STATE */}
                <span className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                  DOWNLOAD NOW
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>

                {/* HOVER STATE */}
                <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  START YOUR PROJECT
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverviewSectionAbout;
