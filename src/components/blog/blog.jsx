import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Artificial Intelligence in healthcare",
    desc: "At accumsan condimentum donec dictumst eros, tempus in diam. Ornae gravida quis eu blandit lectus vestibulum sagittis. Congue neque in vulputate tincidunt ornare curabitur pulvinar.",
    author: "Sabareesh",
    date: "March 10, 2022",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "How DevOps leverages the operations in an organization",
    desc: "At accumsan condimentum donec dictumst eros, tempus in diam. Ornae gravida quis eu blandit lectus vestibulum sagittis. Congue neque in vulputate tincidunt ornare curabitur pulvinar.",
    author: "Valaamoorthy",
    date: "March 15, 2022",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Exploring Cloud Scalability in Modern Enterprises",
    desc: "Discover how scalable infrastructure empowers businesses to handle growing workloads with efficiency.",
    author: "Deepak",
    date: "March 20, 2022",
    time: "7 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Data Analytics Driving Business Growth",
    desc: "Learn how businesses harness the power of analytics to drive smarter decisions and improve outcomes.",
    author: "Abarna",
    date: "March 25, 2022",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "The Rise of Edge Computing",
    desc: "Understand how edge computing changes the landscape of data processing, enabling faster performance.",
    author: "Kaaleeswaran",
    date: "March 30, 2022",
    time: "8 min read",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Blog</h2>
        <button className=" text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]">
          View More Articles
          <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 2 },
        }}
        className="relative pb-16"
      >
        {blogs.map((blog, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[500px] sm:h-[300px] md:h-[360px] lg:h-[300px]">
              {/* Image */}
              <div className="sm:w-1/2 w-full h-[200px] sm:h-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover sm:rounded-l-2xl"
                />
              </div>

              {/* Content */}
              <div className="sm:w-1/2 p-6 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 leading-snug line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {blog.desc}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center mt-6 text-sm text-gray-500 gap-2">
                  <img
                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${blog.author}`}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-700">{blog.author}</p>
                    <p className="text-xs text-gray-500">
                      {blog.date} • {blog.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination CSS */}
      <style>{`
        .swiper {
          padding-bottom: 60px !important;
        }

        .swiper-pagination {
          bottom: 10px !important;
          position: absolute !important;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .swiper-pagination-bullet {
          background: #ffa500 !important;
          opacity: 0.5;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
          margin: 0 5px;
        }

        .swiper-pagination-bullet-active {
          background: #ff7b00 !important;
          transform: scale(1.4);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
