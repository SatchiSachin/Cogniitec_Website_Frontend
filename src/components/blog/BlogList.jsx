import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const BlogList = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const hasFetched = useRef(false); // 🔥 IMPORTANT FIX

  /* -------- FETCH BLOGS -------- */
  const fetchBlogs = async (pageNo) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}/blog/list?page=${pageNo}`
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to fetch blogs");
      }

      setBlogs((prev) => [...prev, ...(result.data || [])]);
      setTotalPages(result.pagination?.totalPages || 1);
    } catch (error) {
      console.error("Blog List Error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* -------- INITIAL LOAD -------- */
  useEffect(() => {
    if (hasFetched.current && page === 1) return; // 🔒 STOP DOUBLE CALL
    hasFetched.current = true;

    fetchBlogs(page);
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="max-w-7xl mx-auto py-15 px-4">

      {/* BLOG LIST */}
      {blogs.map((blog, index) => (
        <motion.div
          key={blog._id}
          className="py-13 border-t border-[#979797]"
          variants={fadeUp}
          custom={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link to={`/blogdetails/${blog.slug}`}>
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={blog.thumbnail?.url}
                alt={blog.title}
                className=" h-48 md:w-120 md:h-60 object-cover rounded-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />

              <div>
                <h1 className="text-2xl md:text-[38px] font-medium text-gray-900 hover:text-red-500 transition">
                  {blog.title}
                </h1>

                <p className="text-sm md:text-[16px] text-gray-500 mt-1">
                  {Math.ceil(
                    blog.content
                      ?.replace(/<[^>]*>/g, "")
                      .length / 500
                  )}{" "}
                  Min ·{" "}
                  {blog.published_date &&
                    new Date(blog.published_date).toLocaleDateString(
                      "en-US",
                      { month: "long", day: "numeric", year: "numeric" }
                    )}
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}

      {/* LOAD MORE */}
      {page < totalPages && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={loading}
            className="px-6 py-3 text-sm cursor-pointer font-medium border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default BlogList;
