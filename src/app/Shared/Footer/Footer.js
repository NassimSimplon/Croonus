import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer_wrapper">
        <div className="app-footer_body">
          <Image
            className="app-footer_logo"
            src="/images/Croonus _footer.png"
            alt="croonus logo for footer "
            width={330}
            height={70}
          />
          <div className="app-footer_contact">
            <h4 className="app-footer_email">info@croonus.com</h4>
            <h4 className="app-footer_location">
              Kralja Petra Prvog 30, Čačak, Srbija
            </h4>
          </div>
          <div className="app-footer_social">
            <h4 className="app-footer_meta">Instagram, Linkedin</h4>
            <h4 className="app-footer_other">Youtube, Facebook, Tik Tok</h4>
          </div>
        </div>
        <div className="app_footer_services">
          <p className="app_footer_services_txt">
            <span>Podrška</span>, Uslovi korišćenja, Politika bezbednosti
            informacija, Politika kvaliteta
          </p>
          <Link
            href="#header_nav"
            className="app_footer_services_btn"
            type="button"
          >
            Idi na vrh
            <Image
              src="/images/upArrow.png"
              alt="croonus btn icon"
              width={20}
              height={10}
            />
          </Link>
        </div>
        <p className="footer-copy-right">
          © 2016-2025 Croonus Technologies DOO. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
