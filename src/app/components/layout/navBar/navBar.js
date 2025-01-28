import React from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import "./navBar.css";
import Image from "next/image";
import Link from "next/link";
import Carrito from "../carrito/Carrito";

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para mueblería virtual deco design",
  keywords:
    "Muebles modernos, Muebles para el hogar, Muebles de madera, Decoración de interiores, Muebles minimalistas, Sofás y sillones, Mesas de comedor, Sillas ergonómicas, Muebles personalizados, Muebles para oficinas, Diseño de muebles, Alacenas y estanterías, Mesas de centro, Muebles rústicos, Tienda de muebles online",
};

const NavBar = () => {
  return (
    <>
      <header className="navBar">
        <BurgerMenu />
        <Link href="/">
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/logoEmpresa.png"
              width="80"
              height="80"
              alt=""
            />
            <span className="title">Deco Design</span>
          </nav>
        </Link>
        <Carrito />
      </header>
    </>
  );
};

export default NavBar;
