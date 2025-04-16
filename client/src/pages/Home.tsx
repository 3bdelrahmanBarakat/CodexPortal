import HeroSection from "@/components/home/HeroSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import ServicesSection from "@/components/services/ServicesSection";
import ContactSection from "@/components/contact/ContactSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Codex - Innovating the Digital Future</title>
        <meta name="description" content="Codex is a software development company crafting elegant solutions to complex problems, turning your vision into digital reality with precision and expertise." />
      </Helmet>
      <HeroSection />
      <WhoWeAre />
      <FeaturedProjects />
      <ClientTestimonials />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;
