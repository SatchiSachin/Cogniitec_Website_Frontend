import BusinessSection from "../../components/services/BusinessSection";
import ClientsMarquee from "../../components/services/ClientMarquee";
import GetStartedSection from "../../components/services/GetStartedSection";
import HeroSection from "../../components/services/HeroSerivces";
import ServiceSection from "../../components/services/ServiceSection";
import img1 from "../../assets/Images/services/busi1 (1).png";
import img2 from "../../assets/Images/services/busi2.png";

const GenerativeAi = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
            Cogniitec Generative AI Solutions Built for Enterprise-Grade Content Automation
          </>
        }
        bullets={[
          "Enterprise-Grade Generative AI Engineering",
          "High-Performance Content Automation Across All Formats"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "AI-Driven Software Solutions", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "Instant Support", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Affordable & Transparent Pricing", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "Custom-Built Software for Your Business", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
            Cogniitec Advanced Generative AI Solutions
          </>
        }

        card1Title="Text & Document Generation"
        card1Description="Cogniitec builds generative AI models that are aligned to specific domains through structured prompt flow, retrieval layers, and continuous validation cycles. As one of the largest generative AI development companies in India, we make sure every text generation system can be integrated into an enterprise application so organisations have confidence in the consistency, governance, and quality of outputs from their automata. This ensures organisations can deploy GenAI solutions for the automated creation of documentation, communication, and reporting."
        card1ButtonText="Learn more"

        card2Title="Image & Visual Generation"
        card2Description="The primary focus of Cogniitec for developing visual generative AI systems involves multi-modal data preparation, optimisation of diffusion models, and stringent testing of visual content for brand alignment. This engineering approach allows for the production of images and videos at an enterprise level of quality while still allowing for creative flexibility from the internal creative teams. Visual generative AI models include layers of safety, use restrictions, and a scalable rendering pipeline, so internal creative teams can fully automate the creation of creative assets while maintaining control and quality."
        card2ButtonText="Learn more"

        card3Title="Synthetic Data Generation Solutions"
        card3Description="Cogniitec uses structured data profiling, pattern extraction, and statistical alignment to design synthetic data pipelines. Our generative AI models ensure datasets remain realistic, privacy-safe, and performance-ready for ML training. This approach helps organisations overcome data scarcity, reduce risk, and improve predictive accuracy. By engineering synthetic datasets through controlled modelling, evaluation, and governance, we ensure enterprises can confidently scale their AI programs."
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
            Key Challenges in Generative AI Adoption
          </>
        }

        sec1Title="Data Quality & Governance Limitations"
        sec1Description="Most organisations working on their generative AI implementation experience difficulties due to poor-quality datasets and not having a consistently governed way of collecting data. Unreliable, unstructured datasets will result in unreliable outputs, increased risk to the organisation from using generative ai, and low levels of trust between the user of the system and the generated content. By partnering with an experienced generative AI software development firm in India, enterprises can establish more effective governance models for managing quality datasets and create better expected outcomes for their generative ai projects."
        sec1ButtonText="View case study"

        sec2Title="Integration Complexity & Workflow Readiness"
        sec2Description="The integration of generative AI into the daily operations of businesses can be problematic, despite how efficiently the models are able to perform when they are run independently. In order to obtain maximum scalability of the generative AI, organisations typically face issues with the integration of legacy software systems, fragmented tools used by employees to perform their jobs, and poorly defined operational processes."
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
            Why Leading Enterprises Partner With Us
          </>
        }
        steps={[
          {
            number: 1,
            title: "AI Talent On Demand",
            description:
              "Cogniitec is a trusted generative AI development company in India that provides staff augmentation support for businesses to hire generative AI developers to help them create systems that generate text, images, audio, and automate the creation of Pilots that (a) deliver consistent content, and (b) align with the organisation's brand.",
          },
          {
            number: 2,
            title: "AI Industry Expertise",
            description:
              "Cogniitec has provided companies within the healthcare, retail, educational, and large enterprise markets. Our proven abilities in GAI capture the type of innovation organisations require within their specific industries and allow for rapid scale across the globe with industry specificity.",
          },
          {
            number: 3,
            title: "Serving Global AI Teams",
            description:
              "As part of our work to develop generative AI workflows for organisations throughout India, the UK, the US, and Australia. Our generative AI frameworks are designed to allow firms worldwide to reliably leverage production-ready generative AI solutions for every application.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default GenerativeAi;
