import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const FullStackDevelopment = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
             Cogniitec: Full Stack Software Engineering Designed to Scale into the Real World

          </>
        }
        bullets={[
          "High-load ready systems",
          "End-to-end product engineering.",


        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "End-to-End Engineering", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "Unified Architecture", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Scalable Deployments", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "API-Driven Performance", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
           Cogniitec- Full Stack Development Services in India  - Simple, Solid, Effective

          </>
        }

        card1Title="Front-End Development"
        card1Description="Cogniitec develops front-end interfaces that are fast, consistent, and stable to all devices. We have component based structures, optimized rendering and clean state management which makes all interactions immediate. We offer fullstack development services in India which promise reliability, low-latency performance, and distinct separation of UI layers, which assist brands to select the best full stack development company in India to do user-facing engineering."
        card1ButtonText="Learn more"

        card2Title="Back-End Development"
        card2Description="We base our backend development on straightforward, predictable, and easy-to-maintain architecture. Cogniitec develops systems capable of high traffic and data processing as well as systems that can withstand high loads. We have clear module separation, safe workflows and clear logic flow to enable business to scale without having to overhaul an entire infrastructure. This strategy will enhance our status as the best full stack development company in India to expand on digital products."
        card2ButtonText="Learn more"

        card3Title="APIs & Database Engineering"
        card3Description="Cogniitec,fullstack development services in India creates APIs which are highly organized, quick to react, and integrate with other platforms easily. Our database architectures are built on indexing, optimized queries, and correct data models that ensure that performance remains consistent even in case of increase in data volumes. Clean API versioning and consistent data flow help reduce the errors and release features without any problems."
        card3ButtonText="Learn more"

        counter1Value={200}
        counter1Label="Full Stack Applications Delivered Across Sectors"

        counter2Value={70}
        counter2Label="Improvement in End-to-End Response Time"

        counter3Value={45}
        counter3Label="Reduction in API Latency With AI Diagnostics"
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
         The main Challenges of Full-Stack Development
          </>
        }

        sec1Title="Slow Development Cycles"
        sec1Description="The majority of businesses fail due to the separation of the UI, backend and database teams. This leads to time wastage, differing requirements, and back and forth correction that leads to higher costs."
        sec1ButtonText="Unpredictable cloud costs"

        sec2Title="Unstable System Structure"
        sec2Description="
Client Clients can hit problems by developing a project and not having systems that are ready to handle the increased traffic or features. This results in crashes, slow-loading and costly rebuilds that would have been avoided with an intended full-stack basis."
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
           Why Companies prefer Cogniitec Full Stack Engineering

          </>
        }
        steps={[
          {
            number: 1,
            title: "End-to-End Engineering Made to Real Products",
            description:
              "Companies collaborate with Cogniitec in order to find engineers knowledgeable about either side of the stack UI logic, component rendering, caching, API performance, data flow, and deployment behaviour.The front-end delivery of our teams is integrated with the stability of the backend to ensure that applications scale smoothly to feature demands.The brands do trust Cogniitec,the art full stack development services in India for providing high performing integrated models.",
          },
          {
            number: 2,
            title: "Architectures Optimised to Each Industry",
            description:
              "Cogniitec develops industry specific stacks that align with the needs of the industry in terms of operations.Retail must have quicker product rendering, healthcare must have data exchange security, real estate must have complicated search filters, SaaS must have feature releases that are modular - and we architect them to enable all.All the work flows, database routes, and API loops are customised to the industry performance, compliance, and throughput needs.",
          },
          {
            number: 3,
            title: "Global Delivery With Stable Release Cycles",
            description:
              "Companies in India, the UK, the USA, and Australia prefer Cogniitec due to full stack team providing predictable delivery speed, clean versioning, and productive efficiency.We combine CI/CD pipelines, deployments based on containers, automated test suites, and performance monitoring to ensure releases are stable across all the environments.This international model also provides a uniform performance and transparency.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default FullStackDevelopment;
