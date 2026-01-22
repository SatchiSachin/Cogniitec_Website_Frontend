import React from "react";
import bottomImage from "../../assets/Images/services/bottom-banner.png";
import icon1 from "../../assets/Images/services/circle-check.png";
import icon2 from "../../assets/Images/services/gauge-high.png";
import icon3 from "../../assets/Images/services/bugs.png";
import { pinkgradientbg } from "../../assets/Images/industries";

const cards = [
  {
    id: 1,
    icon: icon1,
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    id: 2,
    icon: icon2,
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    id: 3,
    icon: icon3,
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
];

const ServiceSection2 = () => {
  return (
    <section
      className="w-full pb-20 bg-contain bg-no-repeat bg-top-left"
      style={{ backgroundImage: `url(${pinkgradientbg})` }}
    >
      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-20 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug">
          Complete End–End Customized <br />
          Software Development
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
          Choose from our range of professional cleaning services tailored to
          your needs.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-8 text-left text-[#888888] shadow-sm hover:shadow-lg transition"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                <img src={card.icon} alt={card.title} />
              </div>

              <h4 className="text-lg md:text-xl font-semibold mb-2">
                {card.title}
              </h4>

              <p className="text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <div className="w-full">
        <img
          src={bottomImage}
          alt="software development"
          className="w-full h-[280px] md:h-[360px] lg:h-[420px] object-cover"
        />
      </div>
    </section>
  );
};

export default ServiceSection2;
