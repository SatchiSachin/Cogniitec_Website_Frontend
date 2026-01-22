import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Contactus from "../pages/Contactus/Contactus.jsx";
import Navbar from "../layouts/navbar.jsx";
import Footer from "../layouts/footer.jsx";
import Services from "../pages/Services/Services.jsx";
import BlogsDetails from "../components/blog/BlogsDetails.jsx";
import About from "../pages/About/About.jsx";
import Blog from "../pages/Blogs/Blog.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import AiDataScience from "../pages/Services/AiDataScience.jsx";
import GenerativeAi from "../pages/Services/GenerativeAi.jsx";
import AgenticAi from "../pages/Services/AgenticAi.jsx";
import DataScienceMl from "../pages/Services/DataScienceMl.jsx";
import CyberSecurity from "../pages/Services/CyberSecurity.jsx";
import GCP from "../pages/Services/MulticloudandAws/Gcp.jsx";
import Azure from "../pages/Services/MulticloudandAws/Azure.jsx";
import AWS from "../pages/Services/MulticloudandAws/Aws.jsx";
import MulticloudandAws from "../pages/Services/MulticloudandAws/MulticloudandAws.jsx";
import Andriod from "../pages/Services/AppDevelopment/Andriod.jsx";
import IOS from "../pages/Services/AppDevelopment/Ios.jsx";
import Flutter from "../pages/Services/AppDevelopment/Flutter.jsx";
import ReactNative from "../pages/Services/AppDevelopment/ReactNavtive.jsx";
import Hybrid from "../pages/Services/AppDevelopment/Hybrid.jsx";
import WebApp from "../pages/Services/AppDevelopment/Webapp.jsx";
import AppDevelopment from "../pages/Services/AppDevelopment/AppDevelopment.jsx";
import WebDevelopment from "../pages/Services/WebDevelopment/WebDevelopment.jsx";
import FullStackDevelopment from "../pages/Services/WebDevelopment/FullStackDevelopment.jsx";
import EcommerceDevelopment from "../pages/Services/WebDevelopment/EcommerceDevelopment.jsx";
import DigitalMarketing from "../pages/Services/DigitalMarketing/DigitalMarketing.jsx";
import PaidAds from "../pages/Services/DigitalMarketing/PaidAds.jsx";
import SMM from "../pages/Services/DigitalMarketing/SMM.jsx";
import SEOPage from "../pages/Services/DigitalMarketing/SEOPage.jsx";
import GameDevelopment from "../pages/Services/GameDevelopment/GameDevelopment.jsx";
import AndriodGameDev from "../pages/Services/GameDevelopment/AndriodGameDev.jsx";
import VideoGameDev from "../pages/Services/GameDevelopment/VideoGameDev.jsx";
import IOSGameDev from "../pages/Services/GameDevelopment/IosGameDev.jsx";
import ThreeGameDev from "../pages/Services/GameDevelopment/3dGameDev.jsx";
import Test from "../pages/Test.jsx";

function AppRouter() {
  return (
    <>
      <Navbar />

      {/* Remove BrowserRouter here */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails/:slug" element={<BlogsDetails />} />

        <Route path="/services/ai-datascience" element={<AiDataScience />} />
        <Route
          path="/services/ai-datascience/generative-ai"
          element={<GenerativeAi />}
        />
        <Route
          path="/services/ai-datascience/agentic-ai"
          element={<AgenticAi />}
        />
        <Route
          path="/services/ai-datascience/datascience-ml"
          element={<DataScienceMl />}
        />

        <Route path="/services/cyber-security" element={<CyberSecurity />} />

        <Route
          path="/services/multicloud-awsservice"
          element={<MulticloudandAws />}
        />
        <Route path="/services/cloud/aws" element={<AWS />} />
        <Route path="/services/cloud/gcp" element={<GCP />} />
        <Route path="/services/cloud/azure" element={<Azure />} />

        <Route path="/services/app-developemnt" element={<AppDevelopment />} />
        <Route path="/services/app-developemnt/android" element={<Andriod />} />
        <Route path="/services/app-developemnt/ios" element={<IOS />} />
        <Route path="/services/app-developemnt/flutter" element={<Flutter />} />
        <Route
          path="/services/app-developemnt/react-native"
          element={<ReactNative />}
        />
        <Route path="/services/app-developemnt/hybrid" element={<Hybrid />} />
        <Route path="/services/app-developemnt/web-app" element={<WebApp />} />

        <Route path="/services/web-developemnt" element={<WebDevelopment />} />
        <Route
          path="/services/web-developemnt/full-stack-developmet"
          element={<FullStackDevelopment />}
        />
        <Route
          path="/services/web-developemnt/e-commerce-development"
          element={<EcommerceDevelopment />}
        />

        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/digital-marketing/paid-ads"
          element={<PaidAds />}
        />
        <Route path="/services/digital-marketing/seo" element={<SEOPage />} />
        <Route path="/services/digital-marketing/smm" element={<SMM />} />


           <Route path="/services/game-development" element={<GameDevelopment />} />
           <Route path="/services/game-development/android-game-development" element={<AndriodGameDev />} />
           <Route path="/services/game-development/3d-game-development" element={<ThreeGameDev />} />
           <Route path="/services/game-development/ios-game-development" element={<IOSGameDev />} />
           <Route path="/services/game-development/video-game-development" element={<VideoGameDev />} />
        <Route path="/test" element={<Test />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default AppRouter;
