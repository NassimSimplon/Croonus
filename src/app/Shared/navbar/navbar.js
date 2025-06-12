"use client";
import "./navbar.css";
import * as React from "react";
import CloseIcon from "@/app/Icons/Close";
import Hamburger from "../../Icons/Hamburger";
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
        <div className="bg-image-section"></div>
        <div className="nav-list">
          <ul>
            <li>
              <Link href="/Projects" onClick={closeElement}>
                Projekti
              </Link>
            </li>
            <li>
              <Link href="/Clients" onClick={closeElement}>
                Reference
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeElement}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" onClick={closeElement}>
                Zakažite online sastanak
              </Link>
            </li>
            <li>
              <Link href="/" onClick={closeElement}>
                Pošaljite upit
              </Link>
            </li>
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
