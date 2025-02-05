"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { UseCartContext } from "../../context/cartContext";

function Carrito() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { cart, deleteProduct, deleteAllProducts } = UseCartContext();

  const totalPrice = cart.reduce((acc, producto) => {
    return acc + producto.price * producto.quantity;
  }, 0);
  console.log(cart);

  const productsQuantity = cart.reduce((acc, producto) => {
    return acc + producto.quantity;
  }, 0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        height: "100%",
        backgroundColor: "#373a47",
        color: "white",
        overflowY: "hidden",
      }}
      role="presentation"
      onClick={(e) => e.stopPropagation()} // Evita que el click cierre el Drawer
      onKeyDown={(e) => e.stopPropagation()} // Evita el cierre al presionar teclas
    >
      <div
        style={{
          width: "100%",
          height: "85%",
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            padding: "30px",
            borderBottom: "1px solid white",
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: "1.2em",
          }}
        >
          Carrito de Compras
        </h3>
        <table>
          <tbody>
            {cart.map((producto) => (
              <React.Fragment key={producto.id}>
                <tr style={{ height: "40px", verticalAlign: "top" }}>
                  <td
                    colSpan={2}
                    style={{ width: "150px", textAlign: "center" }}
                  >
                    <b style={{ fontSize: "1.1em" }}>{producto.title}</b>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <Image
                      src={producto.img}
                      width={100}
                      height={100}
                      alt="imagen del producto"
                    />
                  </td>
                  <td
                    style={{
                      width: "100px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span>{producto.quantity}</span>
                  </td>
                  <td rowSpan={2} style={{ width: "100px", color: "white" }}>
                    <Link href="" onClick={() => deleteProduct(producto.id)}>
                      <DeleteIcon
                        sx={{ fontSize: 30, verticalAlign: "center" }}
                      />
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <span>
                      {producto.price.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <b>SUBTOTAL:</b>
                  </td>
                  <td>
                    <span>
                      {(producto.price * producto.quantity).toLocaleString(
                        "es-AR",
                        {
                          style: "currency",
                          currency: "ARS",
                        }
                      )}
                    </span>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          borderTop: "1px solid white",
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "10px",
        }}
      >
        <b>Monto Total:</b>
        {"  "}
        <span>
          {totalPrice.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </span>
      </div>
      <div>
        <Button
          onClick={() => {
            router.push("/checkout");
          }}
          sx={{ color: "white", width: "100%" }}
          startIcon={<ShoppingCartCheckoutIcon />}
          disabled={cart.length === 0 ? true : false}
        >
          CheckOut
        </Button>
        <Button
          onClick={() => deleteAllProducts()}
          sx={{ color: "white", width: "100%" }}
          startIcon={<DeleteIcon />}
        >
          Vaciar Carrito
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
          disableScrollLock={true}
          transitionDuration={{ enter: 500, exit: 500 }}
          PaperProps={{ style: { overflowX: "hidden" } }}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>

      <Link href="" onClick={toggleDrawer("right", true)}>
        <Badge badgeContent={productsQuantity} color="primary">
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
      </Link>
    </div>
  );
}

export default Carrito;
