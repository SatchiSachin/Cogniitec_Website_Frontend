import { Helmet } from "react-helmet";
import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const Andriod = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Structured Android App Development by Cogniitec</title>
        <meta
          name="description"
          content="Cogniitec begins Android app development with in-depth analysis of client needs and audience to ensure effective, user-focused solutions."
        />
      </Helmet>
      <HeroSection
        title={<>Cogniitec’s Android Apps Optimized for Speed and Stability</>}
        bullets={[
          "Layers of Device-Wide Optimization.",
          "Native Android Engineering Accuracy.",
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          {
            text: "APK Insights",
            className: "top-5 right-0 bg-yellow-400 text-black",
          },
          {
            text: "Crash Shield",
            className: "top-28 left-4 bg-green-500 text-white",
          },
          {
            text: "Frame Stability",
            className: "bottom-16 right-2 bg-purple-600 text-white",
          },
          {
            text: "Smart Optimisation",
            className: "bottom-4 left-4 bg-blue-500 text-white",
          },
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={<>Android App Development- Key Solutions of Cogniitec</>}
        card1Title="Native Architecture and Kotlin Modular Layers"
        card1Description="Cogniitec,the best android app development company in India develops Android applications with modular Kotlin architecture built around MVVM, MVI, and clean domain layers to minimize conflicts in the build-time and to enhance the performance of the loads.We optimize coroutines, state management, background services, and dependency graphs so that the app can have predictable behavior when using different OS versions and hardware configurations and build cross platform apps."
        card1ButtonText="Learn more"
        card2Title="Device-Specific Performance Tuning & Compatibility Pipelines
"
        card2Description="Our team runs applications on 50+ device configurations, CPU levels, and OEM-specific limitations to remove thermal throttling, UI tearing, frame drops, and permission failures. Android Profiler, Systrace, and GPU rendering metrics are used to tune every subsystem, including the media codecs up to battery use, and RAM usage. Such accuracy modifications make Cogniitec the best android app development company in India towards high-performance stable Android builds on a large scale"
        card2ButtonText="Learn more"
        card3Title="Cloud APIs, Local Data Processing and Multi-layer Synchronous Systems"
        card3Description="Cogniitec applies to secure API integration with Retrofit, Ktor, WebSockets and local data storage control based on encrypted Room databases and offline-first sync patterns. We build fallback logic, caching levels, and data recovery routes to prevent crashes and data loss even in low-end machines or unreliable networks. It is this reliability that has made enterprises turn to Cogniitec as the leading web development firm in India as well as thebest android app development company in India to develop system critical mobile products.
"
        card3ButtonText="Learn more"
        counter1Value={250}
        counter1Label=" Android Apps Delivered Across Industries"
        counter2Value={65}
        counter2Label="Reduction in ANRs Using AI Diagnostics"
        counter3Value={40}
        counter3Label="Improved Multi-Device Stability Scores"
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
        topHeading={<>Android Development Challenges</>}
        sec1Title="Hardware Fragmentation"
        sec1Description="Businesses have a hard time dealing with thousands of devices, with varying resolutions, types of GPUs, memory limit, and OEM constraints. Without profound compatibility engineering, the app will fail, consume battery, slow down or act in different ways on different devices- affecting ratings and retention."
        sec1ButtonText="Unpredictable cloud costs"
        sec2Title=" Fluctuating Network and resource limitation"
        sec2Description="Android users tend to work with erratic network conditions. Applications that do not have an appropriate offline logic, caching, and background sync behaviour experience crashes, failed transactions and lost user actions."
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
          <>Why Leading Companies prefer Cogniitec in Android app Development</>
        }
        steps={[
          {
            number: 1,
            title: "Engineering Built to Real Android Performance",
            description:
              "Brands also work with Cogniitec due to the fact that our engineers are aware of the real world behaviour of Android devices, chipsets, OEM variations and updates in OS. We develop apps that are stable, responsive and consistent at scale using Jetpack Compose, Kotlin Coroutines, Retrofit/OkHttp and deep profiling with Android Studio Instruments. This is one of the engineering fields that make enterprises regard us as the most reliable and performance based android development company in India.",
          },
          {
            number: 2,
            title: "Industry Specific Android Architectures",
            description:
              "Cogniitec develops Android architectures that meet operational needs of each industry such as secure data flows in healthcare, fast catalogue rendering in retail, high-precision search in real-estate, stable streaming in education and modular feature evolution in SaaS. All workflows, cache paths and API loops are tailored according to throughput, compliance and experience standards, which enhances our role as the best android app development company in India to achieve high-impact solutions in industries.",
          },
          {
            number: 3,
            title: "Global Delivery With Equipment-Ready Launch Times",
            description:
              "Companies in India, the UAE, UK and the USA prefer Cogniitec due to the fact that our Android teams are predictable with regards to the schedule of release in various device settings. Our CI/CD pipelines, multi-device testing laboratories, automated UI flows, performance monitoring, and Play Store-ready build systems ensure that our system is stable at all times, even when under heavy load. All of the regions are given a standard quality and accelerated iterations and launch preparedness",
            buttonText: "Start Now",
          },
        ]}
      />
    </div>
  );
};

export default Andriod;
