import { useState } from "react";
import { motion } from "framer-motion";
import CircleGif from "../../assets/Images/home/bg-circle.gif";
import Polygon1 from "../../assets/Images/home/polygon-1.png";
import Polygon2 from "../../assets/Images/home/polygon-2.png";
import Polygon3 from "../../assets/Images/home/polygon-3.png";
import Polygon4 from "../../assets/Images/home/polygon-4.png";
import Vector1 from "../../assets/Images/home/vector-1.png";
import Vector2 from "../../assets/Images/home/vector-2.png";
import Vector3 from "../../assets/Images/home/vector-3.png";
import Vector4 from "../../assets/Images/home/vector-4.png";
import { ArrowUpRight } from "lucide-react";

const points = [
  {
    title: "Focus on Insight",
    vector: Vector1,
    polygon: Polygon1,
    vectorClass: "eye",
  },
  {
    title: "Driven by Innovation",
    vector: Vector2,
    polygon: Polygon2,
    vectorClass: "face",
  },
  {
    title: "We Prioritize Impact",
    vector: Vector3,
    polygon: Polygon3,
    vectorClass: "heart",
  },
  {
    title: "Frictionless by Design",
    vector: Vector4,
    polygon: Polygon4,
    vectorClass: "notes",
  },
];

export default function JoinUsSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="relative overflow-hidden py-20 pt-0 lg:pt-10  px-6 bg-white my-8">
      {/* Background Circle */}
      <div className="absolute mt-10 right-[-218px] top-1/2 -translate-y-1/2 w-[440px] opacity-20 pointer-events-none -z-0">
        <img
          src={CircleGif}
          alt="circle-bg"
          className="w-full h-auto object-cover"
        />
      </div>

      <div
        className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 text-center md:text-left max-w-12xl xl:mx-15 md:mx-5
"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
          Lead the Change
        </h2>
        <motion.button
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileTap={{ scale: 0.97 }}
          className="text-[15px] cursor-pointer flex items-center justify-center 
                 border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium 
                 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22] z-10"
        >
          See Open Positions
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl xl:mx-15 md:mx-5">
        <p className="text-gray-600 text-base md:text-lg lg:text-2xl mb-10 leading-relaxed text-center md:text-left font-extralight">
          We believe in trust over control. Meaningful work
        </p>

        {/* Polygon Grid */}
        <div className="joinus-grid">
          {points.map((p, i) => (
            <div
              key={i}
              className={`joinus-item flex flex-col items-center text-center ${
                i % 2 === 0 ? "zig-up" : "zig-down"
              }`}
            >
              <div className="polygon-item">
                <img
                  src={p.polygon}
                  alt={`Polygon ${i + 1}`}
                  className="polygon-bg"
                />
                <img
                  src={p.vector}
                  alt={`Vector ${i + 1}`}
                  className={`vector-icon ${p.vectorClass}`}
                />
              </div>

              <p className="mt-3 text-gray-800 font-medium text-sm md:text-base">
                {p.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Inline Custom CSS */}
      <style>{`
        .joinus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          justify-items: start;
        }

        @media (min-width: 1024px) {
          .joinus-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .polygon-item {
          position: relative;
          width: 7rem;
          height: 7rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 768px) {
          .polygon-item {
            width: 8rem;
            height: 8rem;
          }
        }

        .polygon-bg {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .vector-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2.5rem;
          height: 2.5rem;
          transform: translate(-50%, -50%);
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .vector-icon {
            width: 3rem;
            height: 3rem;
          }
        }

        /* Alignment fine-tuning */
        .vector-icon.eye {
          margin-top: 8px;
          transform: translate(-50%, -48%);
        }

        .vector-icon.face {
          margin-left: 5px;
          transform: translate(-50%, -52%);
        }

        .vector-icon.heart {
          margin-left: -8px;
          transform: translate(-50%, -49%);
        }

        .vector-icon.notes {
          margin-top: 8px;
          transform: translate(-50%, -50%);
        }

        /* Hover animation */
        .polygon-item:hover .vector-icon {
          transform: translate(-50%, -50%) scale(1.1);
        }

        /* ✅ Zig-Zag Order (Top Bottom Top Bottom) */
.joinus-item.zig-up {
  transform: translateY(0px);
}

.joinus-item.zig-down {
  transform: translateY(65px);
}

/* ✅ Keep zig-zag only for large screens */
@media (max-width: 1023px) {
  .joinus-item.zig-down {
    transform: translateY(0px);
  }
}

      `}</style>
    </section>
  );
}
