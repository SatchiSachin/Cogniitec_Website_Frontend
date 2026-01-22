import React from "react";
import { education, pinkgradientbg, solutions } from "../../assets/Images/industries";

const BenefitsSection = () => {
  return (
    <section
      className="w-full pb-20 bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${pinkgradientbg})` }}
    >
      <div className="mx-auto px-5 md:px-8 lg:px-16">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-14">
          Bespoke Benefits Of Cognitec
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left Section */}
          <div>
            {/* Image */}
            <div className="rounded-xl border-2 border-pink-400 overflow-hidden mb-8">
              <img
                src={education}
                alt="Education Solutions"
                className="w-full h-60 object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-black mb-4">
              Education Solutions Adeptness
            </h3>

            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
              <div>
                <h4 className="font-semibold text-black mb-1">
                  Flexibility In Learning
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-1">
                  Voice Recognition and Learning
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-1">
                  Professional Educational Apps
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-1">
                  E-Library App Solutions
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            {/* Image */}
            <div className="rounded-xl border-2 border-blue-500 overflow-hidden mb-8">
              <img
                src={solutions}
                alt="Magnificent Solutions"
                className="w-full h-60 object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-black mb-4">
              Magnificent Solutions
            </h3>

            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
              <div>
                <h4 className="font-semibold text-black mb-1">
                  User Experience Design
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-1">
                  Engagement & responsibility
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-1">
                  Learning Standard Regulations
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-1">
                  Support & Maintenance
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A aenean ut eu in
                  integer. Donec enim at risus viverra congue at. Donec dolor
                  nullam commodo vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
