"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./contacto.css";
import Footer from "../components/layout/footer/Footer";

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const response = await fetch(`http://localhost:3000/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="contacto">
        <h2
          style={{
            width: "90%",
            paddingBottom: "10px",
            borderBottom: "1px solid black",
            marginBottom: "20px",
          }}
        >
          Dejanos tu consulta
        </h2>
        <main className="p-6 max-w-md mx-auto w-[320px]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-[300px] border border-gray-300 rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label>Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-[300px] border border-gray-300 rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label>Mensaje:</label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 block w-[300px] border border-gray-300 rounded-md p-2 text-black"
              />
            </div>
            <Button
              sx={{ width: 300 }}
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}
