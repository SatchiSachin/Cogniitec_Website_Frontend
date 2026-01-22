import BusinessSection from "../../components/services/BusinessSection";
import ClientsMarquee from "../../components/services/ClientMarquee";
import GetStartedSection from "../../components/services/GetStartedSection";
import HeroSection from "../../components/services/HeroSerivces";
import ServiceSection from "../../components/services/ServiceSection";
import img1 from "../../assets/Images/services/busi1 (1).png";
import img2 from "../../assets/Images/services/busi2.png";

const AgenticAi = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
            Cogniitec Agentic AI Solutions Engineered for Autonomous Performance
          </>
        }
        bullets={[
          "Enterprise-Grade Agentic AI Engineering",
          "High-Performance Autonomous Workflow Systems"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "AI-Powered Software Delivery", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "On-Demand Support", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Optimised Cost Models", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "Custom-Built Systems", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
            Cogniitec Advanced Agentic AI Solutions
          </>
        }

        card1Title="Workflow Automation Agents"
        card1Description="Cogniitec develops agentic AI and focuses on analysing workflows, identifying the limits of autonomy and iterative controlled reasoning loops. The agentic development approach allows us to validate the tools we use, the safety conditions we have put in place when utilising those tools, and how reliably our tools will perform during execution. We offer structured agentic AI development cycles to ensure all automation agents behave as expected and incrementally as scales grow."
        card1ButtonText="Learn more"

        card2Title="Knowledge & Decision Intelligence Agents"
        card2Description="To enhance the quality of our outputs and ensure traceability, we have aligned our enterprise knowledge with our governed reasoning frameworks. At Cogniitec, we continually evaluate how an AI makes decisions using our own expertise in developing disciplined Agentic AI practices, as well as providing Agentic AI services in India to confirm that we create agents that provide dependable results by providing agents with a consistent, verified output."
        card2ButtonText="Learn more"

        card3Title="Autonomous Content & Creative Agents"
        card3Description="The Cogniitec team focuses on identifying brand guidelines, assessing multiple formats of creative content produced through our proprietary format generation processes, as well as continually improving our automated processes for planning. Using controlled pipelines, our team has developed stable operations for generating essential creative assets. Deployments into commercially available systems improve the consistency, reliability, and governance of our agentic AI-based creative asset production workflows."
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
            Key Challenges in Agentic AI Adoption
          </>
        }

        sec1Title="Limited System Connectivity Restricting Agent Autonomy"
        sec1Description="In order for Agentic AI to function effectively, it is essential that organizations have unified access to their enterprise tools, data, and applications. If a company's systems are not connected, the most advanced Agentic AI Solution can only achieve a small part of the complete execution of a workflow with no way to coordinate the tasks or maintain reliable autonomous capabilities."
        sec1ButtonText="View case study"

        sec2Title="Insufficient Context for Autonomous Decision Execution"
        sec2Description="Agentic AI can only operate effectively if it is paired with well-defined operational knowledge that is available in a structured way. The inability of agents to reason, adapt, and produce accurate real-time decisions emphasizes the importance of a strong agentic AI service provider in India to provide the base for contextual data."
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
            Why Leading Enterprises Partner With Us
          </>
        }
        steps={[
          {
            number: 1,
            title: "On-Demand Talent for AI",
            description:
              "To support the creation of autonomous systems that plan, reason and execute multi-step workflows, companies collaborate with Cogniitec in order to leverage the support of a team of experts who specialize in developing agentic AI solutions. As an expert in agentic AI development, we provide companies with the engineering capabilities needed to deliver high-performance agentic AI solutions.",
          },
          {
            number: 2,
            title: "Industry Experience",
            description:
              "Cogniitec works across many sectors, including healthcare, retail, education and enterprises, by providing agentic AI solutions that enhance process automation, operational efficiency, engagement, and data-driven decision making, through implementation of mature agentic AI development methodologies. Each agentic AI solution offered by Cogniitec is aligned to unique industry requirements.",
          },
          {
            number: 3,
            title: "Global Presence",
            description:
              "Cogniitec is an industry leader in providing high-quality, technology-based service, and has become a trusted partner for developing high-quality, technology-based systems. Cogniitec provides high-quality service to large enterprises in India, UK, USA, and Australia through its sophisticated engineering workflows that provide consistency across geographies, scalability, and reliability.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default AgenticAi;
