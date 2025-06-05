"use client";
import "./form.css";
import VideoPlayer from "../MediaReaders/VideoPlayer";
import { useEffect } from "react";

export default function FormPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "143558557",
          formId: "6f1c04f1-6bf3-4c0a-aef3-b702dcb01e31",
          region: "eu1",
          target: "#hubspotForm",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="form-page">
      <div className="form_page_video">
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
      <div className="form_page_section">
        <div id="hubspotForm">sastanak </div>
      </div>
    </section>
  );
}
