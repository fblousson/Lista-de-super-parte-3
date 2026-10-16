let listaDeSuper = ["Sal", "Leche", "Arroz"];

function logItems(arreglo) {
  arreglo.forEach((producto, indice) => {
    console.log(`${indice}: ${producto}`);
  });
}

let comando = "";

while (comando !== "salir") {
  comando = prompt("Ingrese un comando ('nuevo', 'listar', 'borrar' o 'salir'):");

  if (comando !== null) {
    comando = comando.toLowerCase().trim();
  }

  if (comando === "nuevo") {
    let nuevoProducto = prompt("Ingrese el nombre del producto:");
    if (nuevoProducto) {
      listaDeSuper.push(nuevoProducto.trim());
      console.log(`Producto '${nuevoProducto}' agregado con éxito.`);
    }
  } else if (comando === "listar") {
    console.log("--- Lista de Súper ---");
    logItems(listaDeSuper);
  } else if (comando === "borrar") {
    let indiceBorrar = prompt("Ingrese el índice del producto a eliminar:");
    let indice = parseInt(indiceBorrar);

    if (!isNaN(indice) && indice >= 0 && indice < listaDeSuper.length) {
      let eliminado = listaDeSuper.splice(indice, 1);
      console.log(`Producto '${eliminado[0]}' eliminado de la lista.`);
    } else {
      console.log("Índice no válido.");
    }
  } else if (comando === "salir") {
    console.log("Ejecución finalizada. ¡Hasta luego!");
  } else {
    console.log("Comando no reconocido. Intentá de nuevo.");
  }
}