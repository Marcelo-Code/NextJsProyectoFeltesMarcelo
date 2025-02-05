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
import { confirmAlert } from "../layout/alerts/alerts";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  const registerUser = async (values) => {
    // const userCredential =
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    // console.log(userCredential);
    // const user = userCredential.user;
    // setUser({
    //   logged: true,
    //   email: user.email,
    //   user: user.uid,
    // });
  };

  const loginUser = async (values) => {
    // const userCredential =
    await signInWithEmailAndPassword(auth, values.email, values.password);
    // const user = userCredential.user;
    // setUser({
    //   logged: true,
    //   email: user.email,
    //   user: user.uid,
    // });
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
    await signInWithPopup(auth, provider);
  };

  //Observador de estado, en caso de que el usuario y el email sean válidos setea user

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
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
