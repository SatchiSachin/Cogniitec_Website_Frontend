import { Helmet } from "react-helmet";
import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const SEOPage = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Best SEO Services Agency in Coimbatore | Off Page | On Page</title>
        <meta
          name="description"
          content="Cogniitec offers trending SEO services like advanced keyword research, AI-driven content optimization, On page, Off Page and technical SEO."
        />
      </Helmet>
      <HeroSection
        title={
          <>Cogniitec: Search Engineering That Builds Long-Term Visibility</>
        }
        bullets={[
          "Structured pages search engines can read",
          "Strong authority signals that improve rankings",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "AI On-Page",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Predictive Keywords",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Algorithm Insights",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Content Intelligence",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Integrated SEO Services</>}
        card1Title="On-Page SEO & Content Structuring"
        card1Description="Cogniitec, the best SEO company in India optimises the full structure of your pages and goes beyond keyword rankings and helps overall business growth. It includes SEO-friendly headings, internal links, clean up URLs, improve keyword placement, and remove duplicate content. Title tags, meta descriptions, and image optimisation are crafted in this core process to boost the click through rates. These improvements help search engines crawl your site easily and support long term traffic growth and improved rankings."
        card1ButtonText="Learn more"
        card2Title="Crawl Efficiency and Technical Performance"
        card2Description="We resolve problems that reduce ranking growth, broken links, slow user experience, uncompressed images, absent, or wrong XML sitemaps, and poor mobile performance.Being the best SEO company in India,we makes all pages clean, fast, search engine readable, and free of errors..When the search engines have a smooth crawling, they index more pages and enhance your own visibility and stronger search engine performance on all types of devices."
        card2ButtonText="Learn more"
        card3Title="Off-Page Power and Building Trust

"
        card3Description="Cogniitec assists brands to have an authoritative backlink that will create a perception of trust among the search engines.As the best SEO company in India, we work towards quality  links from reputable sources that will enhance the trust of the brand. Our stable backlink profile will help you rank higher, safeguard yourself against drops, and establish long-term, year-long credibility, as well as ensure the business is not negatively impacted by the algorithm or the sudden drop to the number 1 spot, which helps the business in the long-run."
        card3ButtonText="Learn more"
        counter1Value={120}
        counter1Label="SEO Projects Executed Across Industries"
        counter2Value={65}
        counter2Label="Average Growth in Organic Visibility"
        counter3Value={40}
        counter3Label="Increase in High-Intent Keyword Rankings"
      />

      <BusinessSection
       image={img2}
              wrapperClass="bg-[#EDE8FF]"
              tags={[
                {
                  text: "Finish Pay Run",
                  position: "top-10 right-6",
                  bgColor: "#7C3AED", 
                  textColor: "#fff",
                },
                {
                  text: "Accepted shifts",
                  position: "bottom-10 left-6",
                  bgColor: "#3B82F6", 
                  textColor: "#fff",
                  icon: "✅",
                },
              ]}
                    leftImg={img1} rightImg={img2}
        topHeading={<>Key Challenges in SEO</>}
        sec1Title="Weak Page Structure"
        sec1Description="Many websites miss essential components like proper headings, clean content layout, optimised images, and correct title tags and meta descriptions. Poorly structured pages make it hard for search engines to identify what the page is about, lowering visibility and low rankings."
        sec1ButtonText="Read the Case Study 
"
        sec2Title="Low Domain Trust"
        sec2Description="Without strong high quality backlinks and consistent brand references, websites struggle to rank in competitive searches. This limits traffic growth and reduces ranking potential,traffic growth and long-term performance."
        sec2ButtonText="Read the Case Study "
      />

      <GetStartedSection
       image={img1}
        tags={[
          {
            text: "Easy of integration",
            position: "top-6 left-6",
            bgColor: "#22C55E", 
            textColor: "#fff",
          },
          {
            text: "Relocation contracts",
            position: "bottom-6 right-6",
            bgColor: "#FACC15", 
            textColor: "#000",
          },
        ]}
        heading={<>Why Businesses Prefer Cogniitec’s SEO Intelligence</>}
        steps={[
          {
            number: 1,
            title: "Beyond Rankings Business Growth",
            description:
              "Cogniitec partners with data-first, technically capable, and revenue-oriented specialists in their SEO engineering, collaborating with companies. We not only rank on keywords, but actually make our systems much stronger in terms of visibility in the market as a whole. We can assist the brands to reach out to the audiences that they could not reach before and this is through semantic clustering, crawl-depth optimisation, schema automation and authority mapping.",
          },
          {
            number: 2,
            title: "SEO Solutions Across Industries",
            description:
              "Enterprise brands, healthcare, retail, real estate, and education connect with the Cogniitec, the best SEO company in India since we provide customised SEO frameworks.Each of the strategies makes visibility, the depth of keys, relevance to buyers, and conversion opportunities stronger, and everything is arranged with the accuracy that should be viewed as the top SEO company in India and supported by industry-specific optimisation models.",
          },
          {
            number: 3,
            title: "Global SEO Delivery",
            description:
              "Cogniitec helps customers in India, the UK, USA and Australia with standardized, clear and entirely quantifiable SEO implementation.Our worldwide delivery framework guarantees single reporting, predictable organic development, measurable content frameworks as well as technically potent global SEO that adjusts to multilingual, multi-domain and cross-national search behaviour.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default SEOPage;
