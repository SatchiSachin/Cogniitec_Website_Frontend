import { Helmet } from "react-helmet";
import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const SMM = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Social Media Marketing | SMM | Meta Ads | LinkedIn | YouTube Ads</title>
        <meta
          name="description"
          content="Cogniitec offers top-trending Social Media Marketing services, including influencer collaborations and viral content creation. Contact now."
        />
      </Helmet>
      <HeroSection
        title={
          <>
            Cogniitec: High-Engagement and Real Conversion Social Media
            Marketing
          </>
        }
        bullets={[
          "Native Content Execution Platform.",
          "Precise Campaigns With ROI.",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "AI-Driven SMM Precision",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Audience Prediction",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Auto Scheduling",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Engagement Insights",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Integrated Social Media Solutions of Cogniitec</>}
        card1Title="Interaction Flow/Engagement Strategy"
        card1Description="Cogniitec,the best SMM service company in India maps the audience behaviour, posting windows and interaction triggers to design an expected engagement cycle. It involves a process of structured comment management, story responses, polls, question and answer cycles, and responses to the DMs, which are guaranteed to guarantee stable engagement growth and better audience retention.
"
        card1ButtonText="Learn more"
        card2Title=" Native Content Development Platform
"
        card2Description="Each platform requires various content behaviour format, layout, timing and retention style. We create reels, carousels, non-movable posts, micro-copy, thumbnails, and professional creatives and optimise them to the algorithm of a specific platform. This enhances watch time, increased visibility, and the cohesive brand presence in Instagram, LinkedIn, Facebook, YouTube, and X. Being the best SMM service company in India, our result is crisp, well-formatted, and quality output."
        card2ButtonText="Learn more"
        card3Title=" Paid Campaigns and Optimization of the performance

"
        card3Description="This campaign process is engineering-centric and applies CTR, CPC, CPM, frequency, audience behaviour, link actions, and conversion mapping to fine-tune performance with every cycle.These insights feed directly into our testing loops — allowing us to recalibrate creatives, targeting layers, bidding models, and budget distribution with high accuracy.
         This structured optimisation approach is why businesses continue to rely on Cogniitec as the best SMM service company in India.
"
        card3ButtonText="Learn more"
        counter1Value={90}
        counter1Label="Brand Social Profiles Strategically Managed"
        counter2Value={52}
        counter2Label="Improvement in Follower Quality"
        counter3Value={35}
        counter3Label="Reduction in Non-Performing Content"
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
        topHeading={<>Key Challenges in SMM </>}
        sec1Title="Content Fatigue"
        sec1Description="Brands are active on a regular basis but lack behavioural insight - low retention and low visibility.Even good content cannot deliver without organized interaction."
        sec1ButtonText="Read the Case Study 
"
        sec2Title="Inefficient Campaign Spend"
        sec2Description="Wrong targeting, un-testing, and conversion tracking lead to a waste of ad budgets.
 This results in the uncertainty of outcomes and low ROI."
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
        heading={<>Why Leading Industries Trust Cogniitec’s SMM Expertise</>}
        steps={[
          {
            number: 1,
            title: "platform-Native, behaviour-Led SMM Execution",
            description:
              "Firms partner with Cogniitec to co-operate with experts who design SMM techniques based on a platform-native logic, behavioural understanding, and data-driven engagement models.Every piece of content is optimised by our teams on the basis of actual user action, scroll behaviour, watch duration, share indicators and clusters of interests.Behaviour-focused application makes brands rely on Cogniitec, the best SMM service company in India to create social ecosystems that maintain reach, relevance, and strength of community in all the prominent platforms.",
          },
          {
            number: 2,
            title: "Industry-based SMM Strategies",
            description:
              "Cogniitec develops sector-specific social media systems that matches audience expectations of the real world on healthcare (credibility), retail (visual persuasion), real estate (trust-led storytelling), education (value-driven content), SaaS (problem-solution loops), or enterprise (authority messaging), we tailor campaigns to it.We have frameworks that guarantee that each brand gets the appropriate combination of engagement, reach, conversions, and retention -just as their industry requires.",
          },
          {
            number: 3,
            title: "Global Social Media Delivery With Predictable Outcomes",
            description:
              "Cogniitec helps companies in India, in the UK, in the USA, and in Australia with the consistent and measurable execution of SMM, which incorporates the content, performance metrics, and analysis of audience behaviour.To ensure anticipated growth in regions, our workflows of global delivery integrate creative engineering, engagement mapping, campaign iteration, and analytics-driven optimisation.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default SMM;
