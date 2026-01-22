import { Helmet } from "react-helmet";
import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const IOS = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>iOS Solutions | iOS Application Development | Cogniitec </title>
        <meta
          name="description"
          content="Cogniitec follows a structured iOS app development approach, starting with in-depth analysis of client needs and target audience for optimal results."
        />
      </Helmet>
      <HeroSection
        title={
          <>Cogniitec iOS Engineering Built to be Precise and High Performing</>
        }
        bullets={[
          "Stable iOS Apps Optimized to the Hardware Stack of Apple",
          "iOS Native Performance Tuning.",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "AI Quality Checks",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Automated Auto-Layout ",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: " Pipeline Intelligence",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Adaptive GPU Load Simulation",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>iOS App Development Framework at Cogniitec - Optimised to Devices</>
        }
        card1Title=" Native Swift Architecture Clean Modular Layers"
        card1Description="Cogniitec creates iOS applications in Swift, Swift Concurrency, Combine and modular MVVM/MVIP.We overlay memory management, state management, thread management, and rendering pipelines to offer seamless delivery even in the face of heavy UI transitions or when using operations that consume large amounts of data.This engineering capability makes Cogniitec the best iOS app development company in India in cross-platform eco systems.
"
        card1ButtonText="Learn more"
        card2Title="Apple Silicon Device Optimization and Multi-Model Testing"
        card2Description="Our performance tests are done with various generation of Apple devices, including older A-series chips and the most recent Bionic/Ultra chips, and remove frame drops, layout shifts, haptic delays, and rendering variations.With the help of Xcode Instruments (Memory Graph, Time Profiler, Core Animation), we optimise CPU behaviour, graphics load, thermal performance, and energy consumption.This will render Cogniitec the best iOS app development company in India to develop high-performance applications to meet the hardware limitations of Apple."
        card2ButtonText="Learn more"
        card3Title="iCloud Sync Engineering, Keychain, Local Storage, and Secure API"
        card3Description="Cogniitec, the best iOS app development company in India handles API communication using URLSession, Alamofire, secure headers, and certificate pinning to ensure every request is fully encrypted and tamper-proof.Local data is managed through Core Data, Realm, and Keychain, combined with structured offline-first sync logic, conflict resolution, and intelligent fallback behaviour.Our engineered data pipelines maintain integrity even during network drops, multi-device transitions, or heavy background processing needed for critical, high-reliability mobile systems.
"
        card3ButtonText="Learn more"
        counter1Value={180}
        counter1Label=" iOS Apps Engineered for High Stability"
        counter2Value={58}
        counter2Label="Reduction in Memory Leaks With AI Instrumentation"
        counter3Value={42}
        counter3Label="Improvement in Frame Consistency & Smoothness"
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
        topHeading={<>Major concerns in the development of iOS</>}
        sec1Title="Major concerns in the development of iOS"
        sec1Description="There are tight App Store policies, privacy policies, background execution policies and permission policies affecting the business.In the absence of specific compliance engineering, applications may be rejected, throttled, or they perform poorly across versions of iOS."
        sec1ButtonText="Unpredictable cloud costs"
        sec2Title=" Interoperability Stability across Devices"
        sec2Description="Despite the fact that the Apple devices are less in number, the actual performance differs with the chip generations, display refresh rate, thermal behaviour, and memory limits.
Unoptimised apps experience ANRs, energy peaks and lagging user interfaces."
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
        heading={<>Why Companies Select Cogniitec to Develop iOS Apps</>}
        steps={[
          {
            number: 1,
            title: "Native iOS Engineering For Apple Users ",
            description:
              "Apple-native developers Cogniitec is partnered with because our engineers focus on Apple-native development, Swift, SwiftUI, Combine, UIKit, Auto-Layout, Core frameworks and Metal-optimised performance patterns. We do deep analysis by running Xcode Instruments on memory leaks, CPU cycles, and GPU frame timelines, network throttling, and background process behaviour. Being  the best iOS app development company in India, we  guarantee high-fidelity, stable product experience.",
          },
          {
            number: 2,
            title: "iOS Architectures Customised to Every Industry",
            description:
              "Cogniitec develops completely-customised iOS systems which correspond to the operational logic of every industry. Healthcare requires encapsulation of data with security, retailing must have pipelines of images that are fast, SaaS needs features ready in a modular way, real estate needs advanced filtering, and education platforms need smooth streaming. All its data layers, animation cycle, sync system, and routing flow are customised to the real-world performance requirements of the sector.",
          },
          {
            number: 3,
            title: "Global Delivery With iOS Release Cycles",
            description:
              "Cogniitec is being selected by businesses in India, the UAE, the UK and the USA as our iOS teams have a stable build behaviour regardless of the device, OS version and location. We combine CI/CD pipelines, TestFlight automation, certificate management, encrypted API flows, multi-device QA laboratories, and rollout systems that are production safe. This will ensure steady releases, quicker speed of iteration, and smooth compliance of the App Store to all geographies.",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default IOS;
