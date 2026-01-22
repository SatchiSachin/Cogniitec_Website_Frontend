import React from "react";
import PersonBlog1 from "../../../../assets/Images/blog/chatbot.png";
import { ArrowUpRight } from "lucide-react";

function Authorcard({ onOpen }) {
  return (
    <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 md:p-5 rounded-lg text-white shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src={PersonBlog1}
          alt="Author"
          className="w-14 h-14 md:w-16 md:h-16 bg-[#3A3537] rounded-lg object-cover"
        />
      </div>

      <h3 className="text-base md:text-lg font-semibold mt-4">
        Let's Connect
      </h3>

      <p className="text-xs md:text-sm mt-2 leading-relaxed">
        Have a Project in Mind? <br />
        Let’s bring your ideas to life with our expert development team.
      </p>

      <button
        onClick={onOpen}
        className="cursor-pointer group flex items-center border-2 border-[#ec372d] mt-5 bg-[#fef5f4] text-[#ec372d] font-medium text-sm px-5 py-2 rounded-xl transition-all duration-300"
      >
        Let’s Talk
        <div className="ml-2 relative w-6 h-6 rounded-full bg-[#ec372d] text-white flex items-center justify-center">
          <ArrowUpRight className="absolute w-4 h-4 opacity-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0" />
          <ArrowUpRight className="absolute w-4 h-4 opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0" />
        </div>
      </button>
    </div>
  );
}

export default Authorcard;
