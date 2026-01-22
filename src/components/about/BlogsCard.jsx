import React, { useEffect, useState } from "react";
import ArrowIcon from "../../assets/icon/arrowicon.svg";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BlogsCard = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const [blogs, setBlogs] = useState([]);

  /* ---------------- FETCH BLOGS ---------------- */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/blog/list?page=1`);
        const result = await res.json();

        if (!res.ok) throw new Error("Failed to fetch blogs");
        setBlogs(result.data || []);
      } catch (error) {
        console.error("BlogsCard API Error:", error);
      }
    };

    fetchBlogs();
  }, [API_URL]);

  if (!blogs.length) return null;

  return (
    <section className="w-full xl:px-20 px-4 sm:px-6 lg:px-12  py-12 pb-0 bg-cover bg-center">
      <div className="flex justify-between items-center mb-10 md:mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Blogs</h1>
      </div>

      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-base md:text-lg font-semibold flex items-center gap-2">
          Industry Insights
          <span className="w-10 md:w-12 h-[2px] bg-black block"></span>
        </h2>

        <Link to="/blog">
          <button className="text-sm md:text-base text-gray-700 flex items-center gap-1 font-medium">
            See All Blogs
            <img src={ArrowIcon} alt="" className="w-3 h-3 -mb-1" />
          </button>
        </Link>
      </div>

      
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
           1440: {
            slidesPerView: 4,
            spaceBetween: 22,
          },
        }}
        className="w-full"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id}>
            <Link
              to={`/blogdetails/${blog.slug}`}
              className="
                block w-full
                bg-white rounded-lg p-4
                hover:shadow-lg transition
              "
            >
              <div className="w-full h-[200px] sm:h-[230px] md:h-[200px] rounded-xl overflow-hidden">
                <img
                  src={blog.thumbnail?.url}
                  alt={blog.title}
                  className="w-full h-full"
                  
                  
                />
              </div>

              <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-900 leading-snug line-clamp-2">
                {blog.title}
              </h3>

              <div className="flex items-center gap-3 mt-5">
                <div className="text-sm">
                  <p className="font-medium text-gray-800 line-clamp-1">
                    {blog.service_name}
                  </p>

                  <p className="text-xs text-gray-500 flex items-center gap-2 flex-wrap">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span>•</span>
                    {Math.ceil(
                      blog.content?.replace(/<[^>]*>/g, "").length / 500
                    )}{" "}
                    Min Read
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogsCard;
