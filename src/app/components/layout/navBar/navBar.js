import React from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import "./navBar.css";
import Image from "next/image";
import Link from "next/link";
import Carrito from "../carrito/Carrito";

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
