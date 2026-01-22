import React from "react";
import CenterImg from "../../assets/Images/services/center-img.png";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01.",
    title: "Step 1",
    description: "Choose your preferred date and time for cleaning",
    column: "left",
  },
  {
    id: "03.",
    title: "Step 3",
    description: "Thorough cleaning using eco-friendly products",
    column: "left",
  },
  {
    id: "02.",
    title: "Step 2",
    description: "Professional team arrives on time with all equipment",
    column: "right",
  },
  {
    id: "04.",
    title: "Step 4",
    description: "Enjoy your spotless, refreshed home",
    column: "right",
  },
];

const StepCard = ({ step }) => (
  <div className="bg-[#F5F5F5] rounded-3xl p-6 space-y-4">
    <h4 className="text-black text-lg md:text-2xl font-semibold">{step.id}</h4>
    <h5 className="text-black text-lg md:text-2xl font-semibold">
      {step.title}
    </h5>
    <p className="text-[#454545] text-sm md:text-base">{step.description}</p>
  </div>
);

const ServiceSection4 = () => {
  return (
    <section className="w-full bg-white md:py-16">
      <div className="px-6 md:px-10 lg:px-16 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug">
          Our Plans
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-12">
          Our streamlined process makes it easy to get professional cleaning
          services.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Steps */}
          <div className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-1 gap-8 text-left">
            {steps
              .filter((step) => step.column === "left")
              .map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <img
              src={CenterImg}
              alt="Service Process"
              className="rounded-2xl w-auto h-full md:h-auto lg:h-full object-cover"
            />
          </div>

          {/* Right Steps */}
          <div className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-1 gap-8 text-left">
            {steps
              .filter((step) => step.column === "right")
              .map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex mt-12 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]"
            onClick={() => setOpen(true)}
          >
            Start Your Project
            <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection4;
