import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const PaidAds = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={<>Cogniitec -The Precision-Driven Paid Ads Strategy</>}
        bullets={["Hyper-intent Targeting", "ROI-First Campaign"]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "Automated Campaign Bid Optimisation",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Real-Time Conversion Pattern Analysis",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "AI-Led Budget Allocation",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Cross-Channel Funnel Insights",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Cogniitec ROI based Paid Ads Solutions</>}
        card1Title="AI-Led Bidding Strategies"
        card1Description="Paid ads require more than budgets — they require engineered auction intelligence. The AI based bidding systems of Cogniitec use live auctions behaviour, rival bid velocity, search volume movement, and user micro-intent to place your brand at the precise point of conversions. This level of engineering makes brands rely on Cogniitec as the best paid ads service provider in India, and our customers are best satisfied with high quality paid ads implementation and quantifiable efficiency."
        card1ButtonText="Learn more"
        card2Title="Multi-Network Integration Ads"
        card2Description=" Cogniitec integrates Google Search, Display, YouTube Ads, Meta Ads,Linkedin into a single ecosystem, with each platform complementing the others. This cross-platform continuity also enhances brand recognition and cost-effectiveness. International enterprises widely recognise Cogniitec as a dominant paid ads service provider in India, trusted for its specialised pay per click in digital marketing workflows, automated intent-scoring systems, and cross-platform signal tracking."
        card2ButtonText="Learn more"
        card3Title=" Action-Based Conversion Architecture"
        card3Description=" Cogniitec creates event tracked, data mapped, funnel aligned structures that connect keyword intent to landing-page behaviour and CRM results. Scroll depth, button taps, form fills, repeat sessions and multi-step conversions are all monitored.This quantifiable performance makes Cogniitec an enhanced paid ads provider of services in India, particularly among those companies, which rely on performance-based funnels and systematized pay per click in digital marketing processes."
        card3ButtonText="Learn more"
        counter1Value={150}
        counter1Label="Campaigns Successfully Planned & Executed"
        counter2Value={38}
        counter2Label="Increase in ROAS Across Platforms"
        counter3Value={28}
        counter3Label="Reduction in Ad Spend Waste"
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
        topHeading={<>Key Challenges in Paid Ads</>}
        sec1Title="Budget Drain"
        sec1Description="Most ad budgets end up evaporating due to poor keyword matching, irrelevant placements, bad bid logic and the lack of negative keywords. CPC rises, conversion rates fall, and companies have no idea where the money is wasted, which is a frequent problem until the time of professional paid ads management.
"
        sec1ButtonText="Read the Case Study 
"
        sec2Title="Zero Funnel Visibility"
        sec2Description="In the absence of dashboards, event monitoring, pixel precision, and CRM connectivity, companies can not define what audiences convert and which creatives do not. This transparency deficiency contributes to the making of poor decisions, increasing the cost of acquisitions, and paying ads irregularly."
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
        heading={
          <>Why Growth-Centered Brands Choose Cogniitec Paid Ads Expertise</>
        }
        steps={[
          {
            number: 1,
            title: "Performance Driven Paid Ads Talent",
            description:
              "Companies collaborate with Cogniitec in order to reach experts that can run paid advertisements based on data-first, metric-driven, ROI-oriented engineering. It is because of our knowledge in the bidding logic real-time, multi-network segmentation, and conversion-mapped funnel that companies view us as a reliable paid-ad service provider in India with good fundamentals in pay per click in digital marketing.",
          },
          {
            number: 2,
            title: "Paid Ads Solutions in any Industry",
            description:
              "Cogniitec provides the custom-made paid ads model for various sectors- healthcare, retail, real estate, education, SaaS, and enterprise brands may become more visible, acquire more qualified clicks, buying intentions, lead depth, and efficiency of acquisition. Companies choose us because we provide the quality as the best paid ads service provider in India that are highly competitive and with high-intent buyers.",
          },
          {
            number: 3,
            title: "Global Paid Ads Delivery",
            description:
              "Cogniitec is a leading paid ads service provider in India  that assists customers in India, the UK, the USA, and Australia on the execution of paid ads in a consistent, transparent, and measurable manner. The global delivery strategy has helped us to have a unified reporting, predictable ROAS, and extremely efficient pay per clicks in online marketing activities.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default PaidAds;
