import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { GoArrowUpRight } from "react-icons/go";
import Ai from "../../assets/icon/ai.png";
import Devops from "../../assets/icon/devops.png";
import Dm from "../../assets/icon/dm.png";
import Software from "../../assets/icon/software.png";

const services = [
  {
    id: "01",
    title: "Artificial",
    title1: "Intelligence",
    desc: "Cogniitec provides AI Ripple to empower an organization's foresight in understanding change, creating insight into opportunity.",
    icon: Ai,
  },
  {
    id: "02",
    title: "Software",
    title1: "Development",
    desc: "Cogniitec structures a digitally protective security system in a modular format, providing a digitally trusted, rapid, and innovative ecosystem.",
    icon: Software,
  },
  {
    id: "03",
    title: "Digital",
    title1: "Marketing",
    desc: "Cogniitec accelerates your customer engagement and return-on-investment through Data-Driven Hyper-Personalized Digital Marketing Solutions",
    icon: Dm,
  },
  {
    id: "04",
    title: "DevOps and",
    title1: "Multi Cloud",
    desc: "Through our Intelligent DevOps Automation and Multi-Cloud Integrated Solutions, we are able to drive consistency in delivery and innovation.",
    icon: Devops,
  },
];

export default function ServiceCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">What we do</h2>

        <motion.button
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileTap={{ scale: 0.97 }}
          onClick={() => (window.location.href = "/services")}
          className="cursor-pointer flex items-center justify-center text-sm 
                 border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] 
                 font-medium px-6 py-3 rounded-lg transition-all duration-300 
                 hover:bg-[#ec372d] hover:text-white"
        >
          More Services
          <motion.span
            className="ml-2 flex"
            animate={hovered ? { x: [0, 6, 0], y: [0, -6, 0] } : { x: 0, y: 0 }}
            transition={
              hovered
                ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.1 }
            }
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>

      {/* Grid for tablet & desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="group relative p-6 rounded-2xl border border-[#bfbfbf] transition bg-white  hover:-translate-y-1 overflow-hidden"
          >
            <h3 className="text-gray-800 mb-2 text-2xl group-hover:text-red-500">
              {s.id}
            </h3>

            {/* Header + Arrow */}
            <div className="flex justify-between items-start">
              <h3 className="mt-4 text-2xl font-semibold text-gray-800 group-hover:text-red-500 transition">
                {s.title} <br />
                {s.title1}
              </h3>
              {/* <div className="opacity-0 group-hover:opacity-100 transform group-hover:rotate-45 transition-all duration-300 text-red-500">
                <ArrowUpRight/>
              </div> */}
            </div>

            {/* Icon */}
            <div className="flex justify-evenly">
              <img
                src={s.icon}
                alt=""
                // className="w-35 mt-6 mb-3 opacity-0 group-hover:opacity-100 transition duration-500"
                className="w-25 mt-6 mb-3 scale-85 hover:scale-100 duration-500"
              />
              <div className="relative group w-10 h-10">
                <GoArrowUpRight
                  className="text-red-500 w-10 h-10 absolute bottom-0 left-0 
               opacity-0 transform transition-all duration-500 
               group-hover:opacity-100 
               group-hover:translate-x-6 group-hover:-translate-y-6 
               group-hover:scale-90"
                />
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-7">{s.desc}</p>

            <div className="group relative mt-3 w-3/5">
              <div className="h-[4px] bg-[#FEF3F2] rounded-full w-full"></div>

              <div
                className="absolute left-0 top-0 h-[4px] bg-red-500 rounded-full 
               w-0 group-hover:w-full
               transition-all duration-300 ease-in-out"
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={900}
        >
          {services.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm active:scale-[0.98] transition-all duration-300 overflow-hidden">
                <div className="text-red-500 font-medium mb-2">{s.id}</div>

                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {s.title}
                  </h3>
                  <ArrowUpRight className="text-red-500 opacity-80" />
                </div>

                <img src={s.icon} alt="" className="w-12 mt-6 mb-3" />

                <p className="text-sm text-gray-500">{s.desc}</p>

                <div className="h-[2px] bg-red-500 mt-3 rounded-full w-3/5"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
