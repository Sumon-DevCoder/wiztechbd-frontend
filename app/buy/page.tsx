import EssientialTools from "../components/buy/essientialTools/EssientialTools";
import Property from "../components/buy/property/Property";
import ServicesOverview from "../components/buy/servicesOverview/ServicesOverview";
import StatsSection from "../components/buy/stats/StatsSection";
import Testimonial from "../components/buy/testimonial/Testimonial";

const Buy = () => {
  return (
    <div>
      <Property />
      <StatsSection />
      <ServicesOverview />
      <Testimonial />
      <EssientialTools />
    </div>
  );
};

export default Buy;
