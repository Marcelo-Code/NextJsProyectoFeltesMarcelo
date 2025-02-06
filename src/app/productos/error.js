"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        background: "#373a47",
        color: "white",
        textShadow: "0 0 10px black",
      }}
    >
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Error al obtener productos</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src="/images/logoEmpresa.png" width="80" height="80" alt="" />
        <span className="title">Deco Design</span>
      </div>
      <Button
        onClick={() => reset()}
        className="mt-6 text-blue-500 hover:underline"
        sx={{ color: "white" }}
      >
        Intentar nuevamente
      </Button>
    </div>
  );
};

export default Error;
