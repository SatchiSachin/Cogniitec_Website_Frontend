import React from "react";
import ServiceHero from "../components/service-details/ServiceHero";
import ServiceSection1 from "../components/service-details/ServiceSection1";
import ServiceSection2 from "../components/service-details/ServiceSection2";
import ServiceSection3 from "../components/service-details/ServiceSection3";
import ServiceSection4 from "../components/service-details/ServiceSection4";
import ServiceSection5 from "../components/service-details/ServiceSection5";
import ServiceSection6 from "../components/service-details/ServiceSection6";
import ServiceSection7 from "../components/service-details/ServiceSection7";

const Test = () => {
  return (
    <div className="mt-10">
      <ServiceHero />
      <ServiceSection1 />
      <ServiceSection2 />
      <ServiceSection3 />
      <ServiceSection4 />
      <ServiceSection5 />
      <ServiceSection6 />
      <ServiceSection7 />
    </div>
  );
};

export default Test;
