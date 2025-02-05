"use client";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import { productos } from "../../mock/productos";
import Card from "@mui/material/Card";
import { useRouter } from "next/navigation";
import { use } from "react";
import { Counter } from "../../components/layout/counter/counter";
import { useState, useEffect } from "react";
import Footer from "../../components/layout/footer/Footer";
import { UseCartContext } from "../../components/context/cartContext";

const ProductDetail = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();
  const { fetchProductById } = UseCartContext();
  // const producto = productos.find((prod) => prod.id === parseInt(id));

  const [filteredProduct, setFilteredProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then((response) => {
        setFilteredProduct(response);
      })
      .catch((error) => console.log(error));
  }, [fetchProductById, id]);

  if (!filteredProduct) return;

  const priceFormatted = filteredProduct.price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  const counterProps = { stock: filteredProduct.stock, item: filteredProduct };

  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            minWidth: 300,
            widht: "50%",
            height: "auto",
            boxShadow: "0 0 15px black",
            margin: 5,
          }}
        >
          <CardMedia
            sx={{ width: 250, height: 250, margin: "auto", marginTop: 5 }}
            image={filteredProduct.img}
            title={filteredProduct.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center", height: 80 }}
            >
              {filteredProduct.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {priceFormatted}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 80 }}
            >
              {filteredProduct.description1}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 50 }}
            >
              ✔️{filteredProduct.description2}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 50 }}
            >
              ✔️{filteredProduct.description3}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 50 }}
            >
              ✔️{filteredProduct.warranty}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 50 }}
            >
              ✔️ Stock {filteredProduct.stock} unidades
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 5,
              gap: 5,
            }}
          >
            <Counter {...counterProps} />
            <Button onClick={() => router.back()} size="small">
              Volver
            </Button>
          </CardActions>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
