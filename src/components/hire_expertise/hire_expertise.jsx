import React from "react";
import Hire_Expertise from "../../assets/Images/home/hire-expertise.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HireExpertise = () => {
  const jobs = [
    {
      title: "Full Stack Development",
      tags: ["Part-Time", "Full-Time"],
      details: [
        "End-to-End Development",
        "Diverse Technology Stack Proficiency",
        "Deliver and Maintain Technology Rapidly",
      ],
    },
    {
      title: "Senior UI/UX Designer",
      tags: ["Part-Time", "Full-Time"],
      details: [
        "Enterprise-Level AI Architectures & Model Integration",
        "Engineering and Optimization of Custom Models",
        "Autonomous Intelligence & Continually Learning Systems",
      ],
    },
    {
      title: "Cloud & DevOps Engineer",
      tags: ["Part-Time", "Full-Time"],
      details: [
        "Cloud Infrastructure Setup",
        "CI/CD Pipeline Automation",
        "Reliability, Security & Scalability Engineering",
      ],
    },
    {
      title: "App Developer",
      tags: ["Part-Time", "Full-Time"],
      details: [
        "End-to-End Mobile App Development",
        "Cross-Platform & Native Expertise",
        "Fast, Secure & Scalable App Delivery",
      ],
    },
  ];

  return (
    <div className="bg-[#fff4f3] px-6 lg:px-20 py-16">
      {/* Heading */}
      <h2 className="text-2xl lg:text-5xl font-semibold text-gray-800 mb-12 text-center lg:text-left">
        Accessing the Talents You Need
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-600 mb-10 text-2xl font-extralight">
            Because Business Growth Shouldn’t Wait <br /> for Hiring Cycles
          </p>

          <img
            src={Hire_Expertise}
            alt="Hire Expertise"
            className="xl:max-w-lg mx-auto lg:mx-0"
          />
        </div>

        {/* Right Slider */}
        <div className="md:w-1/2 w-full">
          <div className="pb-10 hire-swiper">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              speed={600}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1440: { slidesPerView: 2 },
              }}
              pagination={{ clickable: true }}
              className="w-full !pb-12"
            >
              {jobs.map((job, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-2xl p-8 h-80 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {job.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="border border-red-400 bg-[#EC372D0D] text-red-500 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="text-gray-500 space-y-2 text-sm">
                      {job.details.map((d, i) => (
                        <li key={i}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

  
      <style>{`
        .hire-swiper .swiper-pagination-bullet {
          width: 19px !important;
          height: 4px !important;
          border-radius: 999px !important;
          background: #fecaca !important;  /* light red */
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }

        /* ✅ IMPORTANT: active bullet selector must be stronger */
        .hire-swiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 20px !important;
          background: #ef4444 !important;  /* red */
        }
      `}</style>
    </div>
  );
};

export default HireExpertise;
