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
import { productos } from "../../../mock/productos";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../../../fireBase/config";

const BurgerMenu = () => {
  //Lógica para cerrar el menú luego de hacer click en algunas de las opciones
  //--------------------------------------------------------------------------
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => setMenuOpen(false);

  const addProductsToDB = async () => {
    try {
      await Promise.all(
        productos.forEach((product) => {
          addDoc(collection(db, "DBProductosProyectoNextJs"), product);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

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
        <ul className="bm-item-list">
          <Link href="/" onClick={closeMenu}>
            <li className="bm-item">
              <HouseIcon />
              <span style={{ paddingLeft: "10px" }}>Home</span>
            </li>
          </Link>
          <Link href="/productos" onClick={closeMenu}>
            <li className="bm-item">
              <InventoryIcon />
              <span style={{ paddingLeft: "10px" }}>Productos</span>
            </li>
          </Link>
          <Link href="/contacto" onClick={closeMenu}>
            <li className="bm-item">
              <AlternateEmailIcon />
              <span style={{ paddingLeft: "10px" }}>Contacto</span>
            </li>
          </Link>
          <Link href="/devoluciones" onClick={closeMenu}>
            <li className="bm-item">
              <AssignmentReturnIcon />
              <span style={{ paddingLeft: "10px" }}>Devoluciones</span>
            </li>
          </Link>

          {/* Función para agregar los datos a FireBase */}

          {/* <Link href="" onClick={addProductsToDB}>
            <li className="bm-item">
              <span style={{ paddingLeft: "10px" }}>Agregar a DB</span>
            </li>
          </Link> */}
        </ul>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
