import BusinessSection from "../../components/services/BusinessSection"
import ClientsMarquee from "../../components/services/ClientMarquee"
import GetStartedSection from "../../components/services/GetStartedSection"
import HeroSection from "../../components/services/HeroSerivces"
import ServiceSection from "../../components/services/ServiceSection"


const Services = () => {
    return (
        <div className='my-10'>
           <HeroSection/>
           <ClientsMarquee />
           <ServiceSection/>
           <BusinessSection/>
           <GetStartedSection/>

        </div>
    )
}

export default Services