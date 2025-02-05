"use client";
import Footer from "../components/layout/footer/Footer";
import { Button } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import "./checkout.css";
import { useEffect, useState, useRef } from "react";
import { UseCartContext } from "../components/context/cartContext";

const Checkout = () => {
  const { cart, formatPrice, generatePurchaseOrder, deleteAllProducts } =
    UseCartContext();
  const [orderId, setOrderId] = useState(null);
  const [cartDetail, setCartDetail] = useState(null);
  const total = cart.reduce((acc, producto) => {
    return acc + producto.price * producto.quantity;
  }, 0);

  const orderGeneratedRef = useRef(false);

  useEffect(() => {
    if (!orderGeneratedRef.current) {
      orderGeneratedRef.current = true;
      generatePurchaseOrder(cart)
        .then((response) => {
          setOrderId(response);
          setCartDetail(cart);
          deleteAllProducts();
          console.log("orden generada");
        })
        .catch((error) => console.log(error));
    }
  }, [cart, generatePurchaseOrder]);

  if (!orderId) return;

  return (
    <>
      <div className="checkout">
        <h2
          style={{
            width: "100%",
            paddingBottom: "10px",
            borderBottom: "1px solid black",
            marginBottom: "20px",
          }}
        >
          Detalles de su compra:
        </h2>
        <h3>Orden de compra: {orderId}</h3>
        <div
          style={{
            overflowX: "auto",
            width: "100%",
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <table>
            <thead>
              <tr style={{ borderBottom: "1px solid black", height: "50px" }}>
                <th style={{ minWidth: "100px" }}>PRODUCTO</th>
                <th style={{ minWidth: "100px" }}>PRECIO</th>
                <th style={{ minWidth: "100px" }}>CANTIDAD</th>
                <th style={{ minWidth: "100px" }}>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartDetail.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.title}</td>
                  <td>{formatPrice(producto.price)}</td>
                  <td>{producto.quantity}</td>
                  <td>{formatPrice(producto.price * producto.quantity)}</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid black" }}>
                <td>
                  <b>TOTAL:</b>
                </td>
                <td></td>
                <td></td>
                <td>{formatPrice(total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button
          sx={{ margin: "20px", width: 200 }}
          variant="contained"
          startIcon={<PointOfSaleIcon />}
        >
          Ir a Pagos
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
