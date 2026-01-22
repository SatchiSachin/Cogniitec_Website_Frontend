import BusinessSection from "../../components/services/BusinessSection";
import ClientsMarquee from "../../components/services/ClientMarquee";
import GetStartedSection from "../../components/services/GetStartedSection";
import HeroSection from "../../components/services/HeroSerivces";
import ServiceSection from "../../components/services/ServiceSection";
import img1 from "../../assets/Images/services/busi1 (1).png";
import img2 from "../../assets/Images/services/busi2.png";

const CyberSecurity = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
            Cybersecurity Solutions Engineered for Enterprise Risk Resilience
          </>
        }
        bullets={[
          "Adaptive, automated threat protection",
          "Zero Trust identity control"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "Real-Time Threat Detection", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "End-to-End Network Security", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Cloud & Zero-Trust Security", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "Managed Security Services", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
            Integrated Cybersecurity Solutions & Protection Services
          </>
        }

        card1Title="Network Security & Threat Protection"
        card1Description="Cogniitec builds enterprise networks through the comprehensive application of sophisticated network security measures combined with continuous monitoring that detects real-time threats and prevents intrusions. This means that Cogniitec offers 24/7 threat detection and builds a comprehensive security support layer around cloud-based, hybrid-networked, and traditional/legacy systems. We're one of only a handful of providers who address the enterprise scalability of network security."
        card1ButtonText="Learn more"

        card2Title="Zero-Trust & Cloud Security Services"
        card2Description="Cogniitec employs a zero-trust model of identity management and access control across public-cloud providers (AWS, Azure, GCP) to manage corporate data and workloads. As an India-based leader in cybersecurity solutions and services, we are uniquely positioned to provide secure workforces with verified access and consistent network security for every individual or entity."
        card2ButtonText="Learn more"

        card3Title="Managed Security & Automation"
        card3Description="Cogniitec provides customers with all-inclusive security operation centers that integrate automated monitoring, incident response, compliance management and policies into one workflow. Companies working with established providers of cybersecurity on the internet will find our ability to deliver global operations and execute effectively to be advantageous."
        card3ButtonText="Learn more"

        counter1Value={30}
        counter1Label="Enterprise AI Models Delivered"

        counter2Value={98}
        counter2Label="Accuracy Achieved in Production"

        counter3Value={25}
        counter3Label="Average Operational Cost Reduction"
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
            Core Cybersecurity Challenges
          </>
        }

        sec1Title="Expanded AI Threat Surface"
        sec1Description="Adoption of artificial intelligence (AI) increases an enterprise's threat surface. As companies expand their AI usage, unmanaged systems transmit sensitive information through unmonitored models and unverified endpoints. To secure against the ever-changing AI threat, it is imperative for enterprises to have a  cybersecurity solutions and services provider in India , that can assist in developing an effective Security Strategy."
        sec1ButtonText="View case study"

        sec2Title="Identity & Access Weaknesses"
        sec2Description="The primary points of failure causing breaches in a network are still due to compromised user credentials, poor governance, and unverified access points to the corporate network. These vulnerabilities weaken the overall network security posture of an enterprise, resulting in the need for a strong partnership with a reputable Cybersecurity service provider"
        sec2ButtonText="View case study"
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
            Why Companies Prefer Cogniitec’s Cybersecurity Expertise
          </>
        }
        steps={[
          {
            number: 1,
            title: "Enterprise Security Engineering Talent",
            description:
              "Businesses trust Cogniitec to design network security architectures, automate protection, and deliver scalable threat resilience. Our specialists provide end-to-end capabilities expected from a top cyber security solutions and services provider in India.",
          },
          {
            number: 2,
            title: "Security Solutions Across Industries",
            description:
              "Cogniitec supports healthcare, retail, education, and enterprise sectors with compliant frameworks backed by strong network security controls. This broad industry coverage is why organisations consistently choose leading cyber security companies that ensure risk reduction and secure operations.",
          },
          {
            number: 3,
            title: "Global Presence",
            description:
              "Cogniitec protects organisations across India, the UK, the USA, and Australia with consistent monitoring, fast response, and dependable network security operations. Our global delivery capability further reinforces our position as a trusted cyber security solutions and services provider in India and a preferred partner among top cyber security companies.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default CyberSecurity;
