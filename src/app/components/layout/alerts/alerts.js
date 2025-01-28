import Swal from "sweetalert2";

export const addedProductAltert = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Producto agregado a carrito",
    showConfirmButton: false,
    timer: 1500,
  });
};
