"use client";
import { createContext, useContext, useState } from "react";
import { addedProductAltert } from "../layout/alerts/alerts";

const CartContext = createContext();

export const UseCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let updatedCart;
    const foundItem = cart.find((product) => product.id === item.id);
    if (foundItem) {
      foundItem.quantity += item.quantity;
      updatedCart = cart.map((product) =>
        product.id === foundItem.id ? foundItem : product
      );
    } else {
      updatedCart = [...cart, item];
    }
    setCart(updatedCart);
    addedProductAltert();
    console.log(updatedCart);
  };

  const deleteProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const deleteAllProducts = () => {
    setCart([]);
  };

  const contextProps = {
    addToCart,
    cart,
    deleteProduct,
    deleteAllProducts,
  };

  return (
    <CartContext.Provider value={contextProps}>{children}</CartContext.Provider>
  );
};
