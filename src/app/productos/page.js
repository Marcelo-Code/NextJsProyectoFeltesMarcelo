"use client";
import { useEffect, useState } from "react";
import CardProduct from "../components/layout/cardProduct/cardProduct";

import Footer from "../components/layout/footer/Footer";
import { UseCartContext } from "../components/context/cartContext";

const Productos = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { fetchProducts } = UseCartContext();

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, [fetchProducts]);

  // Función para manejar el filtro de categoría
  // Llamar a handleFilter cuando la categoría cambia
  useEffect(() => {
    const handleFilter = () => {
      if (selectedCategory) {
        // Filtra los productos por la categoría seleccionada
        const filtered = products.filter(
          (producto) => producto.category === selectedCategory
        );
        setFilteredProducts(filtered);
        // Redirige a la página de la categoría seleccionada
        // router.push(`/productos/${selectedCategory}`);
      } else {
        // Si no hay categoría seleccionada, muestra todos los productos
        setFilteredProducts(products);
      }
    };

    handleFilter();
  }, [selectedCategory, products]);

  if (!filteredProducts) return;

  return (
    <>
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
            new Set(filteredProducts.map((producto) => producto.category))
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
        {filteredProducts.map((producto) => (
          <CardProduct key={producto.id} {...producto} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Productos;
