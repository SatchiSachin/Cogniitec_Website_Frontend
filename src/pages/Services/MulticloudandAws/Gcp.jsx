import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const GCP = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
           Cogniitec GCP Cloud Solutions Engineered for High Performance
          </>
        }
        bullets={[
          "GCP Cloud Expertise",
          "Scalable, Reliable Multi-Cloud Infrastructure"
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
            Cogniitec Advanced GCP Cloud Solution
          </>
        }

        card1Title="GCP Cloud Architecture & Modernisation"
        card1Description="Cogniitec designs and modernises GCP-based architectures to enhance scalability, improve resilience, optimise workloads, and migrate legacy systems into efficient, cloud-native environments."
        card1ButtonText="Learn more"

        card2Title="GCP Serverless & Microservices Development"
        card2Description="Cogniitec develops microservices and serverless applications using Cloud Run, Cloud Functions, and API Gateway, enabling fast deployments, improved flexibility, and reduced operational burden."
        card2ButtonText="Learn more"

        card3Title="GCP DevOps & Automation Pipelines"
        card3Description="Cogniitec implements CI/CD pipelines, automated provisioning, monitoring, and cloud operations across GCP’s native tools, ensuring fast releases and stable cloud performance."
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
           Key Challenges in GCP Cloud Adoption

          </>
        }

        sec1Title=" Complex Migration and Architecture Decisions"
        sec1Description="Organisations often struggle with GCP migration, cost control, and architecture design. Without GCP expertise, businesses encounter performance issues, downtime risks, and inefficient deployments."
        sec1ButtonText="View case study"

        sec2Title="Inefficient Cloud Management & Limited Automation"
        sec2Description="Teams face inconsistent deployments, manual configurations, and weak observability. Without GCP-native automation, organisations experience scaling limitations, slower delivery and unreliable cloud operations."
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
              "Companies hire expert GCP cloud engineers from Cogniitec to architect, optimise, and manage scalable, secure, and high-performance cloud environments.",
          },
          {
            number: 2,
            title: "Cloud Industry Expertise",
            description:
              "Cogniitec supports healthcare, retail, education, and enterprise organisations by deploying GCP-powered solutions for modernisation, automation, data access, integration, and digital transformation.",
          },
          {
            number: 3,
            title: "Serving Global Cloud Teams",
            description:
              "Cogniitec’s refined GCP engineering workflows support enterprises across India, the UK, the USA, and Australia, ensuring consistent delivery and reliable cloud performance",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default GCP;
