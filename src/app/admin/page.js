"use client";
import { React, useEffect, useState } from "react";
import LogoutButton from "../components/admin/logoutButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Footer from "../components/layout/footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { UseCartContext } from "../components/context/cartContext";
import Image from "next/image";
import Loading from "../loading";
import { useRouter } from "next/navigation";

const Page = () => {
  const [page, setPage] = useState(0);
  const [updateList, setUpdateList] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState(null);
  const { fetchProducts, formatPrice, deleteProductDB } = UseCartContext();
  const router = useRouter();
  const columns = [
    { id: "Nombre", label: "Nombre", minWidth: 170 },
    { id: "Imagen", label: "Imagen", minWidth: 170 },
    { id: "Categoría", label: "Categoría", minWidth: 170 },
    { id: "Descripción 1", label: "Descripción 1", minWidth: 170 },
    { id: "Descripción 2", label: "Descripción 2", minWidth: 170 },
    { id: "Descripción 3", label: "Descripción 3", minWidth: 170 },
    { id: "Precio", label: "Precio", minWidth: 170 },
    { id: "Stock", label: "Stock", minWidth: 80 },
    { id: "Garantía", label: "Garantía", minWidth: 170 },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      console.log(response);
    });
  }, [fetchProducts, updateList]);

  if (!products || products.length === 0) return <Loading />;

  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottom: "1px solid black",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <span>
          <h2>Administración de productos</h2>
          <Button
            variant="contained"
            sx={{ height: "35px", marginRight: "20px" }}
            startIcon={<AddIcon />}
            href="./crearProducto"
          >
            Crear Producto
          </Button>
          <LogoutButton />
        </span>
      </div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                  >
                    <b>{column.label}</b>
                  </TableCell>
                ))}
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={product.id}
                    >
                      <TableCell>{product.title}</TableCell>
                      <TableCell>
                        <Image
                          src={product.img}
                          alt="imagen producto"
                          width={100}
                          height={100}
                        />
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.description1}</TableCell>
                      <TableCell>{product.description2}</TableCell>
                      <TableCell>{product.description3}</TableCell>
                      <TableCell>{formatPrice(product.price)}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{product.warranty}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            router.push(`/editarProducto/${product.id}`)
                          }
                        >
                          Editar
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            deleteProductDB(
                              product.id,
                              setUpdateList,
                              updateList
                            )
                          }
                          variant="contained"
                        >
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Footer />
    </>
  );
};

export default Page;
