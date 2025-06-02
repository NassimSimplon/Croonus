"use client";
import "./beforeFooterSection.css";
import React from "react";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";

const BeforeFooterSection = () => {
  const { setRef, isInView } = useMultiScrollReveal(0.4);
  return (
    <div className="beforeFooterSection">
      <h1
        className={`beforeFooterSection__title ${
          isInView("beforeFooterSection__title")
            ? "fade-up-element"
            : "hidden-element"
        }`}
        ref={setRef("beforeFooterSection__title")}
        data-scroll-id="beforeFooterSection__title"
      >
        Hajde da radimo zajedno<span>.</span>
      </h1>
      <div
        className={`beforeFooterSection_btns ${
          isInView("beforeFooterSection_btns")
            ? "fade-up-element"
            : "hidden-element"
        }`}
        ref={setRef("beforeFooterSection_btns")}
        data-scroll-id="beforeFooterSection_btns"
      >
        <button className="beforeFooterSection_first_btn">
          Pošaljite upit
        </button>
        <button className="beforeFooterSection_second_btn">
          Zakažite online sastanak
        </button>
      </div>
    </div>
  );
};

export default BeforeFooterSection;
