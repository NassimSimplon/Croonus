"use client";
import "../Components/AboutSection/AboutSection.css";
import "./Kvaliteta.css";
import VideoPlayer from "../MediaReaders/VideoPlayer";

export default function Kvaliteta() {
   
  return (
    <section className="kvaliteta-page">
      <div className="kvaliteta_page_video">
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
  <div className="kvaliteta_title_section">
        <h1 className="about-section__title fade-up-element">
        POLITIKA KVALITETA<span>.</span>
      </h1>
<div className="kvaliteta_text_section">
 
 <p className="kvaliteta_paragraph fade-up-element">
    Stalno poboljšavanje nivoa kvaliteta implementiranih rešenja i pruženih usluga i uspešno poslovanje, trajno su opredeljenje svih zaposlenih
<span className="kvaliteta_date">&bdquo;CROONUS TECHNOLOGIES&quot; DOO Čačak</span>,&nbsp;što se postiže:
<br/><br/>
• Izradom rešenja i pružanjem usluga kojima se zadovoljavaju zahtevi, potrebe i očekivanja korisnika i drugih zainteresovanih strana,
<br/><br/>
• Stalnim poboljšavanjem svih naših procesa, stalnim praćenjem zadovoljstva naših klijenata i ostvarivanja njihovih specifičnih zahteva,

<br/><br/>
• Obavezom rukovodstva <span className="kvaliteta_date">„CROONUS TECHNOLOGIES&quot; DOO Čačak</span> da stvaranjem i održavanjem radne atmosfere stimuliše zaposlene
na svim nivoima da u potpunosti i aktivno učestvuju u ostvarenju poslovnih ciljeva <span className="kvaliteta_date">„CROONUS TECHNOLOGIES&quot; DOO Čačak</span>,

<br/><br/>
• Primenom Zakona i standarda Sistema menadžmenta kvalitetom,
<br/><br/>
Stalnim planskim obrazovanjem, obukom i motivisanjem zaposlenih, u cilju efektivnog, efikasnog i kvalitetnog izvršavanja postojećih i novih poslova,

<br/><br/>
 • Primenom procesnog pristupa u upravljanju svim resursima i aktivnostima i upravljanje sistemom međusobno povezanih procesa,
<br/><br/>
• Donošenje poslovnih i drugih odluka na osnovu analize podataka i potpunih informacija,
<br/><br/>
• Identifikacijom rizika po poslovanje i primena preventivnih mera za smanjenje i minimiziranje njihovih uticaja na zadovoljistvo korisnika
i održivo poslovanje preduzeća,
<br/><br/>
• Stalnim unapređenjem odnosa i razvijanjem partnerstva sa zainteresovanim stranama, čime se doprinosi optimalnom zadovoljenju
obostrani interes i potpunom zadovoljenju korisnika našim proizvodima i uslugama,
<br/><br/>
• Saradnjom sa naučnim i stručnim organizacijama.
<br/><br/><br/>
Politika sistema menadžmenta kvaliteta <span className="kvaliteta_date">„CROONUS TECHNOLOGIES&quot; DOO Čačak</span> je sastavni deo ukupne poslovne politike.











<br/><br/><br/>
<span className="kvaliteta_date">Čačak, 11.03.2022.</span>
<br/>
<span className="kvaliteta_date">Stefan Ćebić, Direktor

</span >
 </p>

</div>
       </div>
    </section>
  );
}
