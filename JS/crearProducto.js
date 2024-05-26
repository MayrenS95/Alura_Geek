import { conectApi } from "./conectApi.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearProducto(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const nombre=document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;


    await conectApi.crearProducto(nombre,precio,imagen)
    
}

formulario,addEventListener("submit",evento=>crearProducto(evento));