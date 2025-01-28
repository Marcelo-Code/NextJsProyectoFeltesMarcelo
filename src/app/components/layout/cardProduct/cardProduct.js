"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation"; // Importa el router
import { useEffect, useState } from "react";
import Image from "next/image";

const CardProduct = ({ id, title, price, category, img, description1 }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    // Establece el estado a true solo cuando el componente se haya montado en el cliente
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (isClient) router.push(`/producto/${id}`);
  };

  const priceFormatted = price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <Card sx={{ maxWidth: 345, height: 600, boxShadow: "0 0 15px black" }}>
      <CardMedia
        sx={{ width: 250, height: 250, margin: "auto", marginTop: 5 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", height: "80px" }}
        >
          {title}
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
          sx={{ color: "text.secondary", height: "80px" }}
        >
          {description1}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={handleClick} size="small">
          Más Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
