import { Helmet } from "react-helmet";
import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const AppDevelopment = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Custom Mobile App Development Services | Cogniitec</title>
        <meta
          name="description"
          content="We offer custom mobile app development services to build seamless and innovative apps for Android and iOS platforms. Contact us for more details"
        />
      </Helmet>
      <HeroSection
        title={
          <>
            Cogniitec High-Performance Custom Mobile App Development Solutions
            for Enterprises
          </>
        }
        bullets={[
          "Custom Mobile App Development Services",
          "End-to-End Services Across India, UK, USA & Australia",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "Faster Cloud Deployment",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Reduced Cloud Spend",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Seamless Cloud Migration",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Reliable Multi-Cloud Ops",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />
      <ClientsMarquee />
      <ServiceSection
        heading={<>Cogniitec Mobile App Development Capabilities</>}
        card1Title="Native App Development"
        card1Description="Cogniitec, a leading mobile app development company in India, builds custom iOS and Android apps engineered for native speed, enterprise security, and platform-specific excellence. Our native apps deliver smooth UI, robust performance, and full access to device capabilities."
        card1ButtonText="Learn more"
        card2Title="Cross-Platform App Development"
        card2Description="Cogniitec’s cross-platform mobile app development experts create scalable Flutter and React Native apps with unified performance across iOS and Android. Businesses across the USA, UK, Australia, and India choose us for faster delivery and reduced development costs."
        card2ButtonText="Learn more"
        card3Title="Hybrid, Web & PWA Development"
        card3Description="As a global digital product engineering partner, Cogniitec builds Hybrid Apps, PWAs, and Web Apps that combine strong security, multi-device compatibility, and cost-efficient scalability, ideal for enterprises expanding their digital ecosystem internationally."
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
        topHeading={<>Core Challenges in Mobile App Development</>}
        sec1Title="Cross-Platform Consistency Challenges"
        sec1Description="Many companies struggle to deliver consistent performance across devices and operating systems. Cogniitec helps global enterprises eliminate fragmentation, streamline codebases, and accelerate multi-platform deployment."
        sec1ButtonText="Unpredictable cloud costs"
        sec2Title="UI/UX Performance & Engagement Gaps"
        sec2Description="Slow interfaces, weak design systems, and poor optimisation lower retention. Cogniitec builds high-performance, engagement-driven apps that meet modern expectations across industries and markets."
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
        heading={<>Why Companies Choose Cogniitec for App Development</>}
        steps={[
          {
            number: 1,
            title: "Custom Mobile Engineering Expertise",
            description:
              "Enterprises hire Cogniitec’s app developers to build scalable, secure, high-performance mobile solutions tailored to their workflow and business model.",
          },
          {
            number: 2,
            title: "Industry-Focused App Solutions",
            description:
              "Cogniitec provides custom apps for healthcare, retail, education, and enterprise sectors, integrating automation, analytics, accessibility, and domain-specific features.",
          },
          {
            number: 3,
            title: "Global Presence & Delivery Excellence",
            description:
              "With teams across India, the UK, the USA, and Australia, Cogniitec delivers consistent, high-quality app development services for brands operating worldwide.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default AppDevelopment;
