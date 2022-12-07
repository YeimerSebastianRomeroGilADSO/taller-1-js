addEventListener("DOMContentLoaded", ()=>{
   // 19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
    // correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
    // puntos.    
    let nota1 = Number(prompt(`Ingrese el valor de la primera nota`));
    let nota2 = Number(prompt(`Ingrese el valor de la segunda nota`));
    let nota3 = Number(prompt(`Ingrese el valor de la tercera nota`));
    let nota4 = Number(prompt(`Ingrese el valor de la cuarta nota`));
    let prom = (nota1+nota2+nota3+nota4)/4;
    if (prom<3) {
         console.log(`No aprobo`)
    }
     if (prom>3) {
         console.log (`Aprobado`)
     }
})