import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../../components/contact_form/contact_us";
import ContactInfo from "../../components/contact_form/ContactInfo";
import NewsletterSection from "../../components/contact_form/NewsletterSection";

const Contactus = () => {
  return (
    <>
      <div className="mt-10">
        <Helmet>
          <title>Get Expert IT & Marketing Support India | Cogniitec </title>
          <meta
            name="description"
            content="Partner with India's best. Contact Cogniitec for a free consultation on software development, SEO, and AI integration to scale your business today."
          />
        </Helmet>
        <ContactForm />
        <ContactInfo />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Contactus;
