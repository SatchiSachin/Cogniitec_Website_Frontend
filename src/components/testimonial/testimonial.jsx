import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import quote from "../../assets/Images/home/quote-right-svgrepo-com 2.png";

import Quote from "../../assets/Images/home/quote.png";
const testimonials = [
  {
    id: 1,
    name: "Mohan C. from India",
    text: "They kept up a good tempo to help keep us at the pace we wanted",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Rishad from the UAE",
    text: "Their communication skills are excellent, and they respond to problems very quickly.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Harish from South Africa",
    text: "Besides their technical expertise, I was very impressed with their professionalism and transparency.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Gopala Krishnan, Uk",
    text: "Our project was executed with precision and speed. The team understood our needs instantly and delivered outstanding results.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 5,
    name: "Riyas, USA",
    text: "They brought fresh ideas, strong tech expertise, and consistent communication. A dependable partner for any digital transformation initiative",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 6,
    name: "Sandy, India",
    text: "Exceptional service and proactive problem-solving. Their ability to simplify complex challenges made the entire process stress-free.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 7,
    name: "Vairamurthy, India",
    text: "Professional, creative, and highly efficient. They treated our project like their own and exceeded every expectation with quality delivery",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // responsive listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 3 visible for desktop, 1 for mobile
  const getVisible = () => {
    if (isMobile) return [testimonials[activeIndex]];
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [testimonials[prev], testimonials[activeIndex], testimonials[next]];
  };

  const visible = getVisible();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-13  px-6 md:px-20 bg-white overflow-hidden">
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <div className="text-6xl text-red-100 font-bold mb-3">
          <img src={Quote} alt="" />
        </div>  
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
          What Our <br className="hidden md:block" /> Customers Say
        </h2>
        <p className="text-gray-500 mb-6 text-base font-extralight md:text-lg lg:text-2xl">
          Listen to what our valuable customers say <br />every now and then.
        </p>
        {/* <button className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]">
          View More
          <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button> */}
      </div>

      {/* RIGHT SECTION */}
      <div
        className={`w-full md:w-1/2 flex flex-col items-end justify-center relative overflow-hidden ${
          isMobile ? "h-[160px]" : "h-[360px]"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute w-full flex flex-col gap-5 items-center"
          >
            {visible.map((item, index) => {
              const isActive = isMobile ? true : index === 1;
              return (
                <motion.div
                  key={item.id}
                  layout
                  animate={{
                    scale: isActive ? 1.05 : 0.95,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  className={`flex items-center gap-4 w-full sm:w-4/5 p-4 md:p-5 rounded-lg mb-0 ${
                    isActive
                      ? "bg-white border-l-9 border-red-500 shadow-sm z-10"
                      : " border-l-9 border-[#D9D9D980]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ${
                      isActive ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  <div>
                    <div className="flex justify-between items-center">
                      <h4
                      className={`font-semibold ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <img src={quote} alt="quote" />
                    </div>
                    
                    <p
                      className={`text-sm ${
                        isActive ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
