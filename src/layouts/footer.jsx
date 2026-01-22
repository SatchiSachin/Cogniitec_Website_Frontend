import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#fffaf5] via-[#f9fbff] to-[#f2f7ff] text-[#111] font-poppins">
      <div className="max-w-8xl mx-15 px-6 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
            Shoot your idea or a project. <br /> Let’s collaborate and work
            together
          </h2>
          <button onClick={() => (window.location.href = "/contact-us")} className="cursor-pointer bg-[#e63946] border-2 border-[#e63946] text-white px-6 py-2 text-[15px] rounded-md font-medium transition-colors duration-300 hover:bg-white hover:text-[#e63946]">
            Book A Call
          </button>
        </div>

        <hr className="border-t border-gray-300 mb-8" />

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 leading-snug">
              AI Digital Solutions
            </h3>
            <ul className="space-y-1 leading-relaxed">
              {[
                "AI Development",
                "Enterprise AI Development",
                "AI PoC",
                "AI Chatbots",
                "Chatbots Integration",
                "LLM Training",
                "AI Integration",
                "AI Predictive Analytics",
                "Machine Learning",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#EC372D] transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Repeat same for other columns */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 leading-snug">
              Development
            </h3>
            <ul className="space-y-1 leading-relaxed">
              {["Custom Software Development", "Marketplace Development"].map(
                (item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-[#EC372D] transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 leading-snug">
              Industries
            </h3>
            <ul className="space-y-1 leading-relaxed">
              {[
                "Banking",
                "Education",
                "Finance",
                "Ecommerce",
                "Healthcare",
                "HR & Recruitment",
                "Insurance",
                "Manufacturing",
                "Retail",
                "Sales",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#EC372D] transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 leading-snug">
              Consulting
            </h3>
            <ul className="space-y-1 leading-relaxed">
              {[
                "AI Consulting",
                "Chatbot Consulting",
                "Generative AI Consulting",
                "OpenAI Consulting",
                "Machine Learning Consulting",
                "MLOps Consulting",
                "Deep Learning Consulting",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#EC372D] transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 text-xs text-gray-500 gap-2 md:gap-0 leading-relaxed">
          <p>© Copyright 2026, All Rights Reserved</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
