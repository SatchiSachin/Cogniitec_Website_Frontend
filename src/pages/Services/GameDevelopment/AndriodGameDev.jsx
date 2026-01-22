import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const AndriodGameDev = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={
          <>
           Cogniitec Android Game Development Solutions Engineered for Scalable Performance
          </>
        }
        bullets={[
          "Enterprise Android Game Engineering",
          "High-Performance, Device-Optimised Android Games ",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "5+ Games Successfully Delivered",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "95% Average Player Satisfaction",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "20% Faster Development & Release Cycles",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Real-Time Trend Insights",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Cogniitec Advanced Android Game Development Solutions</>}
        card1Title="Native Android Game Development"
        card1Description="Cogniitec builds high-performance Android games using Kotlin, Java, and advanced game frameworks, delivering smooth gameplay, fast rendering, and optimised performance across diverse Android devices."
        card1ButtonText="Learn more"
        card2Title="Cross-Platform Android Game Development"
        card2Description="Cogniitec supports studios using Unity, Unreal, and cross-platform engines to deliver consistent, visually strong Android gameplay with efficient asset pipelines and optimised multi-device deployments."
        card2ButtonText="Learn more"
        card3Title="Android Performance Optimisation & Device Tuning

"
        card3Description="Cogniitec fine-tunes frame rates, memory usage, CPU/GPU load, and thermal stability, ensuring Android games perform reliably across varying device tiers and hardware configurations."
        card3ButtonText="Learn more"
        counter1Value={25}
        counter1Label="Mobile & PC Games Delivered"
        counter2Value={92}
        counter2Label="Optimised Cross-Device Performance"
        counter3Value={28}
        counter3Label="Faster Delivery With Better Pipelines"
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
        topHeading={<>Key Challenges in Android Game Development</>}
        sec1Title="High Fragmentation Across Android Devices"
        sec1Description="Android’s wide range of devices, chipsets, display types, and OS versions creates performance inconsistencies. Without deep optimisation, studios face instability, crashes, and uneven user experience."
        sec1ButtonText="Read the Case Study" 

        sec2Title="Performance Drops in Mid-Range & Budget Devices"
        sec2Description="Many Android games struggle with frame rate dips, thermal issues, and slow loading on lower-end devices. Without targeted tuning, studios experience poor retention and negative reviews."
        sec2ButtonText="Read the Case Study "
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
        heading={<>Why Leading Game Studios Partner With Us</>}
        steps={[
          {
            number: 1,
            title: "Expert Android Talent On Demand",
            description:
              "Studios hire expert Android game developers from Cogniitec to build scalable, high-performance games optimised across the full Android ecosystem, from premium to entry-level devices.",
          },
          {
            number: 2,
            title: "Industry Expertise Across Game Verticals",
            description:
              "Cogniitec supports entertainment, education, retail, and enterprise brands with Android games built for training, simulation, engagement, storytelling, and interactive digital experiences.",
          },
          {
            number: 3,
            title: "Serving Global Game Studios",
            description:
              "Cogniitec’s Android development workflows support studios across India, the UK, the USA, and Australia, delivering consistent quality, faster iterations, and device-ready launch readiness.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default AndriodGameDev;
