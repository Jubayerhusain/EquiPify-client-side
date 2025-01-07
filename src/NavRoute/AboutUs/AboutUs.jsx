import React from "react";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import WhyEquipify from "./../../components/WhyChoose/WhyChoose";
import FAQSection from "../../components/FAQSection/FAQSection";
import PageTitle from "../../components/PageTitle/PageTitle";

function AboutUs() {
  return (
    <div>
      <PageTitle title={"AboutUs"}></PageTitle>
      <HeroAbout></HeroAbout>
      <WhyEquipify></WhyEquipify>
      <FAQSection></FAQSection>
    </div>
  );
}

export default AboutUs;
