"use client";
import "../Components/AboutSection/AboutSection.css";
import "./Clients.css";
import ClientSection from "../Components/ClientSection";
import VideoPlayer from "../MediaReaders/VideoPlayer";

export default function Clients() {
  return (
    <section className="clients-page">
      <div className="clients_page_video">
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
      <div className="clients_page_section">
        <ClientSection />
      </div>
    </section>
  );
}
