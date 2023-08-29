function recortar (cantidadLetras, palabras){
    const palabrasRecortadas = palabras.map(palabra => palabra.substring(0, cantidadLetras));
    return palabrasRecortadas
}

// ejemplos de usos

console.log( recortar(4, ["elefante", "dinosaurio","chocolate", "avion","america"]));

console.log(recortar(1, ["algoritmo", "bug", "compilador"]));
