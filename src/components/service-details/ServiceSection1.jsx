import React from "react";
import RightImage from "../../assets/Images/services/right-img.png";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

const statsData = [
  {
    value: "500+",
    title: "Lorem ipsum amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Magna semper fermentum nibh id neque. Bibendum sagittis nisl enim amet.",
  },
  {
    value: "1,200+",
    title: "Lorem ipsum amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Magna semper fermentum nibh id neque. Bibendum sagittis nisl enim amet.",
  },
  {
    value: "100%",
    title: "Lorem ipsum amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Magna semper fermentum nibh id neque. Bibendum sagittis nisl enim amet.",
  },
];

const ServiceSection1 = () => {
  return (
    <section className="w-full bg-white md:py-16">
      <div className="px-5 md:px-8 lg:px-16">
        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-[#454545]">
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
              Lorem ipsum dolor sit <br /> amet consectetur.
            </h1>

            <p className="leading-relaxed mb-6">
              Puredera ensures spotless results with professional tools,
              eco-friendly products, and a trusted team. We understand that your
              home is your sanctuary, and we treat it with the respect and care
              it deserves.
            </p>

            {/* CHECK LIST */}
            <ul className="space-y-3 mb-8">
              {[
                "Eco-Friendly Cleaning Products",
                "Flexible Scheduling Options",
                "100% Satisfaction Guarantee",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-4 h-4 flex items-center justify-center text-[#EC3B31]">
                    <FaCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]"
                onClick={() => setOpen(true)}
              >
                View More
                <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-[460px]">
              <img
                src={RightImage}
                alt="Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {statsData.map((item, index) => (
            <div key={index} className="bg-[#F5F5F5] rounded-3xl p-6 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                {item.value}
              </h3>

              <p className="font-medium text-gray-700 mb-2">{item.title}</p>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection1;
