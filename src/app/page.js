"use client";
import AboutSection from "./Components/AboutSection";
import ClientSection from "./Components/ClientSection/ClientSection";
import ProjectSection from "./Components/ProjectSection";
import ServiceSection from "./Components/ServiceSection";
import TestimonialSection from "./Components/TestimonialSection";
import VideoSection from "./Components/VideoSection";
import YoutubeModal from "./Components/YoutubeModal";
import useIsOpenElement from "./CustomHooks/useIsOpenElement";

 
export default function Home() {
  const { isOpen, openElement, closeElement } = useIsOpenElement();

  return (
    <section>
      <YoutubeModal isOpen={isOpen} onClose={closeElement} />
      <VideoSection openElement={openElement} />
      <AboutSection />
      <ServiceSection />
      <ClientSection />
      <ProjectSection />
      <TestimonialSection />
    </section>
  );
}
