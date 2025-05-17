import "./beforeFooterSection.css";
import React from "react";

const BeforeFooterSection = () => {
    return (
        <div className="beforeFooterSection">
            <h1 className="beforeFooterSection__title">
                Hajde da radimo zajedno<span>.</span>
            </h1>
            <div className="beforeFooterSection_btns">
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
