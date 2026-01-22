import { Helmet } from "react-helmet";
import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const DigitalMarketing = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>
          Best Digital Marketing Agency in Coimbatore | SEO | Cogniitec
        </title>
        <meta
          name="description"
          content="Cogniitec offers a range of leading digital marketing services, including SEO, strategic social media management, and content marketing based on data insights."
        />
      </Helmet>
      <HeroSection
        title={<>Cogniitec – A Leading Digital Marketing Company in India</>}
        bullets={[
          "Enterprise-grade digital execution",
          "Trusted for ROI-focused marketing",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "AI-Driven SEO Recommendations",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Predictive Targeting for Ads",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Automated Campaign Optimisation",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Real-Time Trend Insights",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Integrated Digital Marketing Solutions</>}
        card1Title="SMM (Social Media Marketing)"
        card1Description="As a top digital marketing agency, our SMM service focuses on building brand visibility, engagement, and community across platforms like Instagram, Facebook, LinkedIn, and YouTube. Through content creation, campaign planning, community management, and data-led strategies, we deliver powerful services in digital marketing that help brands grow consistently. Businesses rely on us as a trusted digital marketing and advertising agency to strengthen their online presence and connect with audiences more effectively."
        card1ButtonText="Learn more"
        card2Title="SEO (SEO, AI SEO & AEO)"
        card2Description="Our SEO framework combines traditional SEO, AI-powered SEO, and AEO to enhance search visibility across both search engines and AI-driven platforms. As a top digital marketing agency, we offer advanced services in digital marketing that include technical SEO, on-page optimisation, semantic structuring, content depth enhancement, and AI-driven insights. Brands choose us as their digital marketing and advertising agency to achieve long-term, multi-channel visibility and stronger search performance."
        card2ButtonText="Learn more"
        card3Title="Performance Marketing"
        card3Description="Our performance marketing solutions drive measurable growth through ROI-focused advertising on Google Ads, Meta Ads, and other paid platforms. As a top digital marketing agency, we deliver strategic services in digital marketing such as lead generation, sales campaigns, retargeting, funnel optimisation, and analytics. Companies partner with us as their digital marketing and advertising agency to maximise conversions, reduce acquisition costs, and scale their revenue effectively."
        card3ButtonText="Learn more"
        counter1Value={80}
        counter1Label="Brand Campaigns Successfully Managed"
        counter2Value={65}
        counter2Label="Average Increase in Organic Visibility"
        counter3Value={28}
        counter3Label="Reduction in Ad Spend Waste Through Optimisation"
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
        topHeading={<>Core Digital Marketing Challenges</>}
        sec1Title="Rising Acquisition Costs & AI-Driven Competition"
        sec1Description="As platforms rely more on AI for bidding, targeting, and personalised ad delivery, cost-per-click (CPC) continues to increase. Privacy restrictions and intense competition make it harder for brands to maintain ROI. Without strong digital marketing services from a leading digital marketing agency, businesses struggle to achieve stable visibility, efficient acquisition, and sustainable profitability in paid media environments."
        sec1ButtonText="Read the Case Study"
        sec2Title="Weak Organic Visibility in an AI-Evolving Landscape"
        sec2Description="Search engines now prioritise EEAT signals, evaluate AI-generated content more strictly, and expect higher accuracy in matching user intent. Outdated SEO practices can result in rapid ranking declines. As a digital advertising agency, Cogniitec strengthens organic performance through modern optimisation frameworks that integrate AI insights with every element of our digital marketing services, ensuring long-term, competitive search visibility."
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
        heading={<>Why Companies Prefer Cogniitec’s Marketing Expertise</>}
        steps={[
          {
            number: 1,
            title: "Performance-Driven Marketing Talent",
            description:
              "Businesses hire SEO specialists, SMM specialists, and performance marketers from Cogniitec to run data-focused, AI-enabled, and ROI-driven campaigns. With deep experience as a leading digital marketing agency, our team helps brands scale faster and make smarter decisions through performance-first execution.",
          },
          {
            number: 2,
            title: "Marketing Solutions Across Industries",
            description:
              "Cogniitec offers strategic digital marketing services that support healthcare, retail, education, and enterprise sectors in improving visibility, engagement, lead quality, conversion rates, and long-term customer loyalty. Each industry benefits from clear, results-driven marketing frameworks designed for measurable growth.",
          },
          {
            number: 3,
            title: " Global Presence",
            description:
              "As a trusted digital advertising agency, Cogniitec works with clients across India, the UK, USA, and Australia, delivering consistent and scalable digital marketing services across regions. Our global approach ensures unified reporting, strong brand alignment, and performance-focused execution in every market.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default DigitalMarketing;
