import React from "react";
import GradientImg from "../../assets/Images/services/service-hero.png";

const ServiceHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] leading-tight">
              Lorem ipsum dolor <br /> sit amet
            </h1>

            <p className="mt-5 text-sm md:text-base text-gray-600 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Id magna sed eget sagittis
              mauris pulvinar gravida proin pretium.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <button className="bg-[#111] text-white text-sm px-6 py-3 rounded-md hover:bg-black transition">
                Explore More
              </button>

              <button className="text-sm font-medium text-[#111] hover:underline">
                Discover Features
              </button>
            </div>
          </div>

          {/* RIGHT GRADIENT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={GradientImg}
              alt="Gradient"
              className="w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
