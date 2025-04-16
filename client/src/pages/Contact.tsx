import ContactSection from "@/components/contact/ContactSection";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Codex</title>
        <meta name="description" content="Get in touch with our team to discuss your project and discover how we can help you succeed." />
      </Helmet>
      <div className="pt-24">
        <ContactSection />
      </div>
    </>
  );
};

export default Contact;
