"use client";
import { slide as Menu } from "react-burger-menu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import InventoryIcon from "@mui/icons-material/Inventory";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import HouseIcon from "@mui/icons-material/House";
import { useState } from "react";
import "./burgerMenu.css";
import Link from "next/link";

const BurgerMenu = () => {
  //Lógica para cerrar el menú luego de hacer click en algunas de las opciones
  //--------------------------------------------------------------------------
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Menu
      isOpen={menuOpen}
      onStateChange={handleStateChange}
      customBurgerIcon={<MenuRoundedIcon />}
    >
      <div className="bm-menu-title">
        <div>
          <div>Deco</div>
          <div>Design</div>
        </div>
      </div>
      <div className="bm-menu">
        {/* Menú para perfil "admin" */}

        <ul className="bm-item-list">
          <Link href="/">
            <li className="bm-item">
              <HouseIcon />
              <span style={{ paddingLeft: "10px" }}>Home</span>
            </li>
          </Link>
          <Link href="/productos">
            <li className="bm-item">
              <InventoryIcon />
              <span style={{ paddingLeft: "10px" }}>Productos</span>
            </li>
          </Link>
          <Link href="/contacto">
            <li className="bm-item">
              <AlternateEmailIcon />
              <span style={{ paddingLeft: "10px" }}>Contacto</span>
            </li>
          </Link>
          <Link href="/devoluciones">
            <li className="bm-item">
              <AssignmentReturnIcon />
              <span style={{ paddingLeft: "10px" }}>Devoluciones</span>
            </li>
          </Link>
        </ul>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
