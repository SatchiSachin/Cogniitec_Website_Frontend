import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const AWS = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
          Cogniitec AWS Cloud Solutions Engineered for Scalability & Reliability
          </>
        }
        bullets={[
          "Advanced AWS Engineering",
          "Secure, Scalable Cloud Infrastructure"
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
           Cogniitec Advanced AWS Cloud Solutions
          </>
        }

        card1Title="AWS Cloud Architecture & Modernisation"
        card1Description="Cogniitec designs and builds AWS architectures that enhance scalability, improve resilience, optimise workloads, and modernise legacy systems for cost-efficient, cloud-native performance."
        card1ButtonText="Learn more"

        card2Title="Serverless & Microservices Development"
        card2Description="Cogniitec creates serverless applications and microservice ecosystems powered by AWS Lambda, API Gateway and container services, enabling faster deployment, improved flexibility and reduced operational overhead."
        card2ButtonText="Learn more"

        card3Title="AWS DevOps & Automation Pipelines"
        card3Description="Cogniitec implements CI/CD pipelines, infrastructure automation, monitoring and cloud operations using AWS-native tools to streamline deployment cycles and ensure reliable cloud delivery."
        card3ButtonText="Learn more"

        counter1Value={30}
        counter1Label="Enterprise AWS Delivered"

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
            Key Challenges in AWS Cloud Adoption
          </>
        }

        sec1Title="Complexity in Cloud Migration & Architecture Design"
        sec1Description="Many organisations struggle with cloud migration, cost management, and architectural decisions. Without AWS expertise, performance gaps, downtime risks and inefficient deployments slow cloud success."
        sec1ButtonText="View case study"

        sec2Title="Inefficient Cloud Operations & Limited Automation"
        sec2Description="Teams often face manual processes, inconsistent deployments and poor observability. Without AWS-native automation, businesses experience delays, unexpected outages and scaling limitations."
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
              "Companies hire expert AWS engineers from Cogniitec to architect, optimise and manage high-performance cloud environments rebuilt for speed, scalability and security.",
          },
          {
            number: 2,
            title: "Cloud Industry Expertise",
            description:
              "Cogniitec supports healthcare, retail, education and enterprise organisations by deploying AWS cloud solutions for modernisation, automation, integration, data access and operational efficiency.",
          },
          {
            number: 3,
            title: " Serving Global Cloud Teams",
            description:
              "Cogniitec’s refined AWS engineering workflows support organisations across India, the UK, the USA and Australia, ensuring consistent cloud delivery and reliable global performance",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default AWS;
