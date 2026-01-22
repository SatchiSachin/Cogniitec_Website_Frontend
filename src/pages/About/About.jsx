import React from "react";
import { Helmet } from "react-helmet";
import AboutUsVideoSection from "../../components/about/AboutUsVideoSection";
import OverviewSectionAbout from "../../components/about/OverviewSectionAbout";
import HighlightsAbout from "../../components/about/HighlightsAbout";
import WhatWeDo from "../../components/about/WhatWeDo";
import Group_Photo from "../../assets/Images/home/group-pic.jpg";
import BlogsCard from "../../components/about/BlogsCard";

const About = () => {
  return (
    <div className="mt-10">
      <Helmet>
        <title>
          India's Premier Digital Innovation Partner | Cogniitec 
        </title>
        <meta
          name="description"
          content="Discover Cogniitec’s mission to drive global growth. We are a leading Indian tech firm specializing in bridging the gap between innovation and scale."
        />
      </Helmet>

      <AboutUsVideoSection />
      <OverviewSectionAbout />
      <HighlightsAbout />
      <WhatWeDo />
      <div className="w-full overflow-hidden">
        <img
          src={Group_Photo}
          alt="Group"
          className="w-full h-60 object-cover sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
        />
      </div>
      {/* <BlogsCard /> */}
    </div>
  );
};

export default About;
