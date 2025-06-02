import "../Components/AboutSection/AboutSection.css";
import "./blog.css";
import BlogCard from "../Components/BlogCard";
import VideoPlayer from "../MediaReaders/VideoPlayer";

const blogData = [
  {
    id: 1,
    src: "/images/croonus-dobitnik-hot.png",
    type: "png",
    alt: "blog card image",
    title: `Croonus – dobitnik Hot Spot eCommerce
Awards za 2022. godinu`,
  },
  {
    id: 2,
    src: "/images/koje-sve-funkcije-tr.png",
    type: "png",
    alt: "blog card image",
    title: `Koje sve funkcije treba da sadrži uspešna
online prodavnica?
`,
  },
  {
    id: 3,
    src: "/images/croonus-dobitnik-hot.png",
    type: "png",
    alt: "blog card image",
    title: `Najbolji primeri inostranih online
prodavnica
`,
  },
  {
    id: 4,
    src: "/images/croonus-dobitnik-hot.png",
    type: "png",
    alt: "blog card image",
    title: `Croonus – dobitnik Hot Spot eCommerce
    Awards za 2022. godinu`,
  },
  {
    id: 5,
    src: "/images/koje-sve-funkcije-tr.png",
    type: "png",
    alt: "blog card image",
    title: `Koje sve funkcije treba da sadrži uspešna
    online prodavnica?
    `,
  },
  {
    id: 6,
    src: "/images/croonus-dobitnik-hot.png",
    type: "png",
    alt: "blog card image",
    title: `Najbolji primeri inostranih online
    prodavnica
    `,
  },
  {
    id: 7,
    src: "/images/croonus-dobitnik-hot.png",
    type: "png",
    alt: "blog card image",
    title: `Croonus – dobitnik Hot Spot eCommerce
        Awards za 2022. godinu`,
  },
  {
    id: 8,
    src: "/images/koje-sve-funkcije-tr.png",
    type: "png",
    alt: "blog card image",
    title: `Koje sve funkcije treba da sadrži uspešna
        online prodavnica?
        `,
  },
  {
    id: 9,
    src: "/images/croonus-dobitnik-hot.png",
    type: "png",
    alt: "blog card image",
    title: `Najbolji primeri inostranih online
        prodavnica
        `,
  },
];

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
