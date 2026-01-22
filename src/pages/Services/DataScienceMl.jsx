import BusinessSection from "../../components/services/BusinessSection";
import ClientsMarquee from "../../components/services/ClientMarquee";
import GetStartedSection from "../../components/services/GetStartedSection";
import HeroSection from "../../components/services/HeroSerivces";
import ServiceSection from "../../components/services/ServiceSection";
import img1 from "../../assets/Images/services/busi1 (1).png";
import img2 from "../../assets/Images/services/busi2.png";

const DataScienceMl = () => {
  return (
    <div className="my-10">

      <HeroSection
        title={
          <>
            Cogniitec Data Science & Machine Learning Solutions Engineered for Predictive Intelligence
          </>
        }
        bullets={[
          "Enterprise-Grade Data & ML Engineering",
          "High-Performance Models for Smarter Decisions"
        ]}
        buttonText="Request a Demo"
        floatingLabels={[
          { text: "AI-Ready Data Engineering", className: "top-5 right-0 bg-yellow-400 text-black" },
          { text: "On-Demand ML Assistance", className: "top-28 left-4 bg-green-500 text-white" },
          { text: "Efficient, Scalable ML Solutions", className: "bottom-16 right-2 bg-purple-600 text-white" },
          { text: "Customised DS & ML Development", className: "bottom-4 left-4 bg-blue-500 text-white" }
        ]}
      />

      <ClientsMarquee />

      <ServiceSection
        heading={
          <>
            Cogniitec Advanced Data Science & ML Solutions
          </>
        }

        card1Title="Predictive Modelling & Forecasting"
        card1Description="Cogniitec uses the method of Expense Value Measurement, which means aligning business performance with the expected outcome of the analysis. Using this method, Cogniitec builds analytical systems using a system of management of data, validation processes and assessment of the performance of data science and machine learning solutions at enterprise-level scale for producing results of accuracy, predictability and forecast reliability."
        card1ButtonText="Learn more"

        card2Title="Automated Classification & Recommendations"
        card2Description="Cogniitec automates the ML/Big Data pipelines by providing pipeline management, uploading data into databases or data warehouses, data transformation, deploying the data, and continuous monitoring and analysis of the data along with the identification of changes in the characteristics of the data, called 'drift'. As a result, Cogniitec provides organisations with the means of standardising, accelerating and creating long-term reliability in their use of data science and machine learning solutions."
        card2ButtonText="Learn more"

        card3Title="Personalisation & Decision Systems"
        card3Description="Cogniitec has developed an iterative process for refining decision processes. Through iterative model tuning, we establish the frameworks for decision-making in the most effective way based on behavioural patterns, feedback, and optimising their efficiency. As a data science and machine learning organisation, Cogniitec has developed sophisticated recommendation engines and intelligent models to assist customers in their decision-making by adapting to the behaviour of users and their organisations. "
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
            Key Challenges in Data Science & ML Adoption
          </>
        }

        sec1Title="Low-Quality Data Impacting Model Accuracy"
        sec1Description="Even though many companies create prototypes of machine learning solutions successfully, those prototypes oftentimes don’t lead to practical solutions, leaving many companies without the ability to take advantage of these models within their operations. If data science and machine learning systems are not placed within a disciplined engineering framework, then they will remain unused or not be effective as designed."
        sec1ButtonText="View case study"

        sec2Title="Difficulty Operationalising ML Models at Scale"
        sec2Description="The majority of organizations fail to successfully transition their machine-learning prototype work to production. Organizations that do not have an effective machine-learning engineering process will likely have their machine-learning (ML) models sit idle and will miss the opportunity to connect them to their real-world workflows."
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
              "Organisations rely on Cogniitec to hire data science and machine learning specialist who can build accurate, reliable, and scalable predictive systems for enterprise environments. As a trusted data science machine learning company in india, our expert engineers ensure every model is designed for high performance and long-term operational value.",
          },
          {
            number: 2,
            title: "AI Industry Expertise",
            description:
              "Cogniitec supports healthcare, retail, education and the enterprise with ML-powered analytics, personalization, automation, forecasting and decision support for their most critical business operations.",
          },
          {
            number: 3,
            title: "Global Presence",
            description:
              "Cogniitec leverages the knowledge developed by its engineering process to consistently provide enterprise customers in India, the United Kingdom, United States, and Australia with high-quality service. The global capabilities obtained through this process enhance Cogniitec's reputation as an internationally recognised data science and machine learning provider.",
            buttonText: "Start Now",
          },
        ]}
      />

    </div>
  );
};

export default DataScienceMl;
