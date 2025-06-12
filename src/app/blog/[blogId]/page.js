"use client";
import "../../Components/AboutSection/AboutSection.css";
import "./blogDetails.css";
import ArrowIcon from "@/app/Icons/ArrowIcon";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import VideoPlayer from "../../MediaReaders/VideoPlayer";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { blogData } from "@/app/data/BlogData";

export default function BlogDetails() {
  const params = useParams();
  const blogId = params.blogId;
  const [blog, setBlog] = useState(null);
  const widthRef = useRef(null);

  useEffect(() => {
    if (blogId) {
      const foundBlog = blogData.find((x) => x.id === Number(blogId));
      setBlog(foundBlog);
    }
  }, [blogId]);

  const images = [blog?.src, blog?.src2].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="blogDetails-page">
      <div className="blogDetails_page_video">
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

      <div className="blogDetails_title_section">
        <div className="blogDetails_page_card_section">
          <div className="blogDetails_page_card_section_block" ref={widthRef}>
            <h1 className="blogDetails-title  ">
              {blog?.title}
              <span>.</span>
            </h1>

            <div className="blog-slider-container   ">
              <button
                className="nav-button scroll-button left-arrow"
                onClick={prevImage}
                disabled={currentIndex === 0}
                style={{
                  opacity: currentIndex === 0 ? 0.3 : 1,
                  cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                <ArrowIcon />
              </button>

              <div className="slider-window">
                <div
                  className="slider-track"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {images.map((img, index) => (
                    <div key={index} className="slider-item">
                      <ResponsiveImage
                        type={String(blog?.type)}
                        width={490}
                        height={270}
                        webpSrc={img}
                        fallbackSrc={img}
                        alt={`${blog?.alt}_${blog?.id}_${index}`}
                        className="blog_card_image"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="nav-button scroll-button "
                onClick={nextImage}
                disabled={currentIndex === images.length - 1}
                style={{
                  opacity: currentIndex === images.length - 1 ? 0.3 : 1,
                  cursor:
                    currentIndex === images.length - 1
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                <ArrowIcon />
              </button>
            </div>

            <h1 className="blog_detail_sub">1. mart 2023</h1>
            <p className="blog_detail_auth">Author: Nockolina Stankovic</p>
          </div>

          <div className="blogDetails_page_details_txt fade-up-element">
            <p>
              Nagradom &quot;Hot Spot eCommerce Awards 2022&quot;, u kategoriji
              &quot;Najbolje Web Shop Rešenje&quot;, koju je uručila eCommerce
              Asocijacija Srbije, kompaniji Croonus Technologies dodeljeno je
              značajno priznanje za njen izvanredan doprinos online
              prodavnicama. Ova svečana ceremonija, održana 26. januara u
              Beogradu, obeležena je glasovima publike i stručnog žirija koji su
              prepoznali Croonus Technologies kao lidera u svojoj industriji.
            </p>
            <p>
              Hot Spot eCommerce Awards je istaknuti događaj u sferi elektronske
              trgovine u Srbiji, okupljajući najistaknutije predstavnike
              kompanija i različite sektore koji su ostvarili izvanredne
              rezultate svojim angažmanom i posvećenošću. Ovogodišnje priznanje,
              dodeljeno Croonus Technologies, izražava napore i kvalitet njenog
              rada u sektoru elektronske trgovine.
            </p>
            <p>
              U fokusu ovogodišnje ceremonije je naglašen cilj promoviranja
              efikasne i sigurne dostave, kao i bezbednih internet transakcija,
              čime se podstiče razvoj online kupovine i digitalizacije društva.
              Ova nagrada predstavlja podsticaj svim kompanijama koje su
              usmerene ka online poslovanju, a koncept ceremonije je dizajniran
              da istakne koliki je uticaj učesnika na razvoj online kupovine u
              Srbiji tokom prethodne godine.{" "}
            </p>
            <p>
              Podsećamo da je kompanija Croonus Technologies prisutna na tržištu
              već 8 godina, kontinuirano pružajući visokokvalitetne proizvode i
              usluge. U poslednje 3 godine, posatli su prepoznatljivi kao jedan
              od najuspešnijih implementatora online prodavnica, što je dodatno
              potvrđeno ovom prestižnom nagradom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
