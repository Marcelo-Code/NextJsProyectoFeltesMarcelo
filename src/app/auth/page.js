"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useAuthContext } from "../components/context/authContext";
import Footer from "../components/layout/footer/Footer";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
          minHeight: "90vh",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            width: "100%",
            background: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <CardContent>
            <span className="title" style={{ color: "white" }}>
              Deco Design
            </span>
            <Typography
              sx={{ color: "white" }}
              variant="h5"
              align="center"
              gutterBottom
            >
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                name="email"
                value={values.email}
                onChange={(e) => handleChange(e)}
                required
                slotProps={{
                  inputLabel: {
                    style: { color: "white" },
                  },
                  input: {
                    style: { color: "white" },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "lightblue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "lightgreen",
                    },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                name="password"
                value={values.password}
                onChange={(e) => handleChange(e)}
                required
                slotProps={{
                  inputLabel: {
                    style: { color: "white" },
                  },
                  input: {
                    style: { color: "white" },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Color del borde cuando no está en foco
                    },
                    "&:hover fieldset": {
                      borderColor: "lightblue", // Color del borde cuando se pasa el mouse sobre el campo
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "lightgreen", // Color del borde cuando el campo está enfocado
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={() => loginUser(values)}
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={() => googleLogin()}
                startIcon={<GoogleIcon />}
              >
                Login con GOOGLE
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={() => registerUser(values)}
              >
                Registrarme
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Login;
