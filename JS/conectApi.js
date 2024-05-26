async function listaProductos() {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function crearProducto(nombre, precio, imagen) {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: `${precio}`,
      imagen: imagen,
    }),
  });

  if (!conexion.ok) {
    throw new Error("No fue posible cargar el producto");
  }
  const conexionConvertida = await conexion.json();

  return conexionConvertida;
}

async function eliminarProducto(id) {
  try {
    const response = await fetch(`http://localhost:3001/productos/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el producto");
    }

    return response;
  } catch (error) {
    console.error(`Error al eliminar el producto: ${error}`);
  }
}

export const conectApi = {
  listaProductos,
  crearProducto,
  eliminarProducto,
};
