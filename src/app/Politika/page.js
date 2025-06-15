"use client";
import "../Components/AboutSection/AboutSection.css";
import "./Politika.css";
import VideoPlayer from "../MediaReaders/VideoPlayer";

export default function Politika() {
   
  return (
    <section className="politika-page">
      <div className="politika_page_video">
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
  <div className="politika_title_section">
        <h1 className="about-section__title fade-up-element">
        POLITIKA BEZBEDNOSTI INFORMACIJA<span>.</span>
      </h1>
<div className="politika_text_section">
 
 <p className="politika_paragraph fade-up-element">
Politika bezbednosti informacija ima za cilj da na jasan i nedvosmislen način ukaže na opredeljenost kompanije
  &quot;<span className="politika_date">Croonus Technologies DOO Čačak</span> da kontinuirano sprovodi i unapređuje svoje poslovanje u skladu sa zahtevima međunarodnog
standarda  <span className="politika_date">ISO/IEC 27001:2013</span> (Sistem menadžmenta bezbednošću informacija -ISMS), uvažavanjem načela očuvanja poverljivosti,
dostupnosti i integriteta informacija i informacionih resursa,
i na taj način obezbedi i garantuje13.  
<br/><br/>
• zaštitu informacija i ostalih informacionih resursa (ljudi, procesi, procedure, usluge, hardver, softver, infrastruktura, oprema.),
od svih unutrašnjih ili spoljašnjih, namernih ili slučajnih pretnji (računarske prevare, špijunaže, hakerski napadi, virusi,
poplave, požari, zemljotresi, itd), kroz uspostavljanje, implementaciju, primenu, praćenje, preispitivanje, održavanje i poboljšanje ISMS;
<br/><br/>

• kontinuitet poslovanja;
<br/><br/>
• minimizovanje eventualne poslovne štete sprečavanjem bezbednosnih incidenata, odosno svođenja njihovog uticaja na minimalnu meru;
<br/><br/>
čime poboljšava svoj korporativni imidž, rentabilnost i konkuretnu prednost.
<br/>
Navedeno se obezbeđuje (sprovodi) kroz:

<br/><br/>

• Liderski odnos osnivača <span className="politika_date">Croonus Technologies DOO Čačak</span> po pitanju uključivanja svih zaposlenih, na svim nivoima,
u ostvarivanje ciljeva kompanije, koji sveukupno vode ka visokom nivou bezbednosti informacija;
<br/><br/>• Usklađenost sa strateškim poslovnim planovima i ciljevima, relevantni zakonskim, regulatornim i ugovornim zahtevima,
kao i sa zahtevima standarda ISO/IEC 27001:2013;,
<br/><br/>• Bezbednosnu kulturu i svest zaposlenih o njihovoj ulozi i odgovornostima;

<br/><br/>
• Uvažavanje interesa poslovnih klijenata, internih i eksternih korisnika i ostalih zainteresovanih strana;
<br/><br/>
• Sprečavanje neautorizovanog pristupa informacionim resursima;
<br/><br/>• Održavanje i unapređenje sistema bezbednosti zaposlenih, klijenata, informacija i imovine;
<br/><br/>
• Jasnu organizaciju i podelu odgovornosti u pogledu bezbednosti informacija;
<br/><br/>• Upravljanje rizicima u cilju smanjenja uticaja pretnji po bezbednost;
<br/><br/>• Upravljanje kriznim situacijama;
<br/><br/>• Kontinuirano preispitivanja i poboljšavanja.
<br/><br/>Svi zaposleni, konsultanti, eksterni konsultanti, privremeno zaposleni, izvođači i podizvođači i treća lica sa kojima
<span className="politika_date">Croonus Technologies DOO Čačak</span> ima bilo kakvu poslovnu saradnju, treba da budu svesni svojih obaveza i odgovornosti
, definisanih u okviru njihovih opisa poslova ili ugovora, i da postupaju u skladu sa ovom politikom.
<br/><br/>Oni su odgovorni za očuvanje poverljivosti, dostupnosti i integriteta informacija i ostalih informacionih resursa
<span className="politika_date">Croonus Technologies DOO Čačak</span> u svim fazama njihovog životnog ciklusa, kao i da svojim postupcima ne naruše njihovu bezbednost.

<br/><br/>
Osnivači <span className="politika_date">Croonus Technologies DOO Čačak</span> su odgovorni za primenu politike bezbednosti informacija usvojim poslovnim procesima,
<br/>kao i za njenu primenu od strane zaposlenih.

<br/><br/>
Nepoštovanje Politike bezbednosti informacija povlači za sobom disciplinsku odgovornost.

<br/><br/>
Osnivači <span className="politika_date">Croonus Technologies DOO Čačak</span> obezbeđuju da ova politika bude saopštena i razumljiva svim zainteresovanim stranama,
implementirana i održavana na svim nivoima u kompanijii najmanje jednom godišnje preispitivana, kako bi odgovorila na bilo kakve
promene u oceni rizika ili planu postupanja sa rizikom.
<br/><br/>

Ova politika je odobrena od strane direktora <span className="politika_date">Croonus Technologies DOO Čačak</span> i obezbeđuje okvir za dalje postavljanje relevantnih ciljeva
kompanije i osnovne principe za uspostavljianje efikasnog sistema upravljanja bezbednošću informacija (ISMS).
<br/><br/><br/>
<span className="politika_date">Čačak, 11.03.2022.</span>
<br/>
<span className="politika_date">Stefan Ćebić, Direktor

</span >
 </p>

</div>
       </div>
    </section>
  );
}
