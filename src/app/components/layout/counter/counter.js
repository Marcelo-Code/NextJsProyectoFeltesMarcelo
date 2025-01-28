"use client";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { UseCartContext } from "../../cartContext/cartContext";

export const Counter = ({ stock, item }) => {
  const [counter, setCounter] = useState(1);
  const { addToCart, cart } = UseCartContext();
  const [initialValue, setInitialValue] = useState(1);

  useEffect(() => {
    const foundItem = cart.find((product) => product.id === item.id);
    if (foundItem) {
      setCounter(foundItem.quantity);
      setInitialValue(foundItem.quantity);
    } else {
      setInitialValue(1);
    }
  }, [cart, item]);

  const increaseCounter = () => {
    if (counter < stock) setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > initialValue) {
      setCounter(counter - 1);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          borderRadius: "30px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "40px",
            height: "auto",
            borderRadius: "50%",
            minWidth: "0px",
            margin: "3px",
          }}
          onClick={decreaseCounter}
        >
          -
        </Button>
        <span style={{ fontSize: "1.2em", width: "40px", textAlign: "center" }}>
          <b>{counter}</b>
        </span>
        <Button
          variant="contained"
          sx={{
            width: "40px",
            height: "auto",
            borderRadius: "50%",
            minWidth: "0px",
            margin: "3px",
          }}
          onClick={increaseCounter}
        >
          +
        </Button>
      </div>
      <Button
        onClick={() => addToCart({ ...item, quantity: counter })}
        variant="contained"
        startIcon={<AddShoppingCartIcon />}
      >
        Agregar
      </Button>
    </div>
  );
};
