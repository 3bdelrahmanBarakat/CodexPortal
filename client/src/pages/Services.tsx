import ServicesSection from "@/components/services/ServicesSection";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Codex</title>
        <meta name="description" content="Explore our range of technology services including web development, mobile apps, AI & automation, UX/UI design, and software consulting." />
      </Helmet>
      <div className="pt-24">
        <ServicesSection />
      </div>
    </>
  );
};

export default Services;
