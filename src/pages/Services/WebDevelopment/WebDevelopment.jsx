import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const WebDevelopment = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
           Cogniitec Engineering High-Performance 
Web App Development Services 
for Modern Enterprises


          </>
        }
        bullets={[
          "Enterprise-grade security and scalability",
          "Built for fast, reliable, long-term performance"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "Custom Web Apps for Every Industry", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "End-to-End Web Application Development", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Cloud-Native Architecture & Scalability", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "High-Performance Frontend & Backend Engineering", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
            Enterprise-Grade Web App Development Services
          </>
        }

        card1Title="Custom Web Application Development"
        card1Description=" At Cogniitec, we take your unique business processes and operational needs into consideration to build custom web applications. Whether you need a secure, high-performance customer portal, workflow automation engine, or enterprise dashboard, we will design and create a solution that meets your needs by using scalable technologies.
To ensure our web applications are easy to maintain and ready for the future, our engineering teams utilize a combination of cloud-native architectures, modular components, and rich API ecosystems."
        card1ButtonText="Learn more"

        card2Title="Product Engineering & Full-Stack Development"
        card2Description="Using cutting-edge web development technologies such as React, Vue, Angular, Node.js, Laravel, Python, and Java, we deliver custom full-stack web applications for our clients.
Our goal is to create seamless user-interface experiences, powerful backend logic, and real-time functionality that can handle high-volume traffic for large enterprise clients"
        card2ButtonText="Learn more"

        card3Title="Cloud-Ready Web Platforms"
        card3Description="Using industry best practices for DevOps and API-first development, we build web applications optimised for deployment in the Cloud on AWS, Azure, or Google Cloud.
Our use of containerisation and microservices in building cloud-native applications allows us to simplify scaling requirements, reduce infrastructure costs, and improve overall reliability."
        card3ButtonText="Learn more"

        counter1Value={40}
        counter1Label="Enterprise Web Applications Delivered"

        counter2Value={99.9}
        counter2Label=" Uptime Across Cloud Deployments"

        counter3Value={50}
        counter3Label=" Faster Time-to-Market with Modular Architecture
"
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
         Challenges Enterprises Face
with Web Application Development


          </>
        }

        sec1Title="Performance & Scalability Bottlenecks"
        sec1Description="Many Enterprise Applications are not only slow to process but also have scaling problems & lack of performance Optimization Features. Cogniitec can solve these Problems by implementing Microservice Architectures, Cache Layers, and optimizing the Frontend for Maximum Scalability during Peak Usage Periods to Provide Smoother Delivery Across All Levels of Traffic."
        sec1ButtonText="Unpredictable cloud costs"

        sec2Title="Complex Integrations & Legacy Systems"
        sec2Description="Enterprises operate On Old Legacy Systems, thus making it Difficult To Integrate (and modernize). Cogniitec provides API-based integrations /API Technology Integration and Provides Help with Data Migration and Connecting Different Legacy Systems."
        sec2ButtonText="Automation improves control"
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
           Why Companies Choose 
Cogniitec for Web App Development
          </>
        }
        steps={[
          {
            number: 1,
            title: " Engineering Depth Across Full Technology Stack",
            description:
              "Organisations hire Cogniitec web app developers to design mission-critical applications using up-to-date technology in both Front-End/Web and back-end Development. Full-stack engineers, solution architects, and DevOps specialists work together to create reliable, adaptable software for enterprise-level users",
          },
          {
            number: 2,
            title: "Domain-Focused Web Solutions",
            description:
              "Cogniitec develops interactive web applications for a variety of industries - such as healthcare and telemedicine, retail and eCommerce, financial institutions, educational technology and learning management systems, business process automation and logistics, and workforce management systems each being built with Analytics compliance, Performance, Workflow Relevance, etc.",
          },
          {
            number: 3,
            title: "Global Presence",
            description:
              "Cogniitec's Engineering Teams are located in India, the US, the UK, and Australia. This allows Cogniitec to provide clients with consistent deliveries, keep clients informed about progress through open and transparent communication, and provide Predictable release schedules for enterprise web applications.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default WebDevelopment;
