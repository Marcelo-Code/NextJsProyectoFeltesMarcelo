import React from "react";
import "./footer.css";
import Image from "next/image";

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para mueblería virtual deco design",
  keywords:
    "Muebles modernos, Muebles para el hogar, Muebles de madera, Decoración de interiores, Muebles minimalistas, Sofás y sillones, Mesas de comedor, Sillas ergonómicas, Muebles personalizados, Muebles para oficinas, Diseño de muebles, Alacenas y estanterías, Mesas de centro, Muebles rústicos, Tienda de muebles online",
};

const Footer = () => {
  return (
    <footer className="footer">
      <span>2da Pre Entrega</span>

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
