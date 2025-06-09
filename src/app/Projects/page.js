"use client";
import "../Components/AboutSection/AboutSection.css";
import "./Projects.css";
import ProjectCard from "../Components/Cards/ProjectCard/ProjectCard";
import VideoPlayer from "../MediaReaders/VideoPlayer";
import useMultiScrollReveal   from "@/app/CustomHooks/useMultiScrollTrigger";
import { projectList } from "../data/projectData";

 

export default function Projects() {
      const { setRef, isInView } = useMultiScrollReveal(0.6);
  return (
    <section className="project-page">
      <div className="project_page_video">
        <div className="VideoSection">
          <div className="video-background">
            <VideoPlayer
              className="video"
              src={"/videos/Video Background.mov"}
              muted
              type="video/mp4"
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>
      </div>
  <div className="project_title_section">
        <h1 className="about-section__title fade-up-element">
        Naši projekti<span>.</span>
      </h1>
 
      <div className="project_page_card_section">
             {projectList.map((project) => (
                   <ProjectCard
                     key={project.id}
                     {...project}
                     isInView={isInView}
                     setRef={setRef}
                   />
                 ))}
      </div>
       </div>
    </section>
  );
}
