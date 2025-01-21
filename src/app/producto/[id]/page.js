"use client";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { productos } from "../../mock/productos";
import Card from "@mui/material/Card";
import Footer from "../../components/layout/footer/Footer";
import NavBar from "../../components/layout/navBar/navBar";
import { useRouter } from "next/navigation";
import { use } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetail = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();
  const producto = productos.find((prod) => prod.id === parseInt(id));
  const priceFormatted = producto.price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <>
      <NavBar />
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
            image={producto.img}
            title={producto.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center", height: 80 }}
            >
              {producto.title}
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
              {producto.description1}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 50 }}
            >
              ✔️{producto.description2}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 50 }}
            >
              ✔️{producto.description3}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: 50 }}
            >
              ✔️{producto.warranty}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              margin: 5,
              gap: 5,
            }}
          >
            <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
              Agregar a Carrito
            </Button>
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
