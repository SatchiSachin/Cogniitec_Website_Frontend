import React from "react";
import BgPattern from "../../assets/Images/contact/bgpattern.svg";

const ContactInfo = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-14 px-5 sm:px-8 md:px-10 min-h-[60vh] flex items-center"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full text-center md:text-left">
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Contact Info
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-[45px] font-semibold leading-tight">
            We are always <br /> happy to assist you
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Email Address
            </h3>
            <div className="w-8 h-[2px] bg-gray-800 mt-1 mb-3"></div>

          
            <a
              href="mailto:help@cogniitec.com"
              className="text-gray-900 font-medium text-lg sm:text-xl"
            >
              help@cogniitec.com
            </a>

            <p className="text-lg sm:text-xl text-gray-600 mt-3 leading-relaxed">
              Assistance hours: <br />
              Monday – Friday 6 am to <br />
              8 pm EST
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Number
            </h3>
            <div className="w-8 h-[2px] bg-gray-800 mt-1 mb-3"></div>

          
            <a
              href="tel:+180899834256"
              className="text-gray-900 font-medium text-lg sm:text-xl"
            >
              (808) 998-34256
            </a>

            <p className="text-lg sm:text-xl text-gray-600 mt-3 leading-relaxed">
              Assistance hours: <br />
              Monday – Friday 6 am to <br />
              8 pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
