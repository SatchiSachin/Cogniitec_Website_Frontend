import React from "react";
import icon1 from "../../assets/Images/services/circle-check.png";
import icon2 from "../../assets/Images/services/gauge-high.png";
import icon3 from "../../assets/Images/services/bugs.png";

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

const CardSection = () => {
  return (
    <section className="w-full bg-white pb-20">
      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-20 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug">
          Lorem ipsum dolor sit amet consectetur
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. A aenean ut eu in integer. Donec enim at risus viverra congue at. Donec dolor nullam commodo vitae.
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
    </section>
  );
};

export default CardSection;
