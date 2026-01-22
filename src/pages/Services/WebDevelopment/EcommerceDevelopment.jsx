import BusinessSection from "../../../components/services/BusinessSection";
import ClientsMarquee from "../../../components/services/ClientMarquee";
import GetStartedSection from "../../../components/services/GetStartedSection";
import HeroSection from "../../../components/services/HeroSerivces";
import ServiceSection from "../../../components/services/ServiceSection";
import img1 from "../../../assets/Images/services/busi1 (1).png";
import img2 from "../../../assets/Images/services/busi2.png";

const EcommerceDevelopment = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
            End-to-End E-Commerce Development Company for Scalable Online Sales 
          </>
        }
        bullets={[
          "Frictionless, secure checkout",
          "Strong product flows which drive sales"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "High-Speed Catalogs", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "Secure Checkout Flow", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Adaptive Product Search", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "Smart Inventory Sync", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
           Cogniitec’s E-Commerce Development Services in India
          </>
        }

        card1Title="Storefront Experience Engineering -"
        card1Description=" Cogniitec provides eCommerce Development Services to develop product first storefronts, improving discoverability and simplifying navigation, while reducing friction along the way to making a purchase. All components of the storefront: product cards, filters, and search are designed and developed to deliver clarity and fast response time to users. This precision is what makes Cogniitec the development solution of choice for brands throughout India."
        card1ButtonText="Learn more"

        card2Title="Commerce Architecture & Platform Engineering"
        card2Description=" We provide eCommerce Development Solutions For India on scalable, modular architecture that features high traffic capability and secure transactions with seamless integrations. Cogniitec develops and engineers stable, performance-oriented commerce platforms that incorporate automated workflows, optimized searching, and dependable payment systems that allow businesses to operate without interruption."
        card2ButtonText="Learn more"

        card3Title="Conversion Rate Optimization & Performance Improvement"
        card3Description="Cogniitec's eCommerce Development Services help strengthen each phase of the customer's journey by improving speed, flow of navigation to checkout, and search accuracy and results. Our storefronts consistently convert visitors into buyers and provide seamless scaling opportunities for all businesses located in India through improved user experience and streamlined micro interactions."
        card3ButtonText="Learn more"

        counter1Value={20}
        counter1Label=" E-Commerce Platforms Built Across Industries"
        counter2Value={60}
        counter2Label="Increase in High-Intent Buyer Conversions"

        counter3Value={50}
        counter3Label="Reduction in Page Abandonment With AI Insights"
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
          Core E-Commerce Development Challenges 
          </>
        }

        sec1Title="Advanced Product Management"
        sec1Description="The problems of disorganized product information (unclear categories, poor update speed, and inaccurate stock) hurt operational efficiency and create confusion for customers. When a product is disorganized, this leads to failure on the part of the customer to complete their orders, and businesses become dependent on developers for minor adjustments. At Cogniitec, we offer eCommerce development services that help companies sort out their product information, streamline their updating processes, and ultimately give them greater control over the creation and management of their product catalogs."
        sec1ButtonText="Unpredictable cloud costs"

        sec2Title="Inadequate Checkout Experience"
        sec2Description="Outdated payment pages, unclear checkout processes, and a lack of an order confirmation page create an instant barrier for customers during the purchasing process, resulting in lost revenue for many businesses. The online marketplace is an integral part of the overall customer experience, and if a company's checkout process isn't designed to provide customers with confidence, businesses are losing money. At Cogniitec, we have developed a number of different e-commerce development solutions in India that are designed to create a better checkout experience for customers by enhancing their transaction closure and trust signals and providing multiple safe ways to pay."
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
        heading={
          <>
            Why Companies Prefer Using Cogniitec E-Commerce Development

          </>
        }
        steps={[
          {
            number: 1,
            title: "Conversion-Driven Store Engineering",
            description:
              "Hire Cogniitec for eCommerce development and get platforms engineered for performance across product discovery, search, cart behaviour, and checkout. Our eCommerce development services in India are driven by real user behaviour, scroll patterns, friction points, load speed, and payment flow, ensuring solutions that convert consistently and scale seamlessly.",
          },
          {
            number: 2,
            title: "E-Commerce Architectures Designed to All Industries",
            description:
              "Cogniitec develops industry-focused solutions in which retail services must use variant-heavy catalogs, grocery products must use replenishment-fast, fashion products must use visual-first displays, and enterprise stores must use ERP-level integrations.Inventory logic, pricing engines, product mapping, and omnichannel behaviour are set on each e-commerce development stack.This flexibility will enable us to be the best ecommerce development service in India with respect to different business models and market trends.",
          },
          {
            number: 3,
            title: "Globe Delivery With Stable and High-Performance",
            description:
              "Cogniitec serves its clients in India, the UK, USA and Australia with a delivery structure that guarantees predictable releases and easy scalability.The development processes of our e-commerce are built around CI/CD pipelines, security-enhanced payment gates, optimised caches and API monitoring traffic to ensure the continuity of storefront operations.This standardization on a global scale will be able to guarantee all of its brands an infrastructure that performs well enough to have real buyers on real scale.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default EcommerceDevelopment;
