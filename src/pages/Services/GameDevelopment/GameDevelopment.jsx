import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const GameDevelopment = () => {
  return (
    <div className="my-10">
      <HeroSection
        title={
          <>
             Cogniitec Game Tech Development Solutions Engineered for High
             Performance
          </>
        }
        bullets={[
          "Enterprise Game Engineering",
          "High-Performance Cross-Platform Development",
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
        heading={<>Cogniitec Advanced Game Development Solutions</>}
        card1Title="Android Game Creation"
        card1Description="As a Provider of video game development Services, Cogniitec builds Android Games with an optimized Performance And Workflow Approach, designed for Device Versatility, Consistent Gaming Experience, And Scalable Architectures."
        card1ButtonText="Learn more"
        card2Title="iOS Game Creation"
        card2Description="With a Software Development Company in India That Uses Disciplined Engineering and Apple-optimized pipelines While Developing Premium iOS Experiences Through This Process, Producing Smooth Controls, High-Quality Graphics, and reliability, it Produces A Trusted Game Development Company In India."
        card2ButtonText="Learn more"
        card3Title="Video Game Creation"
        card3Description="Cogniitec Re-Engineers Itself To Deliver Strong Mechanics, Real-Time Systems, And Production-Ready Workflows For Video Games. Each Video Game Development Service Is Designed For Predictable Release Dates, Smooth Performance And Scalable To Multiple Platforms."
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
        topHeading={<> Key Challenges in Game Development</>}
        sec1Title="The Challenges of Cross-Platform Performance"
        sec1Description="Cross-platform complications arise due to the differences in performance and specifications of the different devices, which require a lot of producer time to resolve. More than 60% of video game development teams indicate that their production schedules have been interrupted due to a gap in the optimisation process of the games, and therefore, it is crucial to work with a reputable game-development service to ensure the games' performance stabilises early in the production pipeline."
        sec1ButtonText="Read the Case Study"
        sec2Title=" Issues Impacting Quality, User Experience & Retention"
        sec2Description="Over 55% of gamers lose interest after just one week of playing a game; thus, studios must continue to improve the quality, stability of gameplay, and level of progress through game development service improvements. Partnering with a competent and experienced video-game-development company in India will help ensure that gamers have an opportunity to engage with the game at every stage of its development and at the conclusion of their feedback through comprehensive test and balance activities."
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
            number:1,
            title: "Expert Talent On Demand",
            description:
              "Cogniitec works with gaming companies to provide access to hire game developers to create and maintain scalable game architectures and support their expanding universes daily. As a reliable provider of game development services, Cogniitec can provide you with the engineering expertise necessary to speed up production timelines while improving the technical reliability of your games across all platforms.",
          },
          {
            number:2,
            title: " Industry Expertise",
            description:
              "Cogniitec enables the use of Gaming Technology throughout the Healthcare & Medical Simulation Education & Training, retail & Customer Experience, Enterprise & Workforce Training, and Entertainment & Media Production industries by leveraging gaming technology for Training, Engagement, Simulation, Learning, and Interaction.",
          },
          {
            number:3,
            title: "Serving Global Studios",
            description:
              "Cogniitec's Streamlined Workflows and faster development cycles empower studios throughout India, the UK, the USA, and Australia.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default GameDevelopment;
