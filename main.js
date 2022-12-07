addEventListener("DOMContentLoaded", ()=>{
// 20. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
    // por favor utilizar funciones matemáticas de Python para ello
    // d = rc((x2-x1)^2 + (y2-y1)^2)

    let rc = Number(prompt(`Ingrese el valor de rc`));
    let x1 = Number(prompt(`Ingrese el valor de X1`))
    let x2 = Number(prompt(`Ingrese el valor de x2`))
    let y1 = Number(prompt(`Ingrese el valor de y1`))
    let y2 = Number(prompt(`Ingrese el valor de y1`))
    let d =  rc*((x2-x1)^2 + (y2-y1)^2)
    console.log(`El resultado es ${d}`); 
})