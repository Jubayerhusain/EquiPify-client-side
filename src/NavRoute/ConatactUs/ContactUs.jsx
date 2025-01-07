import React from "react";
import ContactForm from "./../../components/ContactForm/ContactForm";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import PageTitle from "../../components/PageTitle/PageTitle";

function ContactUs() {
  return (
    <div>
      <PageTitle title={"ContactUs"}></PageTitle>
      <ContactBanner></ContactBanner>
      <ContactForm></ContactForm>
    </div>
  );
}

export default ContactUs;
