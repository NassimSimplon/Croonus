import "./ServiceSection.css";
import React from "react";
import ServiceCard from "../Cards/ServiceCard";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";

const serviceData = [
  {
    id: 1,
    title: "B2B i B2C online prodaja",
    description: `
Tu smo da vam pomognemo kroz
profesionalnu izradu B2B i B2C
prodavnica na Croonus platformi.
`,
  },
  {
    id: 2,
    title: "SEO optimizacija",
    description: `
Optimizujemo Vašu prodavnicu za
pretraživače kako biste bili vidljivi
pravim kupcima.

`,
  },
  {
    id: 3,
    title: "Digitalni marketing",
    description: `
Tu smo da vam pomognemo kroz
najpopularnije platforme: Meta,
Google, Youtube, TikTok.
`,
  },
  {
    id: 4,
    title: "Grafički dizajn",
    description: `
Kreiramo moderan i privlačan
dizajn koji ostavlja snažan utisak
na Vaše kupce.

`,
  },
  {
    id: 5,
    title: "eCommerce strategija",
    description: `
Razvijamo prilagođene eCommerce
strategije koje povećavaju prodaju i
osiguravaju dugoročan uspeh.
`,
  },
  {
    id: 6,
    title: "Pravne regulative",
    description: `
Obezbeđujemo usklađenost 
prodavnice sa svim pravnim
regulativama za sigurno poslovanje.
`,
  },
];
const ServiceSection = () => {
  const { setRef, isInView } = useMultiScrollReveal(0.9);
  return (
    <section className="service-section">
      <h1
        className={`service-section-title ${
          isInView("service-section-title")
            ? "responsive-typewriter"
            : "hidden-element"
        }`}
        ref={setRef("service-section-title")}
        data-scroll-id="service-section-title"
      >
        Šta radimo<span>?</span>
      </h1>

      <div className="service-cards">
        {serviceData.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
