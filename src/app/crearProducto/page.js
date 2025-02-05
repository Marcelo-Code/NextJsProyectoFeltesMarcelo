"use client";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Footer from "../components/layout/footer/Footer";
import { Box, InputAdornment, TextField } from "@mui/material";
import { UseCartContext } from "../components/context/cartContext";

const CreateProduct = () => {
  const router = useRouter();
  const { createProduct } = UseCartContext();

  const [values, setValues] = useState({
    title: "",
    price: 0,
    category: "",
    img: "/images/logoEmpresa.png",
    description1: "",
    description2: "",
    description3: "",
    warranty: "",
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: name === "price" || name === "stock" ? parseFloat(value) : value,
    });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createProduct(values).then(() => {
      router.back();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card
          sx={{
            minWidth: 300,
            maxWidth: 800,
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ textAlign: "center", margin: "20px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Crear Producto
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Nombre"
                name="title"
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Imagen"
                name="img"
                value={"/images/logoEmpresa.png"}
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
                disabled={true}
              />
              <TextField
                id="outlined-basic"
                label="Precio"
                type="number"
                name="price"
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Stock"
                type="number"
                name="stock"
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Categoría"
                name="category"
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Garantía"
                name="warranty"
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Descripción 1"
                name="description1"
                multiline
                rows={5}
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Descripción 2"
                name="description2"
                multiline
                rows={5}
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Descripción 3"
                name="description3"
                multiline
                rows={5}
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
            </Box>
          </CardContent>

          <CardActions
            sx={{
              width: "100%",
              height: "100px",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              sx={{ width: "80%" }}
              type="submit"
            >
              Guardar
            </Button>
            <Button sx={{ width: "80%" }} onClick={() => router.back()}>
              Volver
            </Button>
          </CardActions>
        </Card>
      </form>
      <Footer />
    </>
  );
};

export default CreateProduct;
