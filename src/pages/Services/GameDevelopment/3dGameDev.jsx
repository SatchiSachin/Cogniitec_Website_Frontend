import { Helmet } from "react-helmet";
import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const ThreeGameDev = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>3D Gaming Development | Best Game Development Company</title>
        <meta
          name="description"
          content="Unlock immersive gaming with Cogniitec’s 3D game development. We craft stunning, interactive 3D games for mobile, PC, and consoles."
        />
      </Helmet>
      <HeroSection
        title={
          <>
            Cogniitec India’s Premier 3D Game Development Studio for Scalable,
            Immersive Experiences
          </>
        }
        bullets={[
          "Enterprise Game Engineering",
          "High-Performance Cross-Platform Development",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "Optimised Multi-Platform Performance ",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "AI-Driven NPC & Gameplay Systems",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Procedural World Generation",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Cross-Platform Deployment",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Cogniitec 3D Game Development Solutions</>}
        card1Title="High-Performance 3D Game Engineering"
        card1Description="We are 3D game developers specializing in the industry's top engines, Unity and Unreal Engine, alongside bespoke rendering solutions. Our teams are experts in core areas like physics simulation, real-time rendering, AI-based gameplay, and robust multiplayer architecture.
        As a top 3D game development studio, our focus is on maximum performance optimisation and asset efficiency to deliver immersive world-building. Global game publishers partner with Cogniitec for visually stunning 3D titles that maintain a consistent framerate and stability across all target platforms.
"
        card1ButtonText="Learn more"
        card2Title="Full-Cycle Game Production & Player Experience Design"
        card2Description="Our integrated team manages the end-to-end game development process: from initial concept design and rapid prototyping to detailed environment building, character animation, level design, and intuitive UI/UX.
        Recognized as a leading 3D game development company in India, we focus on crafting seamless gameplay loops, engaging narratives, advanced visual effects with shader systems, and responsive control flows tailored for platforms including PC, console, AR/VR, and next-gen mobile devices."
        card2ButtonText="Learn more"
        card3Title=" Analytics, Telemetry & Game Economy Intelligence


"
        card3Description="Cogniitec helps studios drive long-term success by integrating advanced tools for player insights. This includes event-based analytics, effective monetization models, detailed player behavior tracking, and cohort analysis to boost retention and LTV (Lifetime Value). As your trusted 3D game development partner, we facilitate data-driven decisions through real-time gameplay dashboards, performance tuning insights, crash diagnostics, and predictive engagement analysis, all crucial for managing successful multiplayer, live-ops, and free-to-play game economies.
"
        card3ButtonText="Learn more"
        counter1Value={70}
        counter1Label="AAA-Quality 3D Game Levels Designed & Deployed"
        counter2Value={45}
        counter2Label="Improvement in Rendering Efficiency & FPS Stability"
        counter3Value={32}
        counter3Label="Reduction in Asset Load Time & Memory Consumption"
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
        topHeading={<>Key Challenges in 3D Game Development </>}
        sec1Title=" Addressing Rising Development Costs"
        sec1Description="  Creating high-fidelity 3D games demands significant investment in advanced game engines, expansive asset libraries, motion capture technologies, and specialized physics systems. These rising costs can hinder scalability for many studios.
 "
        sec1ButtonText="Read the Case Study"
        sec2Title=" Conquering Performance Bottlenecks & Cross-Platform Instability"
        sec2Description=" Over 58% of 3D projects face critical issues like FPS drops, texture streaming failures, and visual inconsistencies across different devices. Without expert optimization, the core gameplay quality suffers."
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
        heading={
          <> Why Leading Studios Choose Cogniitec for 3D Game Development</>
        }
        steps={[
          {
            number: 1,
            title: "Hire Dedicated 3D Game Developers from Cogniitec",
            description:
              "Gain access to our pool of highly skilled professionals, including Unity Developers, Unreal Engine Developers, 3D Modelers, Animators, Physics Engineers, and Gameplay Programmers. Studios trust us to build high-performance 3D worlds, intricate character rigs, custom shaders, and scalable gameplay systems .",
          },
          {
            number: 2,
            title: "Deep Expertise Across Game Genres & Platforms",
            description:
              "We deliver genre-specific mechanics and fine-tuning for virtually any game style, including FPS (First-Person Shooter), RPG (Role-Playing Game), Simulation, Sports, Action-Adventure, Open-World, AR/VR (Augmented/Virtual Reality), and Metaverse experiences.",
          },
          {
            number: 3,
            title: "Global Delivery with Strategic Presence",
            description:
              "Cogniitec is a global gaming studio partner, offering 3D game development, prototyping, optimization, and live-ops support to clients across India, the UK, the USA, and Australia. Our standardized pipelines, test automation, and transparent reporting make us the preferred development partner for studios looking to scale across international markets.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default ThreeGameDev;
