import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlogBanner from "./DetailsBlogs/Left/BlogBanner";
import BlogSidebar from "./DetailsBlogs/Right/BlogSidebar";
import AiArticleResult from "../Article/AiArticleResult";
import RelatedArticlesSlider from "../Article/RelatedArticlesSlider";
import Authorcard from "./DetailsBlogs/Right/Authorcard";
import ContactModal from "../Model/ContactModal";

const BlogsDetails = () => {
  const { slug } = useParams();
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const [open, setOpen] = useState(false);
  const [blog, setBlog] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // NEW: State for active sidebar item
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_URL}/blog/details?slug=${slug}`);
        const text = await res.text();
        let result = JSON.parse(text);

        if (res.ok && result.success) {
          setBlog(result.main_blog_data);
          setRelatedArticles(result.related_blog_data || []);
          
          // Set the first subtitle as active by default if it exists
          if (result.main_blog_data.sub_title?.length > 0) {
            setActiveTitle(result.main_blog_data.sub_title[0]);
          }
        }
      } catch (error) {
        console.error("Blog Details Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug, API_URL]);

  // NEW: Function to handle scroll and active state
  const handleTitleClick = (title) => {
    setActiveTitle(title);
    // Create ID: "My Heading" -> "my-heading"
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 100; // Space for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <div className="text-center py-20 text-gray-500">Loading blog...</div>;
  if (!blog) return <div className="text-center py-20 text-red-500">Blog not found</div>;

  return (
    <>
      <div className="flex flex-col md:flex-row w-full gap-6 bg-white p-8 rounded-sm mt-10">
        <div className="w-full md:w-[65%] xl:w-[75%] flex flex-col gap-1">
          <BlogBanner blog={blog} />
          <AiArticleResult blog={blog} />
          {relatedArticles.length > 0 && <RelatedArticlesSlider articles={relatedArticles} />}
        </div>

        <div className="w-full lg:w-[30%] xl:w-[25%] pb-8 pt-6 lg:mt-10">
          <Authorcard onOpen={() => setOpen(true)} />
          <div className="sticky top-24 space-y-8 pt-5">
            {/* Pass state and function down */}
            <BlogSidebar 
              subTitles={blog?.sub_title || []} 
              activeTitle={activeTitle}
              onTitleClick={handleTitleClick}
            />
          </div>
        </div>
      </div>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default BlogsDetails;
