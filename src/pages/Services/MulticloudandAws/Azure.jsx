import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const Azure = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
            Cogniitec Azure Cloud Solutions Engineered for Enterprise Performance

          </>
        }
        bullets={[
          "Enterprise Azure Engineering",
          "Secure, Scalable, Always-On Cloud Infrastructure"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "Faster Cloud Deployment", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "Reduced Cloud Spend", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Seamless Cloud Migration", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "Reliable Multi-Cloud Ops", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
          Cogniitec Advanced Azure Cloud Solutions
          </>
        }

        card1Title="Azure Cloud Architecture & Modernisation"
        card1Description="Cogniitec designs Azure architectures that enhance scalability, improve resilience, optimise workloads and migrate legacy systems into cloud-native, cost-efficient environments ready for enterprise growth."
        card1ButtonText="Learn more"

        card2Title="Azure Serverless & Microservices Development"
        card2Description="Cogniitec builds serverless applications and microservices using Azure Functions, Kubernetes Service (AKS) and API Management, enabling faster deployment, flexibility and streamlined operations."
        card2ButtonText="Learn more"

        card3Title="Azure DevOps & Automation Pipelines"
        card3Description="Cogniitec implements Azure DevOps pipelines, IaC automation, monitoring and cloud operations to accelerate deployment cycles and ensure stable, predictable cloud delivery."
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
          Key Challenges in Azure Cloud Adoption

          </>
        }

        sec1Title="Complex Migration and Architecture Constraints"
        sec1Description="Enterprises often struggle with Azure migration, workload mapping and architectural decisions. Without Azure expertise, teams face cost inefficiencies, configuration issues and performance bottlenecks."
        sec1ButtonText="View case study"

        sec2Title="Inefficient Cloud Operations & Limited Automation"
        sec2Description="Manual processes, inconsistent releases, and weak observability slow growth. Without Azure-native automation, organisations experience scaling limitations, delayed deployments, and operational inefficiencies."
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
                        },]}
        heading={
          <>
            Why Leading Enterprises Partner With Us
          </>
        }
        steps={[
          {
            number: 1,
            title: "Cloud Talent On Demand",
            description:
              "Companies hire expert Azure engineers from Cogniitec to design, optimise and manage secure, scalable and high-performance Azure cloud environments.",
          },
          {
            number: 2,
            title: "Cloud Industry Expertise",
            description:
              "Cogniitec helps healthcare, retail, education and enterprise organisations modernise systems, automate workflows, integrate applications and elevate operations through Azure-powered solutions.",
          },
          {
            number: 3,
            title: "Serving Global Cloud Teams",
            description:
              "Cogniitec’s refined Azure delivery processes support organisations across India, the UK, the USA and Australia, ensuring reliable cloud performance and consistent implementation.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default Azure;
