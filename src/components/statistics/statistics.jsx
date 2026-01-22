import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Briefcase, Building2 } from "lucide-react";
import { PiFactoryBold } from "react-icons/pi";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-red-500" />,
    count: 200,
    suffix: "+",
    label: "Employees",
  },
  {
    icon: <PiFactoryBold className="w-8 h-8 text-red-500" />,
    count: 20,
    suffix: "+",
    label: "Industries Served",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-red-500" />,
    count: 120,
    suffix: "+",
    label: "Projects",
  },
  {
    icon: <Building2 className="w-8 h-8 text-red-500" />,
    count: 5,
    suffix: "+",
    label: "Offices Worldwide",
  },
];

const Statistics = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <span className="text-xs sm:text-sm text-red-500 bg-[#fef5f4] border border-red-300 px-3 py-1 rounded-md inline-block">
            Our Impact
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-gray-900 leading-tight">
           What Sets Us Apart
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 leading-relaxed font-light">
           Our people at the core,  
 <br className="hidden sm:block" />
           innovation at the <br className="hidden sm:block" />
            forefront.
          </p>

          <div className="mt-10 sm:mt-12 border-t border-b border-gray-300 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sm:border-r border-gray-300 flex justify-center sm:justify-start"
            >
              <h1 className="text-[70px] sm:text-[100px] md:text-[130px] lg:text-10xl font-bold py-6 sm:py-8 text-red-500 leading-none pe-10">
                5+
              </h1>
            </motion.div>

            <p className="text-gray-500 text-sm sm:text-base mt-4 sm:mt-0 sm:ml-6 pe-10 sm:pb-5">
              Years since <br /> established
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-red-200 rounded-2xl p-4 sm:p-6 text-center sm:text-start bg-white hover:shadow-md transition"
            >
              <div className="flex justify-center sm:justify-start mb-3">
                {item.icon}
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                <CountUp end={item.count} duration={4} /> {item.suffix}
              </h4>
              <p className="text-gray-500 mt-3 sm:mt-5 text-xs sm:text-sm md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Statistics;
