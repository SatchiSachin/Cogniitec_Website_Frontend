import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const RelatedArticlesSlider = ({ articles = [] }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="w-full px-4 md:px-8 mt-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Related Articles
        </h2>
        <p className="text-gray-400 text-sm">No related articles available.</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 mt-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-5">
        Related Articles
      </h2>

      <div className="relative">
        {/* LEFT ARROW */}
        <button className="related-prev hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
          <ChevronLeft size={22} />
        </button>

        {/* RIGHT ARROW */}
        <button className="related-next hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
          <ChevronRight size={22} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".related-prev",
            nextEl: ".related-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="w-full"
        >
          {articles.map((item) => (
            <SwiperSlide key={item._id}>
              <Link
                to={`/blogdetails/${item.slug}`}
                className="
                  block
                  w-full
                  bg-[#F8F8F8]
                  rounded-xl
                  hover:shadow-lg
                  transition
                  p-3
                  md:p-4
                "
              >
                <img
                  src={item.thumbnail?.url}
                  alt={item.title}
                  className="w-full h-[170px] sm:h-[190px] md:h-[200px] lg:h-[190px] rounded-lg"
                />

                <div className="flex items-center gap-2 text-xs sm:text-sm mt-3">
                  <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <p className="text-gray-600 line-clamp-1">
                      {item.service_name}
                    </p>
                  </div>
                </div>

                <h3 className="font-semibold text-[15px] sm:text-[16px] md:text-[17px] mt-2 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <div className="text-xs sm:text-sm text-gray-500 flex gap-2 sm:gap-3 mt-3 flex-wrap">
                  <span>
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>
                    {Math.ceil(
                      item.content?.replace(/<[^>]*>/g, "").length / 500
                    )}{" "}
                    min read
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedArticlesSlider;
