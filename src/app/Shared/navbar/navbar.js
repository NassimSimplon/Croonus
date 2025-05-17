"use client";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";
import useIsOpenElement from "@/app/CustomHooks/useIsOpenElement";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState();
  const { isOpen, openElement, closeElement } = useIsOpenElement();
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navbarClass = `navbar ${scrolled ? "scrolled" : ""}`;

  return (
    <header id="header_nav">
      <nav className={navbarClass}>
        <Image
          className="logo"
          src="/menu-croonus-logo-white.svg"
          alt="Logo"
          width={273}
          height={47}
          priority
        />
        <div className="menu">
          <h6 className="link">English</h6>
          <button
            className="menu-btn"
            type="button"
            onClick={() => openElement()}
          >
            <Image
              className="menu-icon"
              src="/menu.svg"
              alt="Menu Icon"
              width={30}
              height={30}
              priority
            />
          </button>
        </div>
      </nav>
      <div className={`fullscreen-navbar ${isOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          type="button"
          onClick={() => closeElement()}
        >
          <Image
            className="logo"
            src="/cancel.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        </button>
        <div className="bg-image-section"></div>

        <div className="nav-list">
          <ul>
            <li>
              <Link href="/" onClick={() => closeElement()}>
                Projekti
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => closeElement()}>
                Reference
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => closeElement()}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => closeElement()}>
                Zakažite online sastanak
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => closeElement()}>
                {" "}
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
