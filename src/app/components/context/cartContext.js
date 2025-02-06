"use client";
import { createContext, useContext, useState } from "react";
import {
  addedProductAltert,
  confirmAlert,
  errorAlert,
  successAlert,
} from "../layout/alerts/alerts";
import { db } from "../../fireBase/config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";

const CartContext = createContext();

export const UseCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Fetch de productos a Firebase

  const fetchProducts = async () => {
    try {
      const response = await getDocs(
        collection(db, "DBProductosProyectoNextJs")
      );
      const array = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return array;
    } catch (error) {
      console.log("Error en el fetch de productos", error);
    }
  };

  //Devuelve el detalle del producto por su id

  const fetchProductById = async (id) => {
    try {
      const docRef = doc(db, "DBProductosProyectoNextJs", id);
      console.log(docRef);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
      } else {
        console.error("No se encontró el producto");
      }
    } catch (error) {
      console.error("Error en el fetch de productos", error);
    }
  };

  //Función para agregar productos al carrito

  const addToCart = (item) => {
    let updatedCart;
    const foundItem = cart.find((product) => product.id === item.id);
    if (foundItem) {
      foundItem.quantity = item.quantity;
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

  //Borrar un producto del carrito

  const deleteProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  //Borrar todos los productos del carrito

  const deleteAllProducts = () => {
    setCart([]);
  };

  //Dar formato de moneda

  const formatPrice = (price) => {
    return price.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  };

  //Genera la orden de compra y actualiza el stock en DB

  const generatePurchaseOrder = async (cart) => {
    try {
      // Calcula el total
      const totalAmount = cart.reduce(
        (acc, producto) => acc + producto.quantity * producto.price,
        0
      );

      // Define la orden de compra
      const purchaseOrder = {
        cart,
        totalAmount,
      };

      console.log(purchaseOrder);

      // Guarda la orden en Firestore
      const purchaseOrdersCollection = collection(
        db,
        "DBOrdenesCompraProductosProyectoNextJs"
      );

      const orderRef = await addDoc(purchaseOrdersCollection, purchaseOrder);

      // Actualiza el stock de productos
      await Promise.all(
        cart.map(async (producto) => {
          const productRef = doc(db, "DBProductosProyectoNextJs", producto.id);
          await updateDoc(productRef, {
            stock: producto.stock - producto.quantity,
          });
        })
      );
      return orderRef.id; // Devuelve el id de la operación
    } catch (error) {
      console.error("Error al generar la orden de compra:", error);
      throw new Error("No se pudo completar la compra");
    }
  };

  //Crear un producto

  const createProduct = async (values) => {
    try {
      const docRef = await addDoc(
        collection(db, "DBProductosProyectoNextJs"),
        values
      );
      console.log("Producto creado exitosamente: ", docRef.id);
    } catch (error) {
      console.log("Error al crear el producto: ", error);
    }
  };

  //Eliminar un producto de la DB

  const deleteProductDB = async (id, setUpdateList, updateList) => {
    confirmAlert("¿Estás seguro de eliminar este producto?").then(
      async (result) => {
        if (result.isConfirmed) {
          try {
            await deleteDoc(doc(db, "DBProductosProyectoNextJs", id));
            console.log("Producto eliminado exitosamente");
            successAlert("Producto eliminado exitosamente");
            setUpdateList(!updateList);
          } catch (error) {
            errorAlert("Error al eliminar el producto");
            console.log("Error al eliminar producto: ", error);
          }
        }
      }
    );
  };

  //Actualizar un producto en la DB

  const updateProduct = async (id, updatedValues) => {
    try {
      const docRef = doc(db, "DBProductosProyectoNextJs", id);
      await updateDoc(docRef, updatedValues);
      console.log("Producto actlualizado exitosamente");
    } catch (error) {
      console.log("Error al actualizar el producto: ", error);
    }
  };

  const contextProps = {
    addToCart,
    cart,
    deleteProduct,
    deleteAllProducts,
    fetchProducts,
    fetchProductById,
    formatPrice,
    generatePurchaseOrder,
    createProduct,
    deleteProductDB,
    updateProduct,
  };

  return (
    <CartContext.Provider value={contextProps}>{children}</CartContext.Provider>
  );
};
