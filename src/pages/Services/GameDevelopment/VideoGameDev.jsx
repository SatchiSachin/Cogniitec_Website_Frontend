import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const VideoGameDev = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={
          <>
            Cogniitec Video Game Development Solutions Engineered for
            High-Performance Gameplay
          </>
        }
        bullets={[
          "Enterprise Video Game Engineering",
          "High-Performance, Cross-Platform Game Experiences",
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
        heading={<>Cogniitec Advanced Video Game Development Solutions</>}
        card1Title="PC & Console Game Development"
        card1Description="Cogniitec develops high-quality games for PC, PlayStation, Xbox, and Nintendo platforms using industry-leading engines, advanced rendering techniques, and scalable asset workflows tailored for immersive game worlds."
        card1ButtonText="Learn more"
        card2Title="Cross-Platform Game Development"
        card2Description="Cogniitec builds unified game experiences across PC, console, and mobile, ensuring consistent gameplay, visual quality, and multi-device performance through deeply integrated cross-platform pipelines."
        card2ButtonText="Learn more"
        card3Title="Full-Cycle Game Production & LiveOps"
        card3Description="Cogniitec manages the full lifecycle of game development, including design, engineering, QA, publishing, and LiveOps, ensuring ongoing updates, optimisation, and player retention post-launch."
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
        topHeading={<> Key Challenges in Video Game Development</>}
        sec1Title="High Production Complexity Across Platforms"
        sec1Description="Video game development spans multiple engines, devices, and configurations. Without unified workflows, studios face delays, asset inconsistencies, and complex multi-platform optimisation challenges."
        sec1ButtonText="Read the Case Study "
        sec2Title="Increasing Player Expectations & Content Demand"
        sec2Description="Players expect exceptional visuals, smooth performance, and continuous updates. Without strong design and LiveOps support, studios struggle with retention, engagement, and long-term content pipeline pressure."
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
            title: "Expert Game Development Talent On Demand",
            description:
              "Studios hire expert video game developers from Cogniitec to build scalable, visually exceptional, cross-platform games designed for long-term performance and player engagement.",
          },
          {
            number: 2,
            title: "Industry Expertise Across Game Genres",
            description:
              "Cogniitec supports action, RPG, simulation, strategy, casual, and educational game productions with specialised workflows for gameplay, storytelling, world-building, and player interaction.",
          },
          {
            number: 3,
            title: "Serving Global Game Studios",
            description:
              "Cogniitec’s video game development workflows support studios across India, the UK, the USA, and Australia, delivering consistent quality, predictable development cycles, and strong post-launch support.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default VideoGameDev;
