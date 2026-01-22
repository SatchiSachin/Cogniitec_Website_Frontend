import React from "react";
import { Helmet } from "react-helmet";
import BlogHero from "../../components/blog/BlogHero";
import BlogList from "../../components/blog/BlogList";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>
          Digital Marketing, AI & Tech Insights India | Cogniitec
        </title>
        <meta
          name="description"
          content="Stay updated with Cogniitec's blog. Expert analysis on SEO trends, AI automation, and software engineering from India's leading digital strategists."
        />
      </Helmet>
      blogs
      <BlogHero />
      <BlogList />
    </div>
  );
};

export default Blog;
