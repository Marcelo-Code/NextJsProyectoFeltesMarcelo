import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/navBar/navBar";
import { CartProvider } from "./components/cartContext/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para mueblería virtual deco design",
  keywords:
    "Muebles modernos, Muebles para el hogar, Muebles de madera, Decoración de interiores, Muebles minimalistas, Sofás y sillones, Mesas de comedor, Sillas ergonómicas, Muebles personalizados, Muebles para oficinas, Diseño de muebles, Alacenas y estanterías, Mesas de centro, Muebles rústicos, Tienda de muebles online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
