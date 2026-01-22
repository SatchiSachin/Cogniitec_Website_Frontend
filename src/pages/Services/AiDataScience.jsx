import BusinessSection from "../../components/services/BusinessSection";
import ClientsMarquee from "../../components/services/ClientMarquee";
import GetStartedSection from "../../components/services/GetStartedSection";
import HeroSection from "../../components/services/HeroSerivces";
import ServiceSection from "../../components/services/ServiceSection";
import img1 from "../../assets/Images/services/busi1 (1).png";
import img2 from "../../assets/Images/services/busi2.png";

const AiDataScience = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
            Cogniitec Engineering High-Impact AI Development Services for Modern Enterprises
          </>
        }
        bullets={[
          "Accurate models for real business environments",
          "Automation designed for scale, security, and long-term reliability"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "End-to-End AI Development Services", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "Agentic AI for Automation", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Advanced ML & Predictive Systems", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "Cloud-Ready AI Deployment", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
            Enterprise-Ready AI Solutions from India’s Trusted Experts
          </>
        }

        card1Title="Generative AI Solutions"
        card1Description="Cogniitec offers the Gen AI Development Service for creating domain-focused Generative AI products, as well as providing secure and compliant deployment with an Enterprise Governance Model through a Problem-First, Engineering-Led Process to develop validated, compliant and workflow-integrated solutions that are aligned with measurable results."
        card1ButtonText="Learn more"

        card2Title="Data Science & Machine Learning"
        card2Description="Cogniitec develops AI solutions in a way that begins with engineering-based data science and machine learning. As a leading AI Development Company in India, it identifies the problem to be solved, engineers clean and reliable data pipelines, experiments with various model architectures, tests the model in a real-world scenario, and deploys production-ready, scalable ML systems that can easily connect with enterprise processes."
        card2ButtonText="Learn more"

        card3Title="Agentic AI Systems"
        card3Description="Cogniitec designs Agentic AI  systems that autonomously plan, reason, and accomplish multi-step tasks. These AI agents seamlessly integrate with other APIs, business tools, and internal applications, thereby automating end-to-end applications, which reflects the strength and mature development of our Cogniitec Agentic AI systems, as we can now scale automation opportunities beyond the traditional rules-based workflows."
        card3ButtonText="Learn more"

        counter1Value={30}
        counter1Label="Enterprise AI Models Delivered"

        counter2Value={98}
        counter2Label="Accuracy Achieved in Production"

        counter3Value={25}
        counter3Label="Average Operational Cost Reduction"
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
        topHeading={
          <>
            Challenges Businesses Face When Adopting AI
          </>
        }

        sec1Title="Limited Data Readiness & AI Skills"
        sec1Description="Many organisations lack the data readiness, engineering capability, and internal processes required to scale AI. Therefore, only 26% of companies will continue with their pilot-stage experiments and need help developing structured implementation processes. However, AI development companies in India can provide a bridge for companies that have the talent and implementation problems."
        sec1ButtonText="View case study"

        sec2Title="Data Quality & Governance Barriers"
        sec2Description="Poor data governance, inconsistent data collection methods, and a lack of confidence in data quality are significant barriers to the successful adoption of AI. In fact, 45% of organisations cite data quality as the most significant challenge to implementing AI, but many experienced AI development organisations are able to assist by offering better data governance and enhanced processes."
        sec2ButtonText="View case study"
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
          <>
            Expertise That Strengthens Every AI Development Project  
          </>
        }
        steps={[
          {
            number: 1,
            title: "AI Talent On Demand",
            description:
              "Cogniitec does staff augmentation for companies seeking to hire data scientists, AI engineers, and ML specialists as part of their teams. We provide services throughout all phases of the AI process, including data preparation, feature engineering, model training, deployment and optimization, so that organizations can be assured that they are developing effective, deployable AI solutions which will produce tangible business outcomes.",
          },
          {
            number: 2,
            title: "Industry-Focused AI Implementation",
            description:
              "Through its AI solutions, Cogniitec provides organisations in the BFSI, Healthcare & Life Sciences, E-commerce & Retail, Manufacturing & Industrial Automation, Logistics, Transport & Supply Chain, and enterprise operations markets with automation, forecasting, simulation, and decision support capabilities. Our extensive domain knowledge allows Cogniitec to serve as an experienced and trusted partner for AI development in India.",
          },
          {
            number: 3,
            title: "Global Presence",
            description:
              "Cogniitec delivers steady engineering capacity and predictable delivery cycles to organisations worldwide, serving clients across India, the USA, the UK, and Australia as a trusted AI Development Company.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default AiDataScience;
