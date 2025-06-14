"use client";
import "./navbar.css";
import * as React from "react";
import CloseIcon from "@/app/Icons/Close";
import Hamburger from "../../Icons/Hamburger";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../Icons/Logo";
import useIsOpenElement from "@/app/CustomHooks/useIsOpenElement";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navbarRef = useRef(null);
  const fullscreenNavRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const { isOpen, openElement, closeElement } = useIsOpenElement();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 60 && !isSticky) {
        setIsSticky(true);
      } else if (offset <= 0 && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        fullscreenNavRef.current &&
        !fullscreenNavRef.current.contains(e.target)
      ) {
        closeElement();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeElement]);

  return (
    <header id="header_nav" ref={navbarRef}>
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="header__row">
          <Link href="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="menu">
          <h6 className="link">English</h6>
          <button className="menu-btn" type="button" onClick={openElement}>
            <Hamburger className="menu-icon" />
          </button>
        </div>
      </nav>

      <div
        ref={fullscreenNavRef}
        className={`fullscreen-navbar ${isOpen ? "open" : ""}`}
      >
        <button className="close-btn" type="button" onClick={closeElement}>
          <CloseIcon className="logo" />
        </button>
        <div className="bg-image-section">
          <Image className="responsive_image_banner" src="/images/responsiveImageBanner.png" alt="responsive image banner" width={331} height={218} />
        </div>
        <div className="nav-list">
             <ul>
            {[
              { href: "/Projects", text: "Projekti" },
              { href: "/Clients", text: "Reference" },
              { href: "/blog", text: "Blog" },
              { href: "/", text: "Zakažite online sastanak" },
              { href: "/", text: "Pošaljite upit" }
            ].map((item) => (
              <li key={item.text}>
                <Link href={item.href} onClick={closeElement}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-footer">
            <h4 className="nav-footer-title">Podrška</h4>
            <h4>info@croonus.com</h4>
            <h4>Kralja Petra Prvog 30, Čačak, Srbija</h4>
            <h4 className="contact-info">Instagram, Linkedin</h4>
            <h4>Youtube, Facebook, Tik Tok</h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
