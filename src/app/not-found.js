// app/notFound.js

"use client"; // Asegúrate de que sea un componente cliente

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const NotFoundPage = () => {
  const router = useRouter();

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
      <p className="text-2xl mt-4">Página no encontrada</p>
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
        onClick={() => router.push("/")}
        className="mt-6 text-blue-500 hover:underline"
        sx={{ color: "white" }}
      >
        Regresar a la página principal
      </Button>
    </div>
  );
};

export default NotFoundPage;
