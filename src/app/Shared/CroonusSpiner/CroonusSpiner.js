import "./CroonusSpiner.css";
import Image from "next/image";
import React from "react";

function CroonusSpiner() {
  return (
    <div className="croonus-spiner-container">
      <Image
        className="croonus-spiner"
        src="/images/spinner.png"
        alt="croonus spiner"
        width={50}
        height={50}
      />
    </div>
  );
}

export default CroonusSpiner;
