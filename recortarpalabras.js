const recortarPalabras = (cantidadLetras,palabras)=>{
    let recortar = palabras.map(palabra=>{
        return palabra.slice(0, cantidadLetras)

    })
    console.log(recortar)
        
    }
    recortarPalabras(15,["hola","adios","sergio"])
    
