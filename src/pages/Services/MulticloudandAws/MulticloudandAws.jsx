import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const MulticloudandAws = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
             Cogniitec Multi-Cloud Solutions Engineered for Scalability & Cost Efficiency 
          </>
        }
        bullets={[
          "Enterprise-grade multi-cloud engineering expertise",
          "High-performance cloud infrastructure across AWS, GCP & Azure"
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
            Cogniitec Advanced Multi-Cloud Solutions

          </>
        }

        card1Title="Architecture & Deployment Across AWS, GCP & Azure"
        card1Description="Cogniitec provides a range of services, from design to management of a unified multi-cloud (AWS, Google Cloud, Azure) ecosystem. As a globally recognised multi-cloud provider, Cogniitec ensures that customers are provided with consistent operations, performance, and configuration across all three platforms."
        card1ButtonText="Learn more"

        card2Title="Legacy to Cloud-Native Modernisation"
        card2Description="Cogniitec is focused on modernising existing legacy systems by leveraging cloud technologies, including Kubernetes, microservices, and DevOps automation. Customers who engage with Cogniitec do so because they trust us as an innovative multi-cloud provider based in India."
        card2ButtonText="Learn more"

        card3Title="Cloud Automation, Optimisation & Governance"
        card3Description="Cogniitec enhances the performance of its customers' multi-cloud systems through automation and operational efficiency, along with resource optimisation, governance frameworks, and security guardrails. These capabilities allow Cogniitec to be recognised as a reliable, cost-effective, and efficient provider of multi-cloud services throughout India."
        card3ButtonText="Learn more"

        counter1Value={50}
        counter1Label="Delivered across AWS, GCP & Azure."

        counter2Value={99.9}
        counter2Label="Reliable, stable cloud operations"

        counter3Value={40}
        counter3Label="Lower cloud spend with optimisation."
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
           Key Challenges in Multi-Cloud Management
          </>
        }

        sec1Title="Inconsistent Cloud Configurations & Operational Silos"
        sec1Description="Inconsistencies across multiple providers discourage the appropriate use of available resources. However, working with a trusted multi-cloud service provider decreases costs associated with duplication of efforts across all the different resources, thereby simplifying operational efficiency and freeing up valuable business resources for other uses."
        sec1ButtonText="Unpredictable cloud costs"

        sec2Title="High Cloud Costs & Limited Scalability Controls"
        sec2Description="Manual provisioning, unoptimised resources and outdated infrastructure create unpredictable spending and limit scalability. Cogniitec, recognized as a dependable multi cloud service provider in India, brings automation and optimisation to regain control of cloud costs."
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
              "Hiring multi-cloud engineers from Cogniitec helps organisations create, automate, govern, and operate their business to improve overall operational efficiency in today’s environment, as well as increase their ability to respond to changing market demands faster than ever before through a controlled, automated environment.",
          },
          {
            number: 2,
            title: " Deep Cloud Industry Expertise",
            description:
              "We partner with organisations across the healthcare, retail, education and other industries, providing them with cloud solutions tailored to their business. As one of the leading multi-cloud providers in India, we help our customers quickly implement the best practices for multi-cloud systems that will increase their competitive advantage and drive continuous improvement.",
          },
          {
            number: 3,
            title: "Serving Global Cloud Teams",
            description:
              "Cogniitec specialises in developing and applying deep-cloud technology capabilities to serve our clients in India, the USA, the UK, and Australia. As one of the leading multi-cloud providers in India, organisations choose to partner with Cogniitec because we offer a scalable, repeatable delivery model that works across different, distinct multi-cloud environments.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default MulticloudandAws;
