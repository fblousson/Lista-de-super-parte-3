// Recorrido de la lista usando bucle for tradicional
console.log("--- Recorrido con bucle for ---");
for (let i = 0; i < listaDeSuper.length; i++) {
  console.log(`Producto ${i + 1}: ${listaDeSuper[i]}`);
}

// Recorrido alternativo usando .forEach()
console.log("--- Recorrido con .forEach() ---");
listaDeSuper.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto}`);
});