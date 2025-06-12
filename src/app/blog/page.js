"use client";
import "../Components/AboutSection/AboutSection.css";
import "./blog.css";
import BlogCard from "../Components/BlogCard";
import VideoPlayer from "../MediaReaders/VideoPlayer";
import { blogData } from "../data/BlogData";

export default function Blog() {
  return (
    <section className="blog-page">
      <div className="blog_page_video">
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
      <div className="blog_title_section">
        <h1 className="about-section__title fade-up-element">
          Croonus Blog<span>.</span>
        </h1>

        <div className="blog_page_card_section">
          {blogData?.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
