import React from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navBar.css";
import Image from "next/image";
import Link from "next/link";

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
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
      </header>
    </>
  );
};

export default NavBar;
