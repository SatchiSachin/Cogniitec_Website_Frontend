import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Pureora transformed my home! The team is professional, friendly, and pays attention to every detail. I couldn't be happier with their service.",
    name: "Robert William",
  },
  {
    quote:
      "Best cleaning service I've ever used. They're always on time, thorough, and use eco-friendly products. Highly recommend!",
    name: "Sonia Marmeladova",
  },
  {
    quote:
      "As a senior, having Pureora help keep my home clean has been a blessing. They're reliable, trustworthy, and do an amazing job every time.",
    name: "Artful Dodger",
  },
];

const ServiceSection6 = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="px-6 md:px-10 lg:px-16 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug">
          Over 10.000+ Positive Reviews
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-12">
          Our clients love how Pureora brings comfort and brightness back into
          their homes.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] rounded-2xl p-8 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#DC2626] text-[#DC2626]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                “{item.quote}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold text-lg text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* BUTTON */}
        <div className="flex mt-12 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-poppins text-sm cursor-pointer flex items-center justify-center 
               border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium 
               px-8 py-3 rounded-full transition-all duration-300 
               hover:bg-[#c72a22]"
            onClick={() => setOpen(true)}
          >
            Read More Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection6;
