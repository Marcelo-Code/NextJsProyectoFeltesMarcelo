"use client";
import { use, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Footer from "../../components/layout/footer/Footer";
import { Box, InputAdornment, TextField } from "@mui/material";
import { UseCartContext } from "../../components/context/cartContext";
import Loading from "../../loading";

const EditarProducto = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();
  const { fetchProductById, updateProduct } = UseCartContext();

  const [product, setProduct] = useState(null);

  const [values, setValues] = useState({
    title: "",
    price: 0,
    category: "",
    img: "",
    description1: "",
    description2: "",
    description3: "",
    warranty: "",
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProduct(id, values).then(() => {
      router.back();
    });
  };

  useEffect(() => {
    fetchProductById(id)
      .then((response) => {
        setProduct(response);
        setValues(response);
      })
      .catch((error) => console.log(error));
  }, [fetchProductById, id]);

  if (!product) return <Loading />;

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
              Editar Producto
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
                value={values.title}
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Imagen"
                name="img"
                value={values.img}
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
                value={values.price}
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
                label="Categoría"
                name="category"
                value={values.category}
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Garantía"
                name="warranty"
                value={values.warranty}
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Descripción 1"
                name="description1"
                value={values.description1}
                multiline
                rows={5}
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Descripción 2"
                name="description2"
                value={values.description2}
                multiline
                rows={5}
                sx={{ width: "300px" }}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Descripción 3"
                name="description3"
                value={values.description3}
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

export default EditarProducto;
