import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const ReactNative = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={
          <>
            Cogniitec Engineering High-Impact React Native App Development
            Services for Modern Enterprises
          </>
        }
        bullets={["30% lower engineering effort", "stronger long-term ROI"]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "Cross-Platform App Excellence",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Enterprise-Ready React Native Development",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Optimised Performance Across Devices",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Faster Time-to-Market",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>Enterprise React Native Solutions from India’s Trusted Experts</>
        }
        card1Title="Cross-Platform Product Efficiency"
        card1Description="By incorporating React Native into their platforms, businesses can increase the efficiency of app development, decrease the cost and time to develop their apps, and retain the experience of being native on both iOS and  Android devices. 

         This creates the foundation for Cogniitec to be one of the leading React Native App Development Companies in India, creating the solutions companies need to have predictable, reliable delivery and cleaner cross-platform execution of their products."
        card1ButtonText="Learn more"
        card2Title=" Enterprise-Scale Architecture & System Design"
        card2Description="Cogniitec creates a scalable, enterprise-grade architecture that is built specifically to support high volumes of traffic for mobile apps. Our React App Application Development process allows companies to know that their apps will be able to handle millions of users, incorporate complex business logic, have secure data flow, and integration with multiple systems without reducing the quality of the performance of their app. "
        card2ButtonText="Learn more"
        card3Title="Full-Lifecycle React Native App Delivery"
        card3Description="Cogniitec has expertise in managing the entire lifecycle of react native mobile apps, from architecture and API design to continuous integration and deployment (CI/CD) automation, performance optimisation, and launch readiness. At each stage of the development process, we ensure a consistent user interface (UI) operating behaviour, predictable performance, secure data integration processes, and code that can be easily upgraded for technological changes down the road.
"
        card3ButtonText="Learn more"
        counter1Value={12}
        counter1Label="React Apps Delivered"
        counter2Value={98}
        counter2Label="Crash-Free Performance"
        counter3Value={30}
        counter3Label="Faster Release Cycles"
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
                    leftImg={img1}
                    rightImg={img2}
        topHeading={<>Core Challenges in React Native App Development</>}
        sec1Title="Performance Gaps Between Platforms"
        sec1Description="Many companies experience differences in how their product performs on iOS vs. Android.
Cogniitec is addressing these issues with structured React Native architecture, optimised rendering and consistent behaviour of the user interface, allowing us to be recognised as a leading react native app development company in India with proven delivery capabilities."
        sec1ButtonText="Unpredictable cloud costs"
        sec2Title="Complexity of Code and Restrictions on Scaling"
        sec2Description="When there are poor code practices and unstructured development, it will slow down overall growth.
Cogniitec addresses this situation with modular architecture, automated testing and scalable design systems to make future maintenance and upgrades easier - this enables us to provide advanced react native app development services.
"
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
          <>Why Companies Hire Cogniitec to Develop React Native Applications</>
        }
        steps={[
          {
            number: 1,
            title: "Expert React Native Engineerings",
            description:
              "Enterprises partner with Cogniitec to hire React Native developers who understand the complexities of running a business, developing quality apps, ensuring enterprise-level security for their clients and performance requirements.Cogniitec's developers will be able to create an application that meets all your business goals, scalable, also maintainable.",
          },
          {
            number: 2,
            title: "React Native Solutions that are Industry Specific",
            description:
              "Cogniitec produces mobile solutions for retail, healthcare, education, logistics, and enterprise solutions.Cogniitec has experience in technical knowledge and the industry, building react native app solutions that are designed and built for real-world applications with measurable results.",
          },
          {
            number: 3,
            title: "Reliable Execution and Delivery Around the World",
            description:
              "As a leading react native app development company in India, Cogniitec supports organisations across India, the USA, the UK, and Australia. Cogniitec's delivery model provides companies with access to a global network of professionals.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default ReactNative;
