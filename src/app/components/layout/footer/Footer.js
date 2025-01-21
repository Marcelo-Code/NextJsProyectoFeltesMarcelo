import React from "react";
import "./footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <span>1er Pre Entrega</span>

      <Image
        src="/images/logoNextJs.jpeg"
        width={80}
        height={80}
        alt="Logo Next.js"
      />
      <Image
        src="/images/logoCoder.png"
        width={150}
        height={80}
        alt="Logo CoderHouse"
      />
      <span>Marcelo Feltes</span>
      <span>2025</span>
    </footer>
  );
};

export default Footer;
