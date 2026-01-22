import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const Hybrid = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={
          <>
            Cogniitec High-Performance Hybrid App Development Solutions for
            Enterprises
          </>
        }
        bullets={[
          "High-Performance Hybrid Apps.",
          "One Codebase. Multiple Platforms.",
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
        heading={<>Cogniitec Hybrid App Development Capabilities</>}
        card1Title=" Hybrid App Development (Ionic, Capacitor, Cordova)"
        card1Description="Cogniitec offers end-to-end hybrid app development services using HTML, CSS, JavaScript, and modern WebView engines. Our hybrid app development approach ensures native-like performance, smooth UI rendering, and plugin integration for device-level features. As a trusted provider of hybrid app development in India, we help businesses launch scalable, cost-efficient mobile applications faster.
"
        card1ButtonText="Learn more"
        card2Title="Progressive Web App (PWA) Development"
        card2Description="Cogniitec builds PWAs that deliver app-like speed, offline capability, and seamless multi-device accessibility, all supported by our expertise in hybrid app development services. With our strong foundation in hybrid app development, we ensure your PWA runs efficiently across browsers and devices. As a leader in hybrid app development in India, we craft PWAs designed for performance, reliability, and business growth."
        card2ButtonText="Learn more"
        card3Title="Hybrid + API-First Architecture"
        card3Description="Cogniitec implements an API-first ecosystem for enterprises relying on hybrid app development services, ensuring easy integration with ERP, CRM, databases, and cloud systems. Our hybrid app development methodology enables scalable, secure, and flexible architectures. Positioned among the top companies for hybrid app development in India, we ensure your hybrid apps remain future-ready and effortless to expand.
"
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
              leftImg={img1}
              rightImg={img2}
        topHeading={<>Core Challenges in Hybrid App Development</>}
        sec1Title="Performance Gaps & Rendering Limitations"
        sec1Description="In hybrid app development, many apps slow down due to weak rendering engines and inefficient UI layers. Cogniitec’s hybrid app development services fix this using high-performance WebView engines, UI virtualisation, advanced caching, lazy loading, and GPU-friendly animations, delivering smoother, faster results for businesses across hybrid app development in India.
"
        sec1ButtonText="Unpredictable cloud costs"
        sec2Title="Device Compatibility & Plugin Fragmentation"
        sec2Description="Hybrid apps often struggle with unreliable plugins and inconsistent behaviour across iOS and Android. With our expert hybrid app development services, Cogniitec ensures consistent performance through custom plugins, continuous device testing, and unified cross-platform behaviour, strengthening reliability for companies investing in hybrid app development in India.
"
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
        heading={<>Why Companies Choose Cogniitec for Hybrid App Development</>}
        steps={[
          {
            number: 1,
            title: "Expert Hybrid App Talent On Demand",
            description:
              "When companies need fast, scalable, and cost-efficient mobile solutions, they hire Cogniitec’s Hybrid App developer. As a leading hybrid app development company in India, we provide experienced engineers who build high-quality apps using Ionic, Capacitor, and Cordova, ensuring native-like performance, smooth UI, and strong cross-platform compatibility.",
          },
          {
            number: 2,
            title: "Industry Expertise Across App Verticals",
            description:
              "Cogniitec builds hybrid applications for entertainment, education, retail, finance, and enterprise operations. With 5+ years as a trusted hybrid app development company in India, we deliver feature-rich solutions, including onboarding apps, workflow tools, customer portals, training interfaces, and high-engagement consumer apps. Our hybrid products support strong business outcomes and consistent user retention.",
          },
          {
            number: 3,
            title: " Serving Global Brands With Proven Reliability",
            description:
              "As one of the leading names in hybrid app development in India, the USA, the UK, and Australia, Cogniitec delivers launch-ready applications with predictable timelines and reliable performance. Our development approach ensures smooth iterations, seamless API integrations, and consistent quality across Android and iOS, trusted by global teams who require stability and scale.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default Hybrid;
