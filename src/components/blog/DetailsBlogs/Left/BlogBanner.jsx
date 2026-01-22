import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

// import BlogHeader1 from "../assets/Images/blog/BlogHeader1.jpg"; // update your correct path

const BlogBanner = ({ blog }) => {
  if (!blog) return null;

  // Helper to inject IDs into H1, H2, H3 tags
  const injectIdsIntoHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headings.forEach((heading) => {
      // Create a slug: "Hello World" -> "hello-world"
      const id = heading.textContent
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
      heading.setAttribute("id", id);
    });

    return doc.body.innerHTML;
  };

  const cleanHtml = DOMPurify.sanitize(injectIdsIntoHtml(blog.content || ""));

  return (
    <div className="w-full overflow-hidden bg-white p-4 pb-0">
      {/* ... Banner & Breadcrumb code ... */}
      {/* Breadcrumb */}
      <motion.div
        className="px-5 py-3 text-sm text-gray-400 flex gap-2 font-poppins"
        // variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <Link to="/" className="hover:text-black">
          Home
        </Link>

        &gt;

        <Link to="/blog" className="hover:text-black">
          Blog
        </Link>

        &gt;

        <span className="text-red-500 font-medium">You are here</span>
      </motion.div>

      {/* Banner Image */}
      <motion.div
        className="relative w-full h-[260px] md:h-[380px] lg:h-[570px]"
        // variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <img
          src={blog.thumbnail?.url || BlogHeader1}
          alt={blog.title}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />

        {/* Content */}
        <div className="absolute bottom-5 left-5 md:left-10 text-white">
          <motion.div
            className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
            // variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {blog.service_name}
          </motion.div>

          <motion.h2
            className="mt-3 text-xl md:text-2xl lg:text-4xl font-semibold max-w-3xl"
            // variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {blog.title}
          </motion.h2>

          <motion.p
            className="mt-2 text-sm opacity-80"
            // variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {blog.published_date &&
              new Date(blog.published_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
            • 10 min read
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto py-8 overflow-x-auto">
        <motion.div
          className="prose max-w-none text-gray-700 
            prose-h1:scroll-mt-28 prose-h2:scroll-mt-28 prose-h3:scroll-mt-28" 
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
      </div>
    </div>
  );
};
export default BlogBanner;
