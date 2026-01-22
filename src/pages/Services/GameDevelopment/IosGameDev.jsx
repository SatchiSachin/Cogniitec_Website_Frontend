import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";


const IOSGameDev = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={
          <>
            Cogniitec iOS Game Development Solutions Engineered for Premium
            Performance
          </>
        }
        bullets={[
          "Enterprise iOS Game Engineering",
          "High-Performance, Stable, Visually Refined Games",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "Expert iOS Game Developers",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Premium Game Engineering",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "High-Performance iOS Builds",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Trusted by Global Studios",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Cogniitec Advanced iOS Game Development Solutions</>}
        card1Title="Native iOS Game Development"
        card1Description="As a leading ios development company in india, Cogniitec creates native iOS games by leveraging Apple's native iOS frameworks, Swift, and Metal technology to provide fast-loading times, graphic quality, and fluid gameplay on all Apple devices while meeting enterprise level performance requirements."
        card1ButtonText="Learn more"
        card2Title=" Cross-Platform iOS Game Development"
        card2Description="Studios engage with Cogniitec when they want true cross-platform compatibility. Cogniitec's ios development solutions offer significant advantages for studios by providing fully immersive iOS products through the use of Unity and highly optimised pipelines. Studios benefit from the advanced performance, high frames per second, and fine-tuned asset optimisation of Cogniitec's products, which can be deployed globally."
        card2ButtonText="Learn more"
        card3Title="iOS Gameplay Optimisation & Performance Tuning"
        card3Description="By utilising frame rate tuning, memory optimisation, battery efficiency improvements, and rendering enhancements, Cogniitec improves the performance of games at scale in order to ensure peak stability for games on all Apple devices, regardless of workload."
        card3ButtonText="Learn more"
        counter1Value={40}
        counter1Label="iOS Games Shipped"
        counter2Value={55}
        counter2Label="Faster App Store Approvals"
        counter3Value={30}
        counter3Label="Better Device Performance Optimisation"
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
        topHeading={<>Key Challenges in iOS Game Development</>}
        sec1Title=" Hardware & Performance Constraints Across Apple Devices"
        sec1Description="Many developers are challenged to sustain similar performance levels over different versions of the iPhone and iPad. Cogniitec, as a premier ios development company in india, utilizes advanced hardware profiling techniques to help players eliminate frame drops, overheating concerns, and performance inconsistencies."
        sec1ButtonText="Read the Case Study"
        sec2Title="High Visual Expectations & App Store Quality Requirements"
        sec2Description="Apple has a high expectation for how polished each game is, as well as their expectations for quick loading times, clear graphics, and smooth running of the game itself. Without an appropriate skill set, it is common for studios to experience delays when receiving feedback from Apple through their application review process and ultimately not getting approved."
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
        heading={<>Why Leading Game Studios Partner With Cogniitec</>}
        steps={[
          {
            number: 1,
            title: "Expert iOS Talent On Demand",
            description:
              "When studios are looking for engineering strength that can produce cutting-edge performance, they turn to Cogniitec as their iOS development partner. We are a leading iOS development company in India and employ game developers who will produce a top-quality, unique, and scalable product that will lead to maximized future profits by being accepted on Apple's store for use on all devices.",
          },
          {
            number: 2,
            title: "Industry Expertise Across Game Verticals",
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

export default IOSGameDev;
