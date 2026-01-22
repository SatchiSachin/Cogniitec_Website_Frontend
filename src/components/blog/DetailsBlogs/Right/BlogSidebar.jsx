import { useState } from "react";
import { FaLinkedin, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import ContactModal from "../../../Model/ContactModal";

const BlogSidebar = ({ subTitles = [], activeTitle, onTitleClick }) => {
  // ... keep share logic ...

  return (
    <div className="w-full max-w-xs mx-auto space-y-6 px-3">
      {/* Share Section... */}

      {subTitles.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 text-base md:text-lg">
            In this article
          </h3>

          <div className="space-y-2 text-sm md:text-base">
            {subTitles.map((title, index) => {
              const isActive = activeTitle === title;
              return (
                <div
                  key={index}
                  onClick={() => onTitleClick(title)}
                  className={`p-2 rounded cursor-pointer transition-all duration-300 border-l-4 ${
                    isActive
                      ? "bg-red-50 border-red-500 text-red-700 font-semibold"
                      : "border-transparent text-gray-600 hover:text-red-600"
                  }`}
                >
                  <p>{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default BlogSidebar;
