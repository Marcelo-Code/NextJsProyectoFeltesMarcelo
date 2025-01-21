import React from "react";
import Footer from "../components/layout/footer/Footer";
import NavBar from "../components/layout/navBar/navBar";
import { text1, text2 } from "./text";
import Image from "next/image";
import "../home.css";

const page = () => {
  return (
    <>
      <NavBar />
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
        {/* <div style={{ height: "90vh" }}> */}
      </div>
      <Footer />
    </>
  );
};

export default page;
