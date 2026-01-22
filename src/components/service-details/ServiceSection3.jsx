import React from "react";
import DevImg from "../../assets/Images/services/left-img.png";

const services = [
  {
    title: "Test Coverage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Automation Testing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Defect Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Test Environment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Performance Benchmarking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Security Testing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const ServiceSection3 = () => {
  return (
    <section className="relative">
      <div className="px-6 md:px-8 lg:px-16 py-16">
        
        {/* TOP CONTENT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
          
          {/* LEFT IMAGE */}
          <div>
            <img
              src={DevImg}
              alt="Development"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-xs tracking-widest text-[#A3A3A3] uppercase mb-3">
              Powerful Development Team
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#888888] leading-snug">
              Expertise <br />
              In Customized <br />
              Software Development <br />
              Services
            </h2>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-7 cursor-pointer transition-all shadow-sm duration-300
                         bg-white hover:bg-[#EC372D]"
            >
              <h3 className="font-semibold text-lg mb-3 text-gray-700 group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500 group-hover:text-white/90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection3;
