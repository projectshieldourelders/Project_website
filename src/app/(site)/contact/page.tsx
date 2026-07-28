import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import Volunteer from "@/components/SharedComponent/Volunteer";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import { assetPath } from "@/utils/assets";
export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Contact"
        bgImage={assetPath("/images/background/contact-banner-img.jpg")}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
      <Volunteer />
    </>
  );
};

export default page;
