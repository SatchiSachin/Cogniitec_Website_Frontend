import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const Flutter = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={
          <>
            Cogniitec Flutter App Development for High-Speed Digital Expansion
          </>
        }
        bullets={[
          "Built to Scale to Millions of Users",
          "60% Less Rework Through Unified Codebase",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "Single Codebase, Native-Like Experience",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Pixel-Perfect UI With Flutter Widgets",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Faster Builds & Shorter Release Cycles",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "High Performance With Lower Development Cost",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
            Custom Flutter App Solutions from a Leading Global Development Team
          </>
        }
        card1Title="Flutter App Development for Cross-Platform Efficiency"
        card1Description="Cogniitec helps enterprises adopt Flutter app development to reduce engineering effort, simplify maintenance, and speed up product launches with a single shared codebase that performs consistently across devices, delivering a near-native experience while cutting cost.
"
        card1ButtonText="Learn more"
        card2Title=" Enterprise Flutter Architecture & System Design"
        card2Description="Cogniitec builds large-scale systems using Flutter application development services tailored for complex workflows, heavy data environments, and global user bases.
We apply modular architectures, layered code structures, automated testing, and efficient rendering pipelines, making apps easier to scale, update, and maintain over time.
"
        card2ButtonText="Learn more"
        card3Title=" End-to-End Flutter App Development Services"
        card3Description="Cogniitec provides full lifecycle flutter app development services, including architecture planning, UI engineering, backend/API integration, CI/CD automation, and optimisation for launch readiness.
"
        card3ButtonText="Learn more"
        counter1Value={12}
        counter1Label="Flutter Apps Delivered"
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
        topHeading={<>Core Challenges in Flutter App Development</>}
        sec1Title=" Inconsistent Multi-Device Performance"
        sec1Description="Many organisations face UI inconsistencies and performance gaps across devices.
Cogniitec solves this through strict architectural standards, rendering optimisation, and scalable widget systems, backed by reliable Flutter app development services."
        sec1ButtonText="Unpredictable cloud costs"
        sec2Title="Scaling Limitations from Poor Code Practices"
        sec2Description="Unstructured code slows feature releases and increases maintenance costs.
Cogniitec applies modular patterns, automated tests, and strong code governance across all Flutter application development services, ensuring long-term maintainability and efficient scaling.
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
          <>Why Companies Choose Cogniitec for Flutter App Development</>
        }
        steps={[
          {
            number: 1,
            title: "Flutter Engineering Talent",
            description:
              "Enterprises partner with Cogniitec to access engineers experienced in Flutter app development, cross-platform systems, and enterprise integrations.Our developers specialise in architecting scalable products that remain stable under real business conditions.",
          },
          {
            number: 2,
            title: " Industry-Focused Flutter Solutions",
            description:
              "Cogniitec provides domain-aligned Flutter app development services across healthcare, retail, logistics, education, and enterprise operations Our extensive knowledge ensures technical decisions match operational needs and user expectations.",
          },
          {
            number: 3,
            title: " Global  Presence",
            description:
              "Cogniitec delivers reliable flutter application development services across India, the USA, the UK, and Australia, supported by processes designed for predictable timelines and consistent engineering quality.This makes Cogniitec a preferred Flutter app development company for organisations needing long-term, scalable execution.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default Flutter;
