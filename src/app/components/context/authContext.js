"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../../fireBase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { confirmAlert, errorAlert } from "../layout/alerts/alerts";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  const registerUser = async (values) => {
    if (!values?.email || !values?.password) {
      errorAlert("Completa todos los campos para registrarte");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.error("Error al registrar usuario: ", error);
      alert("Hubo un error al registrarse. Intenta nuevamente.");
    }
  };

  const loginUser = async (values) => {
    if (!values?.email || !values?.password) {
      errorAlert("Completa todos los campos para iniciar sesión");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      alert("Hubo un error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const logoutUser = async () => {
    confirmAlert("¿Estás seguro que deseas cerrar sesión?").then(
      async (result) => {
        if (result.isConfirmed) {
          await signOut(auth);
        }
      }
    );
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error en login con Google: ", error);
      errorAlert("Hubo un error al iniciar sesión con Google");
    }
  };

  //Observador de estado, en caso de que el usuario y el email sean válidos setea user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser({
          logged: true,
          email: user?.email || "sin email",
          uid: user?.uid || "sin UID",
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
    return () => unsubscribe(); // Limpieza del observador
  }, []);

  const authContextProps = {
    user,
    registerUser,
    loginUser,
    logoutUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authContextProps}>
      {children}
    </AuthContext.Provider>
  );
};
