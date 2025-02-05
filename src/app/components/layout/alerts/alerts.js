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

export const successAlert = (text) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `${text}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const errorAlert = (text) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${text}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const confirmAlert = (text1) => {
  return Swal.fire({
    title: `${text1}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  });
};
