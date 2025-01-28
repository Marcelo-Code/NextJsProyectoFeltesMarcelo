import Image from "next/image";
import Footer from "../app/components/layout/footer/Footer";
import "./home.css";

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para mueblería virtual deco design",
  keywords:
    "Muebles modernos, Muebles para el hogar, Muebles de madera, Decoración de interiores, Muebles minimalistas, Sofás y sillones, Mesas de comedor, Sillas ergonómicas, Muebles personalizados, Muebles para oficinas, Diseño de muebles, Alacenas y estanterías, Mesas de centro, Muebles rústicos, Tienda de muebles online",
};

export default function Home() {
  const text1 =
    "En Deco Design, nos dedicamos a transformar espacios en ambientes que reflejen estilo, funcionalidad y comodidad. Somos una mueblería apasionada por el diseño, que combina calidad excepcional con piezas únicas para convertir cada rincón en una extensión de tu personalidad. Desde muebles modernos y minimalistas hasta opciones clásicas y atemporales, ofrecemos un catálogo variado que se adapta a cualquier necesidad y preferencia. Creemos que el mobiliario no solo debe decorar un espacio, sino también enriquecer tu vida diaria, aportando calidez y practicidad a cada momento.";
  const text2 =
    "Con más de una década de experiencia en el sector, nos hemos consolidado como una marca confiable que prioriza la satisfacción de nuestros clientes. Nuestro equipo de expertos trabaja contigo para entender tus ideas y ayudarte a encontrar las soluciones de diseño ideales para tu hogar o espacio de trabajo. En Deco Design, cada pieza cuenta con un propósito: ser un reflejo de tu esencia y una contribución al ambiente que sueñas. Estamos comprometidos con ofrecer productos de alta calidad y un servicio personalizado, porque sabemos que tu hogar merece lo mejor.";

  return (
    <>
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <h2
          style={{
            width: "100%",
            paddingBottom: "10px",
            borderBottom: "1px solid black",
            marginBottom: "20px",
          }}
        >
          Quienes Somos:
        </h2>
        <div className="gridContainer">
          <div className="gridItem">
            <div style={{ boxShadow: "0 0 15px black" }}>
              <Image
                src="/images/home1.jpg"
                width={500}
                height={200}
                alt="deco design"
              />
            </div>
          </div>
          <div className="gridItem">{text1}</div>
          <div className="gridItem">
            <div style={{ boxShadow: "0 0 15px black" }}>
              <Image
                src="/images/home2.jpg"
                width={500}
                height={200}
                alt="deco design"
              />
            </div>
          </div>
          <div className="gridItem">{text2}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
