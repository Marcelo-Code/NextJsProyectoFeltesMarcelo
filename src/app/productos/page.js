"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/layout/navBar/navBar";
import Footer from "../components/layout/footer/Footer";
import { productos } from "../mock/productos";
import CardProduct from "../components/layout/cardProduct/cardProduct";

const Productos = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setFilterProducts(productos);
  }, []);

  // Función para manejar el filtro de categoría
  const handleFilter = () => {
    if (selectedCategory) {
      // Filtra los productos por la categoría seleccionada
      const filtered = productos.filter(
        (producto) => producto.category === selectedCategory
      );
      setFilterProducts(filtered);
      // Redirige a la página de la categoría seleccionada
      // router.push(`/productos/${selectedCategory}`);
    } else {
      // Si no hay categoría seleccionada, muestra todos los productos
      setFilterProducts(productos);
    }
  };

  // Llamar a handleFilter cuando la categoría cambia
  useEffect(() => {
    handleFilter();
  }, [selectedCategory]);

  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <select
          className="bg-white border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-50 transition duration-200"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Selecciona una categoría</option>
          {Array.from(
            new Set(productos.map((producto) => producto.category))
          ).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          margin: "20px",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {filterProducts.map((producto) => (
          <CardProduct key={producto.id} {...producto} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Productos;
