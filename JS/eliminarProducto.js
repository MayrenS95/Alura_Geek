import { conectApi } from "./conectApi.js";

const limpiarFormulario = document.querySelector(".limpiar");
const formulario = document.querySelector("[data-formulario]");

async function eliminarProductos(id) {
  await conectApi.eliminarProducto(id);
  window.location.href = "../index.html";
}

window.addEventListener("load", function () {
  const botonBorrar = document.querySelectorAll(".papelera");

  botonBorrar.forEach((btn) => {
    const id = btn.getAttribute("data-id");

    btn.addEventListener("click", (event) => {
      eliminarProductos(id);
    });
  });
});

limpiarFormulario.addEventListener("click", (evento) => formulario.reset());
