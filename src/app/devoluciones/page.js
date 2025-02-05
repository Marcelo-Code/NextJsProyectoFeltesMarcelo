import React from "react";
import { text1, text2 } from "./text";
import Image from "next/image";
import "../home.css";
import Footer from "../components/layout/footer/Footer";

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para mueblería virtual deco design",
  keywords:
    "Muebles modernos, Muebles para el hogar, Muebles de madera, Decoración de interiores, Muebles minimalistas, Sofás y sillones, Mesas de comedor, Sillas ergonómicas, Muebles personalizados, Muebles para oficinas, Diseño de muebles, Alacenas y estanterías, Mesas de centro, Muebles rústicos, Tienda de muebles online",
};

const page = () => {
  return (
    <>
      <div style={{ minHeight: "90vh", margin: 30 }}>
        <h2
          style={{
            width: "100%",
            paddingBottom: "10px",
            borderBottom: "1px solid black",
            marginBottom: "20px",
          }}
        >
          Política de Devolución / Excepciones y Condiciones
        </h2>
        <div className="gridContainer">
          <div className="gridItem">
            <div style={{ boxShadow: "0 0 15px black" }}>
              <Image
                src="/images/devoluciones1.jpg"
                width={500}
                height={200}
                alt="deco design"
              />
            </div>
          </div>
          <div className="gridItem">{text1}</div>
          <div className="gridItem">
            <div style={{ boxShadow: "0 0 15px black" }}>
              <Image
                src="/images/devoluciones2.jpg"
                width={500}
                height={200}
                alt="deco design"
              />
            </div>
          </div>
          <div className="gridItem">{text2}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
