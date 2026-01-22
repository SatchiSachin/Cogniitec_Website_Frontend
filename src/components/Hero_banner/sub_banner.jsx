import React from "react";
import grid from "../../assets/Images/home/layer_banner.png";

const Sub_Banner = () => {
  return (
    <div className="relative w-full h-48 sm:h-60 md:h-72 flex items-center justify-center bg-[#fef5f4] px-4 sm:px-6 md:px-10 overflow-hidden">
      
      {/* Grid background (animated) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={grid}
          alt="banner"
          className="w-full h-full object-cover animate-gridMove"
        />
      </div>

      {/* Optional overlay (if you want grid more visible/soft) */}
      <div className="absolute inset-0 bg-white/10 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-[23px] font-semibold leading-relaxed text-left">
          Cogniitec Technology Partners helps organisations innovate, streamline
          processes, and offer first-rate digital experiences that enhance their
          ability to grow in a rapidly changing environment.
        </p>
      </div>
      
    </div>
  );
};

export default Sub_Banner;
